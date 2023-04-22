export default function List ({ name, products }) {
  return (
    <div>
      <ul className='list-group mb-3 w-100'>
        <h1 className='list-group-item active'>{name}</h1>
        {products.map(({ id, product, price }) => {
          return <li key={id} className='list-group-item'><strong>Num:</strong> {id} - {product} - {price}</li>
        })}
      </ul>
    </div>
  )
}
