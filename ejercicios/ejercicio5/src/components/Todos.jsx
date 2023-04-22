import './Todos.css'

export default function Todos ({ toDos, setToDos }) {
  const handleDelete = title => setToDos(toDos.filter(toDo => toDo.title !== title))
  const toggle = (e, index) => {
    if (e.target.tagName !== 'BUTTON') {
      const newToDos = [...toDos]
      newToDos[index].completed = !newToDos[index].completed
      setToDos(newToDos)
    }
  }
  return (
    <ul className='list-group'>
      {toDos.map((toDo, index) => {
        return (
          <li
            key={toDo.id + index}
            className={`list-group-item p-3 d-flex justify-content-between ${toDo.completed ? 'completed bg-light' : ''}`}
            onClick={(e) => { toggle(e, index) }}
          >
            <span>{index + 1} ➯ {toDo.title}</span>
            <button className='btn btn-danger' onClick={() => handleDelete(toDo.title)}>Delete</button>
          </li>
        )
      })}
    </ul>
  )
}
