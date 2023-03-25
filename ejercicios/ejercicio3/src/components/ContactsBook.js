export default function Contacts ({ contacts }) {
  const contact = contacts.map(({ id, name, lastName, address, city, postalCode, phone }) => {
    return (
      <ul key={id}>
        <li key={id + phone}>{name}</li>
        <li key={id + phone}>{lastName}</li>
        <li key={id + phone}>{address}</li>
        <li key={id + phone}>{city}</li>
        <li key={id + phone}>{postalCode}</li>
      </ul>
    )
  })

  return (
    <>
      {contact}
    </>
  )
}
