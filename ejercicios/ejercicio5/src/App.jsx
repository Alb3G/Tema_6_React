import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'
import { createContext, useState } from 'react'
import './index.css'
import Ejercicio1 from './routes/Ejercicio1'
import Ejercicio2 from './routes/Ejercicio2'
import Ejercicio3 from './routes/Ejercicio3'
import Ejercicio4 from './routes/Ejercicio4'

export const StateContext = createContext({})

function App () {
  const [toDos, setToDos] = useState([])
  return (
    <>
      <StateContext.Provider value={[toDos, setToDos]}>
        <BrowserRouter>
          <nav className='navbar bg-body-tertiary bg-warning mb-3'>
            <div className='container-fluid'>
              <NavLink to='/Ejercicio1' className='navbar-brand linksColor'>Ejercicio1</NavLink>
              <NavLink to='/Ejercicio2' className='navbar-brand linksColor'>Ejercicio2</NavLink>
              <NavLink to='/Ejercicio3' className='navbar-brand linksColor'>Ejercicio3</NavLink>
              <NavLink to='/Ejercicio4' className='navbar-brand linksColor'>Ejercicio4</NavLink>
            </div>
          </nav>

          <Routes>
            <Route path='/Ejercicio1' element={<Ejercicio1 />} />
            <Route path='/Ejercicio2' element={<Ejercicio2 />} />
            <Route path='/Ejercicio3' element={<Ejercicio3 />} />
            <Route path='/Ejercicio4' element={<Ejercicio4 />} />
          </Routes>
        </BrowserRouter>
      </StateContext.Provider>
    </>
  )
}

export default App
