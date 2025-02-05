const ContactDetails = (props) => {
  return(
    <>
    <h2> {props.selectedContact.name} </h2>

    <p>{props.selectedContact.email}</p>
    </>
  )
}

export default ContactDetails