import { useEffect, useState } from "react"
import ContactForm from "./components/ContactForm/ContactForm"
import ContactList from "./components/ContactList/ContactList"
import "./App.css"

export default function App() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    console.log("Список контактов обновлен:", contacts)
  }, [contacts])

  const addContact = (contact) => {
    setContacts([...contacts, contact])
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter((ars) => ars.id !== id))
  }

  return (
    <div className="app">
      <div className="app__container">
        <h1 className="app__title">Контакт-менеджер</h1>

        <ContactForm onAdd={addContact} />

        {contacts.length === 0 ? (
          <p className="app__empty">Список контактов пуст</p>
        ) : (
          <ContactList contacts={contacts} onDelete={deleteContact} />
        )}
      </div>
    </div>
  )
}
