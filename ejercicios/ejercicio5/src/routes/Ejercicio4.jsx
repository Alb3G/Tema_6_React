import { useState } from 'react'
import useFetch from '../hooks/useFetch'
import Input from '../components/Input'
import Todos from '../components/Todos'

function App () {
  const [toDos, setToDos] = useState([])

  const URL = 'https://jsonplaceholder.typicode.com/todos'
  useFetch(URL, setToDos)

  return (
    <div className='App'>
      <Input setToDos={setToDos} />
      <Todos setToDos={setToDos} toDos={toDos} />
    </div>
  )
}

export default App
