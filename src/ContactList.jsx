import { useState, useEffect} from 'react';

const ContactList = () => {
  const [ allContact, setAllContact ] = useState([]);

  useEffect(() => {

    const getContact = async() => {
      const response =  await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
      // console.log(response)
      const jsonObj = await response.json();
      console.log(jsonObj)
      const retrievedContact = jsonObj;
      setAllContact(retrievedContact);

    }
    getContact();
  }, []);


  return (
    <ol>
      {
        allContact.map((props) => {
          return (
            <li key={allContact.id}>
              {allContact.username}
            </li>
          )
        })
      }
    </ol>
  )

}

export default ContactList