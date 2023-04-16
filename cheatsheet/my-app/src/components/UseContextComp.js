import { useContext } from 'react'
import { GlobalContext } from '../App'

export default function UseContextComp () {
  const msg = useContext(GlobalContext)
  return (
    <div>{msg}</div>
  )
}
