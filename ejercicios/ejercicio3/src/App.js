import './App.css'
import ContactsBook from './components/ContactsBook'

function App () {
  const contacts = [
    {
      id: 1,
      name: 'Alberto',
      lastName: 'Guzman',
      address: 'C/Spengler',
      city: 'Malaga',
      postalCode: 29007,
      phone: 665524789
    },
    {
      id: 2,
      name: 'Pepe',
      lastName: 'Perico',
      address: 'C/Sevill',
      city: 'Granada',
      postalCode: 28003,
      phone: 635414789
    },
    {
      id: 3,
      name: 'Ares',
      lastName: 'Guzman',
      address: 'C/Arriba',
      city: 'Malaga',
      postalCode: 28000,
      phone: 612735861
    }
  ]
  return (
    <div className='App'>
      <ContactsBook contacts={contacts} />
    </div>
  )
}

export default App
