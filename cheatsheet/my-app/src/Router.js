import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Index from './pages/Index'
import DashBoard from './pages/DashBoard'
import Record from './pages/Record'
import Error from './pages/Error'

export default function Router () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/record:user' element={<Record />} />

          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
