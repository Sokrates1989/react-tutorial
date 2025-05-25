import React from "react";
import Avatar from "./Avatar";
import ContactDetail from "./ContactDetail";

function ContactCard(props) {
  return (
    <div>
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

export default ContactCard;
