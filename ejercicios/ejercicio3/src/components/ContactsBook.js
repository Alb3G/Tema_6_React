export default function Contacts ({ contacts, setContacts }) {
  const contactUl = contacts.map(({ id, name, lastName, address, city, postalCode, phone }) => {
    return (
      <div key={phone + id} className='d-inline-flex w-25'>
        <ul key={id} className='list-group mb-3 mx-3 w-100'>
          <li className='list-group-item active'>Contact</li>
          <li className='list-group-item '>{name}</li>
          <li className='list-group-item '>{lastName}</li>
          <li className='list-group-item '>{phone}</li>
          <li className='list-group-item '>{address} {postalCode} {city}</li>
          <li className='list-group-item '><button type='button' className='btn btn-warning' id={id} onClick={deleteContact}>Delete</button></li>
        </ul>
      </div>
    )
  })
  function deleteContact (event) {
    if (event.target.tagName === 'BUTTON') {
      const newContacts = contacts.filter((contact) => contact.id !== parseInt(event.target.id))
      setContacts(newContacts)
      console.log(typeof event.target.id, event.target.id)
    }
  }
  return (
    <>
      {contactUl}
    </>
  )
}