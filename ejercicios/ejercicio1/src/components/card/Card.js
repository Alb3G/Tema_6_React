export default function Card (props) {
  return (
    <div className='d-flex justify-content-center mt-4'>
      <div class='card' style={{ width: 250 }}>
        <img src={props.imageURL} class='card-img-top' alt='' style={{ padding: 20 }} />
        <div class='card-body'>
          <h5 class='card-title'>{props.title}</h5>
          <p class='card-text'>{props.paragraph}</p>
          <a href={props.href} class='btn btn-primary'>{props.buttonText}</a>
        </div>
      </div>
    </div>
  )
}
