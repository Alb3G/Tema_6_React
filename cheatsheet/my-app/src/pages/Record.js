import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Record () {
  const { user } = useParams()
  const USERS_URL = 'https://reqres.in/api/users/'
  const [userData, setUserData] = useState({})

  useEffect(() => {
    fetch(`${USERS_URL}${user}`)
      .then(res => res.json())
      .then(data => {
        setUserData(data)
      })
  }, [user])

  return (
    <div className='container'>
      <h2>Record of {userData.data?.first_name}/{user}</h2>
      <ul className='list-group'>
        <li className='list-group-item'><b>Mail:</b> {userData.data?.email}</li>
        <li className='list-group-item'><b>Name:</b> {userData.data?.first_name}</li>
        <li className='list-group-item'><b>Last Name:</b>{userData.data?.last_name}</li>
      </ul>
      <div>
        <img src={userData.data?.avatar} alt='avatar img' width={500} className='p-4' />
      </div>
    </div>
  )
}
