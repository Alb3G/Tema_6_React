import { useEffect, useState } from 'react'
import Input from './components/Input'
import Todos from './components/Todos'

function App () {
  const [toDos, setToDos] = useState([])

  useEffect(() => {
    const URL = 'https://jsonplaceholder.typicode.com/todos'
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setToDos(data.slice(0, 20))
      })
  }, [])

  return (
    <div className='App'>
      <Input setToDos={setToDos} />
      <Todos setToDos={setToDos} toDos={toDos} />
    </div>
  )
}

export default App
