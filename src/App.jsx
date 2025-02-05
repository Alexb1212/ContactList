import { useState } from 'react';

import ContactList from "./ContactList.jsx";
import ContactDetails from './ContactDetails.jsx';

const App = () => {
  const [ selectedContact, setSelectedContact ] = useState({});

  return (
    <>
     <h1>Contact List</h1>

     {
      selectedContact.id ?
      <ContactList setSelectedContact={setSelectedContact}/> :
      <ContactDetails selectedContact={selectedContact}/>
     }
    
    </>
  )
}

export default App
