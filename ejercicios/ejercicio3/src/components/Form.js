export default function Form () {
  return (
    <form className='form-group container'>
      <input type='text' className='form-control mb-3' id='nameInput' placeholder='Add name ✏️' />
      <input type='text' className='form-control mb-3' id='lastNameInput' placeholder='Add Last name ✏️' />
      <input type='number' className='form-control mb-3' id='phoneInput' placeholder='Add phone number 📞' />
      <input type='text' className='form-control mb-3' id='addressInput' placeholder='Add address 🏠' />
      <input type='number' className='form-control mb-3' id='postalCodeInput' placeholder='Add postal code 📫' />
      <input type='text' className='form-control mb-3' id='cityInput' placeholder='Add city 🌃' />
      <input type='submit' className='btn btn-warning mb-3' />
    </form>
  )
}
