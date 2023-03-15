export default function List (props) {
  const listItems = props.products.map(item => <li key=''>{item.product}</li>)
  return (
    <>
      <h1>{props.category}</h1>
      <ol>
        {listItems}
      </ol>
    </>
  )
}
