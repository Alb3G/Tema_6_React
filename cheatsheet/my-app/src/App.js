import './App.css'
import FirstComponent, { SecondComponent } from './components/FirstComponent'

function App () {
  return (
    <div className="App">
      <FirstComponent title ="Titulo enviado desde el padre" date="9 de Marzo de 2023"/>
      <SecondComponent />
    </div>
  )
}

export default App
