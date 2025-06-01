import React from "react";

// Header, footer, note.
import Note from "./components/note/Note";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Contact card.
import ContactCard, {
  createContactCard,
  getContactSummary
} from "./components/contact-card/ContactCard";
import contacts from "./data/contacts";

function App() {
  return (
    <>
      <Header title="Property based Header"/>
      
      <h1 className="heading">My Contacts</h1>
      
      <p className="sub-title">
        My Contacts are: {getContactSummary(contacts)}
        <br/>
        What did you achieve in your life?
      </p>
      
      <ContactCard
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />

      
      {/* 
          Explanation:
          When calling contacts.map(createContactCard), the map function internally
          calls createContactCard(contact, index) for each element in the contacts array.
          Array.prototype.map passes three arguments to the callback function:

          1. The current element (in this case, a contact object)
          2. The current index
          3. The entire array (not used here, but available)

          This means our createContactCard function will receive both the contact data
          and the index, making it a perfect fit for use in React to render lists like this:
        */}
      {contacts
        .filter(contact => contact.name === "Jack Bauer" || contact.name === "Chuck Norris")
        .map(createContactCard)}

      <Footer />
    </>
  );
}

export default App;
