import { useState } from 'react'

export default function Form ({ setContacts }) {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [city, setCity] = useState('')

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
    const newContact = { name, lastName, phone, address, postalCode, city }
    // si a setContacts le pasamos una funcion por parametro nos devuelve el valor actual de lo que vale "contacts" sin tener que importarlo.
    setContacts((contacts) => [...contacts, newContact])
  }

  return (
    <form className='form-group container' onSubmit={submit}>
      <input type='text' className='form-control mb-3' onChange={handleName} placeholder='Add name ✏️' />
      <input type='text' className='form-control mb-3' onChange={handleLastName} placeholder='Add Last name ✏️' />
      <input type='number' className='form-control mb-3' onChange={handlePhone} placeholder='Add phone number 📞' />
      <input type='text' className='form-control mb-3' onChange={handleAddress} placeholder='Add address 🏠' />
      <input type='number' className='form-control mb-3' onChange={handlePostalCode} placeholder='Add postal code 📫' />
      <input type='text' className='form-control mb-3' onChange={handleCity} placeholder='Add city 🌃' />
      <input type='submit' className='btn btn-warning mb-3' />
    </form>
  )
}
