import './App.css'
import Counter from './components/Counter'
import FirstComponent, { SecondComponent } from './components/FirstComponent'
function App () {
  return (
    <div className='App'>
      <FirstComponent title='Titulo enviado desde el padre' date='9 de marzo de 2023' />
      <FirstComponent />
      <SecondComponent id={1} />
      <Counter />
    </div>
  )
}

export default App
