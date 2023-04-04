import './App.css'
import ToDos from './components/ToDos'
import { useEffect } from 'react'
import Input from './components/Input'

function App () {
  const URL = 'https://jsonplaceholder.typicode.com/todos'

  useEffect(() => {
    fetchData()
  }, [URL])

  function fetchData () {
    fetch(URL)
      .then(response => response.json())
      .then(data => data.slice(0, 20).forEach(element => console.log(element)))
  }

  return (
    <div className='App'>
      <Input />
      <ToDos />
    </div>
  )
}

export default App
