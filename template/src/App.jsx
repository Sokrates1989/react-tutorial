import React from "react";

// Header, footer, note.
import Note from "./components/note/Note";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Contact card.
import ContactCard from "./components/contact-card/ContactCard";
import contacts from "./data/contacts";


/**
 * Generates a ContactCard React component from a contact object.
 *
 * This function is designed to be used as a callback for Array.prototype.map.
 * It takes a contact object and its index in the array, and returns a JSX
 * element representing the contact's information.
 *
 * The index is passed as the second parameter and is used as the unique key
 * required by React when rendering lists. While using an actual unique ID is
 * preferred for production, the index can be used in learning or prototyping.
 *
 * @param {Object} contact - The contact object containing the data to display.
 * @param {string} contact.name - The contact's name.
 * @param {string} contact.imgURL - The URL to the contact's image.
 * @param {string} contact.phone - The contact's phone number.
 * @param {string} contact.email - The contact's email address.
 * @param {number} index - The current index in the array, used as React's key.
 * @returns {JSX.Element} A ContactCard component populated with contact data.
 */
function createContactCard(contact, index) {
  return (
    <ContactCard
      key={index}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <>
      <Header title="Property based Header"/>
      <Note 
        title="Property Given Title" 
        content="Property based content" 
      />
      
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
    {contacts.map(createContactCard)}
      <Footer />
    </>
  );
}

export default App;
