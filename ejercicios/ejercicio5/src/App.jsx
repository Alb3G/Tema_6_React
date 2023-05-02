import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'
import './index.css'
import Ejercicio1 from './routes/Ejercicio1'
import Ejercicio2 from './routes/Ejercicio2'
import Ejercicio3 from './routes/Ejercicio3'
import Ejercicio4 from './routes/Ejercicio4'

function App () {
  return (
    <>

      <BrowserRouter>
        <nav className='navbar bg-dark m-3 rounded p-3'>
          <NavLink to='/' className='text-decoration-none text-light'>Ejercicio1</NavLink>
          <NavLink to='/Ejercicio2' className='text-decoration-none text-light '>Ejercicio2</NavLink>
          <NavLink to='/Ejercicio3' className='text-decoration-none text-light '>Ejercicio3</NavLink>
          <NavLink to='/Ejercicio4' className='text-decoration-none text-light '>Ejercicio4</NavLink>
        </nav>

        <Routes>
          <Route exact path='/' element={<Ejercicio1 />} />
          <Route path='/Ejercicio2' element={<Ejercicio2 />} />
          <Route path='/Ejercicio3' element={<Ejercicio3 />} />
          <Route path='/Ejercicio4' element={<Ejercicio4 />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
