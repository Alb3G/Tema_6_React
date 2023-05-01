import { useState, useContext } from 'react'
import useFetch from '../hooks/useFetch'
import Input from '../components/Input'
import Todos from '../components/Todos'
import { StateContext } from '../App'

function App () {
  const [toDos, setToDos] = useContext(StateContext)

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
