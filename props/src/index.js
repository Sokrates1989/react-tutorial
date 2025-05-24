import React from "react";
import ReactDOM from "react-dom/client";
import contacts from "./contacts";
import ContactCard from "./components/ContactCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>

  <h1 className="heading">My Contacts</h1>
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
  <ContactCard
    name={contacts[2].name}
    img={contacts[2].imgURL}
    tel={contacts[2].phone}
    email={contacts[2].email}
  />

  
  {contacts.map((contact, index) => (
      <ContactCard
        key={index}
        name={contact.name}
        img={contact.imgURL}
        tel={contact.phone}
        email={contact.email}
      />
    ))}
</>
);