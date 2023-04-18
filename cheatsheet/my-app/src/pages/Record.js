import { useParams } from 'react-router-dom'

export default function Record (props) {
  const { user } = useParams()
  return (
    <div>Record of {user}</div>
  )
}
