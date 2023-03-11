// rfc snippet para crear un componente funcional
// import { } from 'react' es opcional si usamos un fragment par encapsular los elementos.

export default function FirstComponent (props) {
  console.log(props, typeof props)
  return (
    <>
        <h1>Titulo</h1>
        <small>9 de Marzo de 2023</small>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deserunt repellat omnis voluptatem.</p>
    </>
  )
}

function SecondComponent () {
  return (
    <button>Click Me!</button>
  )
}

export { SecondComponent }
