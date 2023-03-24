import { useState } from 'react'

export default function Counter () {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked the button {count} times 🤓</p>
      <button onClick={() => count < 10 && setCount(count + 1)}>Increase +</button>
      <button onClick={() => count > 0 && setCount(count - 1)}>Decrease -</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
