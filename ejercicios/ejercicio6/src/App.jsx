import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'
import './index.css'
import Ejercicio1 from './routes/Ejercicio1'
import Ejercicio2 from './routes/Ejercicio2'
import Ejercicio3 from './routes/Ejercicio3'
import Ejercicio4 from './routes/Ejercicio4'
import { createContext, useState } from 'react'
import useFetch from './hooks/useFetch'

export const AppContext = createContext()

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

  const [toDos, setToDos] = useState([])
  const URL = 'https://jsonplaceholder.typicode.com/todos'
  useFetch(URL, setToDos, 20)

  return (
    <>

      <BrowserRouter>
        <nav className='navbar bg-dark m-3 rounded p-3'>
          <NavLink to='/' className='text-decoration-none text-light'>Ejercicio1</NavLink>
          <NavLink to='/Ejercicio2' className='text-decoration-none text-light '>Ejercicio2</NavLink>
          <NavLink to='/Ejercicio3' className='text-decoration-none text-light '>Ejercicio3</NavLink>
          <NavLink to='/Ejercicio4' className='text-decoration-none text-light '>Ejercicio4</NavLink>
        </nav>
        <AppContext.Provider value={{ contacts, setContacts, toDos, setToDos }}>
          <Routes>
            <Route exact path='/' element={<Ejercicio1 />} />
            <Route path='/Ejercicio2' element={<Ejercicio2 />} />
            <Route path='/Ejercicio3' element={<Ejercicio3 />} />
            <Route path='/Ejercicio4' element={<Ejercicio4 />} />
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>

    </>
  )
}

export default App
