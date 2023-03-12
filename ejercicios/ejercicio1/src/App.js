import './App.css'
import Card from './components/card/Card'

function App () {
  return (
    <div className='App'>
      <Card
        title='Invincible'
        paragraph='Super Hero strong as hell, he was betrayed by his own father and fought against him to death.'
        link='https://es.wikipedia.org/wiki/Invencible_(historieta)'
        buttonText='+ Info'
      />
    </div>
  )
}

export default App
