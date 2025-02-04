import { useState, useEffect} from 'react';

const ContactList = () => {
  const [ contacts, setContacts ] = useState([]);

  useEffect(() => {

    const getContacts = async() => {
      const response =  await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
      // console.log(response)
      const jsonObj = await response.json();
      console.log(jsonObj)
      const retrievedContact = jsonObj;
      setContacts(retrievedContact);

    }
    getContacts();
  }, []);


  return (
    <ol>
      {
        contacts.map((contact) => {
          return (
            <li key={contact.id}>
              {contact.username}
            </li>
          )
        })
      }
    </ol>
  )

}

export default ContactList