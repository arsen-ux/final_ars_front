import "./ContactItem.css"

export default function ContactItem({ id, name, phone, email, onDelete }) {
  return (
    <div className="contact-item">
      <div className="contact-item__main">
        <div className="contact-item__name">{name}</div>
        <div className="contact-item__meta">
          <span className="contact-item__meta-item">{phone}</span>
          <span className="contact-item__dot">•</span>
          <span className="contact-item__meta-item">{email}</span>
        </div>
      </div>

      <button
        className="contact-item__delete-btn"
        type="button"
        onClick={() => onDelete(id)}
      >
        Удалить
      </button>
    </div>
  )
}