import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'

import Index from './pages/Index'
import DashBoard from './pages/DashBoard'
import Record from './pages/Record'
import Error from './pages/Error'
import './App.css'

export default function Router () {
  return (
    <div>
      <BrowserRouter>
        <nav className='styled-router'>
          <NavLink to='/' style={{ textDecoration: 'none' }}>Index</NavLink>
          <NavLink to='/dashboard' style={{ textDecoration: 'none', marginBottom: '1rem' }}>DashBoard</NavLink>
          <NavLink to='/record/3' style={{ textDecoration: 'none' }}>Record</NavLink>
        </nav>

        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/record/:user' element={<Record />} />

          <Route path='*' element={<Error />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}
