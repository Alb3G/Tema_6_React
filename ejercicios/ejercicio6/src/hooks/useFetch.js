import { useEffect } from 'react'
export default function useFetch (URL, setState) {
  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setState(data)
      })
  }, [])
}
