import { useState } from 'react'

export default function Form ({ setContacts }) {
  const initialState = { id: 4, name: '', lastName: '', phone: '', address: '', postalCode: '', city: '' }
  const [form, setForm] = useState(initialState)
  const [id, setId] = useState(4)

  const handleInput = event => setForm({ ...form, [event.target.name]: event.target.value })
  const handleId = () => setId(id + 1)

  function submit (event) {
    event.preventDefault()
    setContacts((contacts) => [...contacts, form])
    setForm(initialState)
    handleId('')
  }

  return (
    <form className='form-group container' onSubmit={submit}>
      <input type='text' className='form-control mb-3' value={form.name} onChange={handleInput} placeholder='Add name ✏️' />
      <input type='text' className='form-control mb-3' value={form.lastName} onChange={handleInput} placeholder='Add Last name ✏️' />
      <input type='number' className='form-control mb-3' value={form.phone} onChange={handleInput} placeholder='Add phone number 📞' />
      <input type='text' className='form-control mb-3' value={form.address} onChange={handleInput} placeholder='Add address 🏠' />
      <input type='number' className='form-control mb-3' value={form.postalCode} onChange={handleInput} placeholder='Add postal code 📫' />
      <input type='text' className='form-control mb-3' value={form.city} onChange={handleInput} placeholder='Add city 🌃' />
      <input type='submit' className='btn btn-warning mb-3' />
    </form>
  )
}
