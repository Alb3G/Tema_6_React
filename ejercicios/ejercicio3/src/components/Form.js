import { useState } from 'react'

export default function Form ({ setContacts }) {
  const [id, setId] = useState(4)
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [city, setCity] = useState('')

  function handleId () {
    setId(id + 1)
  }

  function handleName (event) {
    setName(event.target.value)
  }
  function handleLastName (event) {
    setLastName(event.target.value)
  }
  function handlePhone (event) {
    setPhone(event.target.value)
  }
  function handleAddress (event) {
    setAddress(event.target.value)
  }
  function handlePostalCode (event) {
    setPostalCode(event.target.value)
  }
  function handleCity (event) {
    setCity(event.target.value)
  }

  function submit (event) {
    event.preventDefault()
    const newContact = { id, name, lastName, phone, address, postalCode, city }
    // si a setContacts le pasamos una funcion por parametro nos devuelve el valor actual de lo que vale "contacts" sin tener que importarlo.
    setContacts((contacts) => [...contacts, newContact])
    // event.target.reset() no usamos esta forma ni la de setState('') para gestionar los formularios primero porque el reset
    // nos vacia el input pero los estados son los mismos
    setName('')
    setLastName('')
    setPhone('')
    setAddress('')
    setPostalCode('')
    setCity('')
    handleId('')
  }

  return (
    <form className='form-group container' onSubmit={submit}>
      <input type='text' className='form-control mb-3' value={name} onChange={handleName} placeholder='Add name ✏️' />
      <input type='text' className='form-control mb-3' value={lastName} onChange={handleLastName} placeholder='Add Last name ✏️' />
      <input type='number' className='form-control mb-3' value={phone} onChange={handlePhone} placeholder='Add phone number 📞' />
      <input type='text' className='form-control mb-3' value={address} onChange={handleAddress} placeholder='Add address 🏠' />
      <input type='number' className='form-control mb-3' value={postalCode} onChange={handlePostalCode} placeholder='Add postal code 📫' />
      <input type='text' className='form-control mb-3' value={city} onChange={handleCity} placeholder='Add city 🌃' />
      <input type='submit' className='btn btn-warning mb-3' />
    </form>
  )
}
