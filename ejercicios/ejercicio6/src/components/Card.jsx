export default function Card (props) {
  return (
    <div className='d-flex justify-content-center mt-4'>
      <div className='card' style={{ width: 250, height: 425 }}>
        <img src={props.imageURL} className='card-img-top' alt='' style={{ padding: 20 }} />
        <div className='card-body'>
          <h5 className='card-title'>{props.title}</h5>
          <p className='card-text'>{props.paragraph}</p>
          <a href={props.href} className='btn btn-primary'>{props.buttonText}</a>
        </div>
      </div>
    </div>
  )
}
