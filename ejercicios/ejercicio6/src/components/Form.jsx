import { useState } from 'react'

export default function Form ({ setContacts }) {
  const initialState = { id: 4, name: '', lastName: '', address: '', city: '', postalCode: '', phone: '' }
  const [form, setForm] = useState(initialState)
  const [id, setId] = useState(5)
  // const [name, setName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [address, setAddress] = useState('')
  // const [city, setCity] = useState('')
  // const [postalCode, setPostalCode] = useState('')
  // const [phone, setPhone] = useState('')

  const handleId = () => setId(id + 1)
  const handleInput = (event) => setForm({ ...form, [event.target.name]: event.target.value })
  // const handleName = event => setName(event.target.value)
  // const handleLastName = event => setLastName(event.target.value)
  // const handleAddress = event => setAddress(event.target.value)
  // const handleCity = event => setCity(event.target.value)
  // const handlePostalCode = event => setPostalCode(event.target.value)
  // const handlePhone = event => setPhone(event.target.value)

  function submit (event) {
    event.preventDefault()

    const newContact = { ...form, id }
    setContacts((contacts) => [...contacts, newContact])
    setForm(initialState)
    handleId()
    // setName('')
    // setLastName('')
    // setAddress('')
    // setCity('')
    // setPostalCode('')
    // setPhone('')
  }

  return (
    <form action='' className='container' onSubmit={submit}>
      <input type='text' className='form-control mb-3' value={form.name} placeholder='Add Name' onChange={handleInput} />
      <input type='text' className='form-control mb-3' value={form.lastName} placeholder='Add LastName' onChange={handleInput} />
      <input type='text' className='form-control mb-3' value={form.address} placeholder='Add Address' onChange={handleInput} />
      <input type='text' className='form-control mb-3' value={form.city} placeholder='Add City' onChange={handleInput} />
      <input type='number' className='form-control mb-3' value={form.postalCode} placeholder='Add PostalCode' onChange={handleInput} />
      <input type='number' className='form-control mb-3' value={form.phone} placeholder='Add Phone' onChange={handleInput} />
      <input type='submit' className='btn btn-warning' />
    </form>
  )
}
