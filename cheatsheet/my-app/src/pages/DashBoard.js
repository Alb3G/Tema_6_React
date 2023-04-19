import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function DashBoard () {
  const [userId, setUserId] = useState('')
  const navigate = useNavigate()

  function handleCLick () {
    // En esta version de react router no se usa el .push() para ir a un path.
    navigate(`/record/${userId}`)

    if (userId <= 0 || userId > 12) {
      navigate('/error')
    }
  }
  return (
    <div className='container d-flex justify-content-center'>
      <input type='text' className='form-control w-25' onChange={e => setUserId(e.target.value)} value={userId} />
      <button className='btn btn-warning ms-2' onClick={handleCLick}>Go to profile {userId}</button>
    </div>
  )
}
