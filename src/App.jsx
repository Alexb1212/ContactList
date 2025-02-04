import { useState } from 'react';

import ContactList from "./ContactList.jsx";

const App = () => {
  const [ allContact, setAllContact ] = useState([]);

  return (
    <>
     <h1>Contact List</h1>

     <ContactList/>
    </>
  )
}

export default App
