import React from "react";
import ReactDOM from "react-dom";
import ContactForm from "./components/ContactForm.jsx";


function Main() {

  const [contacts, updateContacts] = useState([]);

  // const addContact = function() {
  //   console.log("first");
  // };
  // const addContact = (contactInfo) => {
  //   updateContacts([...contacts, contactInfo]);
  // };
  // console.log(contacts)

  return (
    <div>
      <ContactForm addContact="5" prueba='11' />
    </div>
  );
}

export default Main;
