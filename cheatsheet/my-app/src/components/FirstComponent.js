import PropTypes from 'prop-types'
export default function FirstComponent (props) {
//   console.log(props.title)
  return (
    <>
      {/* En el primer componente las props las enviamos desde el componente en App.js */}
      <h1>{props.title}</h1>
      <small>{props.date}</small>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </>
  )
}

function SecondComponent (props) {
  const buttonInfo = {
    info: 'ClIcK mE!'
  }
  return (
    // Aqui las props las enviamos desde una constante creada antes del return
    <button id={props.id}>{buttonInfo.info}</button>
  )
}
export { SecondComponent }

FirstComponent.defaultProps = {
  title: 'Otro Titulo',
  date: 'sin fecha'
}
FirstComponent.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string
}
