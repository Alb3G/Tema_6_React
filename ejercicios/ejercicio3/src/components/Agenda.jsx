export default function Agenda ({ contacts, setContacts }) {
  const contactUl = contacts.map(({ id, name, lastName, address, city, postalCode, phone }) => {
    return (
      <div key={id + phone} className='d-inline-flex w-25'>
        <ul key={id} className='list-group mb-3 mx-3 w-100'>
          <li className='list-group-item active'>Contact-{id}</li>
          <li className='list-group-item'>{name}</li>
          <li className='list-group-item'>{lastName}</li>
          <li className='list-group-item'>{address}</li>
          <li className='list-group-item'>{city} / {postalCode} / {phone}</li>
          <li className='list-group-item'><button className='btn btn-warning' id={id} onClick={handleContact}>Delete</button></li>
        </ul>
      </div>
    )
  })

  function handleContact (event) {
    const newContacts = contacts.filter(contact => contact.id !== parseInt(event.target.id))
    setContacts(newContacts)
  }
  return (
    <div>
      {contactUl}
    </div>
  )
}
