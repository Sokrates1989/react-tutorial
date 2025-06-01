import React from "react";

// emojipedia widget.
import EmojiExplainWidget from "./components/emojipedia/EmojiExplainWidget";
import emojipedia from "./data/emojipedia";

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


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {/* 
            Explanation:
            When calling emojipedia.map(createContactCard), the map function internally
            calls createContactCard(contact, index) for each element in the emojipedia array.
            Array.prototype.map passes three arguments to the callback function:

            1. The current element (in this case, a contact object)
            2. The current index
            3. The entire array (not used here, but available)

            This means our createContactCard function will receive both the contact data
            and the index, making it a perfect fit for use in React to render lists like this:
          */}
        {emojipedia.map(createEmojiExplainWidget)}
      </dl>
    </div>
  );
}

export default App;
