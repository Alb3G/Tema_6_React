import { useState } from 'react'

export default function Input ({ setToDos }) {
  const [newTodo, setNewTodo] = useState('')
  function handleSubmit (event) {
    event.preventDefault()
    setToDos(toDos => [{ title: newTodo, completed: false }, ...toDos])
    setNewTodo('')
  }
  return (
    <div className='container me-2 mb-3'>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Add a Task' value={newTodo} className='form-control w-75' onChange={e => setNewTodo(e.target.value)} />
      </form>
    </div>
  )
}
