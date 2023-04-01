import { useEffect } from 'react'

export default function UseEffectComponent ({ count, setCount }) {
  console.log('Me ejecuto cada vez que cambia el componente')

  useEffect(() => {
    console.log('Acabo de montarme')
    return () => console.log('Me desmonto')
  }, [])

  return (
    <div>
      <span>{count}</span><br />
      <button onClick={() => setCount(count + 1)}>Increase +</button>
    </div>
  )
}
