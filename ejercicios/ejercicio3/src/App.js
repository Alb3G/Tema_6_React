import './App.css'
import ContactsBook from './components/ContactsBook'
import { useState } from 'react'
import Form from './components/Form'

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
    }
  ])

  // const contacts = [
  //   {
  //     id: 1,
  //     name: 'Alberto',
  //     lastName: 'Guzman Moreno',
  //     address: 'C/Spengler piso 4I',
  //     city: 'Malaga',
  //     postalCode: 29007,
  //     phone: 665524789
  //   },
  //   {
  //     id: 2,
  //     name: 'Pepe',
  //     lastName: 'Perico Palotes',
  //     address: 'C/Sevilla piso 2H',
  //     city: 'Granada',
  //     postalCode: 28003,
  //     phone: 635414789
  //   },
  //   {
  //     id: 3,
  //     name: 'Ares',
  //     lastName: 'Guzman Bichon',
  //     address: 'C/Arriba piso Heaven',
  //     city: 'Malaga',
  //     postalCode: 28000,
  //     phone: 612735861
  //   }
  // ]
  return (
    <div className='App container'>
      <h1>Lista de Contactos</h1>
      <ContactsBook contacts={contacts} />
      <Form setContacts={setContacts} />
    </div>
  )
}

export default App
