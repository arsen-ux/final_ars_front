import { useState } from "react"
import "./ContactForm.css"

export default function ContactForm({ onAdd }) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const handleSubmit = (ars) => {
    ars.preventDefault()

    const trimmedName = name.trim()
    const trimmedPhone = phone.trim()
    const trimmedEmail = email.trim()
    if (!trimmedName || !trimmedPhone || !trimmedEmail) return
    const newContact = {
      id: Date.now() + Math.random(),
      name: trimmedName,
      phone: trimmedPhone,
      email: trimmedEmail
    }
    onAdd(newContact)

    setName("")
    setPhone("")
    setEmail("")
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <input
          className="contact-form__input"
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(ars) => setName(ars.target.value)}
        />
        <input
          className="contact-form__input"
          type="tel"
          placeholder="Телефон"
          value={phone}
          onChange={(ars) => setPhone(ars.target.value)}
        />
      </div>
      <input
        className="contact-form__input contact-form__input--full"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(ars) => setEmail(ars.target.value)}
      />
      <button className="contact-form__btn" type="submit">
        Добавить контакт
      </button>
    </form>
  )
}