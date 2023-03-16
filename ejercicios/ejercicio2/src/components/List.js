export default function List ({ category, products }) {
  // En lugar de pasarle las props como paramentro lo pasamos como un obj completo con sus propiedades para desestructurarlo
  // y que asi el codigo final quede mas limpio y legible. La Key tiene que ser algo unico que nunca se repita
  const listItems = products.map(({ id, product, precio }) => <li key={id}>Id:{id} - {product} - price: {precio}$</li>)
  return (
    <>
      <h1>{category}</h1>
      <ol>
        {listItems}
      </ol>
    </>
  )
}
