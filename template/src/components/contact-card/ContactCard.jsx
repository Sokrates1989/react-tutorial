import React from "react";
import Avatar from "./Avatar";
import ContactDetail from "./ContactDetail";

function ContactCard(props) {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img} />
        </div>
        <div className="bottom">
          <ContactDetail detail={props.tel} />
          <ContactDetail detail={props.email} />
        </div>
      </div>
    </div>
  );
}


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



function getContactSummary(contacts) {
  const names = contacts.map(contact => contact.name);

  if (names.length === 0) {
    return "";
  } else if (names.length === 1) {
    return names[0];
  } else if (names.length === 2) {
    return names.join(" and ");
  } else {
    return names.slice(0, -1).join(", ") + " and " + names[names.length - 1];
  }
}

export {
  ContactCard as default,
  createContactCard,
  getContactSummary
};
