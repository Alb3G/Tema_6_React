import { useEffect } from 'react'
export default function useFetch (URL, setState, limit) {
  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setState(limit ? data.slice(0, limit) : data)
      })
  }, [])
}
