export default function Contacts ({ contacts }) {
  const contactUl = contacts.map(({ id, name, lastName, address, city, postalCode, phone }) => {
    return (
      <div key={phone + id} className='d-inline-flex'>
        <ul key={id} className='list-group mb-3 mx-3'>
          <li className='list-group-item active'>Contact</li>
          <li className='list-group-item '>{name}</li>
          <li className='list-group-item '>{lastName}</li>
          <li className='list-group-item '>{phone}</li>
          <li className='list-group-item '>{address} {postalCode} {city}</li>
          <li className='list-group-item '><button type='button' className='btn btn-warning'>Delete</button></li>
        </ul>
      </div>
    )
  })

  return (
    <>
      {contactUl}
    </>
  )
}
