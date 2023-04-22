import { useState } from 'react'

import Agenda from '../components/Agenda'
import Form from '../components/Form'

function App () {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'Alberto',
      lastName: 'Guzman Moreno',
      address: 'C/Spengler',
      city: 'Malaga',
      postalCode: 29007,
      phone: 665524789
    },
    {
      id: 2,
      name: 'Pepe',
      lastName: 'Perico Palotes',
      address: 'C/Sevilla',
      city: 'Granada',
      postalCode: 28003,
      phone: 635414789
    },
    {
      id: 3,
      name: 'Ares',
      lastName: 'Guzman Bichon',
      address: 'C/Arriba',
      city: 'Malaga',
      postalCode: 28000,
      phone: 612735861
    },
    {
      id: 4,
      name: 'Papurreitors',
      lastName: 'Guzman Bichon',
      address: 'C/Arriba',
      city: 'Malaga',
      postalCode: 28000,
      phone: 612735861
    }
  ])
  return (
    <div className='App container'>
      <h1 className='mx-3'>Contact List</h1>
      <Agenda contacts={contacts} setContacts={setContacts} />
      <Form setContacts={setContacts} />
    </div>
  )
}

export default App
