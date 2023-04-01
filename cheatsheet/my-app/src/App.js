import './App.css'
import UseEffectComponent from './components/UseEffectComponent'
// import Counter from './components/Counter'
// import FirstComponent, { SecondComponent } from './components/FirstComponent'

import { useState } from 'react'
function App () {
  const [display, setDisplay] = useState(true)
  const [count, setCount] = useState(0) // Lo que hacemos al pasarle por props el count y setCount es que no nos actualice a 0 el estado del contador y que nos guarde lo que vale.

  return (
    <div className='App'>
      {display && <UseEffectComponent count={count} setCount={setCount} />}
      <button onClick={() => setDisplay(!display)}>display</button>
      {/* <FirstComponent title='Titulo enviado desde el padre' date='9 de marzo de 2023' />
      <FirstComponent />
      <SecondComponent id={1} />
      <Counter /> */}
    </div>
  )
}

export default App
