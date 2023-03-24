import PropTypes from 'prop-types'

export default function FirstComponent (props) {
  const handleClick = (bookID) => {
    return (event) => {
      console.log(bookID, event.target)
    }
  }

  return (
    <>
      {/* En el primer componente las props las enviamos desde el componente en App.js */}
      <h1>{props.title}</h1>
      <small>{props.date}</small>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button onClick={handleClick(1)}> Eliminar Book1</button>
      <button onClick={handleClick(2)}> Eliminar Book2</button>

      {/* <button onClick={() => event => console.log(1, event.target)}> Toda la gestion Inline</button> */}
    </>
  )
}

function SecondComponent (props) {
  const span = {
    id: 1,
    info: ' 😈'
  }
  return (
    // Aqui las props las enviamos desde una constante creada antes del return
    <span id={props.id}>{span.info}</span>
  )
}
export { SecondComponent }

FirstComponent.defaultProps = {
  title: 'Otro Titulo',
  date: 'sin fecha'
}
FirstComponent.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  products: PropTypes.array
}
