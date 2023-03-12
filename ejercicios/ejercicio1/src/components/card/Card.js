import image1 from '../assets/image1.png'
export default function card (props) {
  return (
    <div className='col d-flex justify-content-center mt-4'>
      <div class='card' style={{ width: 250 }}>
        <img src={image1} class='card-img-top' alt='' style={{ padding: 20 }} />
        <div class='card-body'>
          <h5 class='card-title'>{props.title}</h5>
          <p class='card-text'>{props.paragraph}</p>
          <a href={props.link} class='btn btn-primary'>{props.buttonText}</a>
        </div>
      </div>
    </div>
  )
}
