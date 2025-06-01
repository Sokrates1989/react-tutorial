import React from "react";

// React component
function EmojiExplainWidget(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.name}>
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>
        {props.meaning}
      </dd>
    </div>
  );
}

// Factory function for rendering widgets
function createEmojiExplainWidget(emojiData, index) {
  return (
    <EmojiExplainWidget
      key={index}
      emoji={emojiData.emoji}
      name={emojiData.name}
      meaning={emojiData.meaning}
    />
  );
}

// Truncate long meanings
function getTruncatedMeanings(emojipedia, maxLength = 100) {
  return emojipedia.map(entry => {
    let meaning = entry.meaning;
    return meaning.length > maxLength
      ? meaning.slice(0, maxLength - 3) + "..."
      : meaning;
  });
}

// Factory for rendering <p> tags
function createMeaningOutput(meaning, index) {
  return <p key={index}>{meaning}</p>;
}

export {
  EmojiExplainWidget as default,
  createEmojiExplainWidget,
  createMeaningOutput,
  getTruncatedMeanings
};
