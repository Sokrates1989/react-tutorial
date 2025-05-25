import React from "react";

// Header, footer, note.
import Note from "./components/note/Note";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Contact card.
import ContactCard from "./components/contact-card/ContactCard";
import contacts from "./data/contacts";

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
      <ContactCard
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Footer />
    </>
  );
}

export default App;
