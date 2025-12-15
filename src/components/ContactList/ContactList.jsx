import ContactItem from "../ContactItem/ContactItem"
import "./ContactList.css"

export default function ContactList({ contacts, onDelete }) {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          phone={contact.phone}
          email={contact.email}
          onDelete={onDelete}/>
      ))}
    </div>
  )
}