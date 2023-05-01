export default function List ({ name, products }) {
  return (
    <div>
      <ul className='list-group w-25 p-0 container mb-3'>
        <h1 className='list-group-item active'>{name}</h1>
        {products.map(({ id, product, price }) => {
          return <li key={id} className='list-group-item d-flex justify-content-center'><strong>Num:</strong> {id} - {product} - {price}</li>
        })}
      </ul>
    </div>
  )
}
