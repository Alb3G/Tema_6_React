import List from './List'

export default function Shop () {
  const shop = {
    electronics: [
      { id: 27, product: 'Tv', brand: 'LG', model: 'XP7302', price: 399 },
      { id: 28, product: 'Equipo Hi-Fi', brand: 'Samsung', model: 'VF235', price: 179 },
      { id: 29, product: 'laptop', brand: 'Sony', model: 'XP7302', price: 399 }
    ],
    food: [
      { id: 30, product: 'cookies', brand: 'Maria', price: 0.90 },
      { id: 31, product: 'salad', brand: 'Imizurra', price: 1.65 },
      { id: 32, product: 'rice', brand: 'Basmati', price: 0.90 },
      { id: 33, product: 'pasta', brand: 'Gallo', price: 0.89 }
    ],
    pets: [
      { id: 34, product: 'Pienso', brand: 'Purina', price: 25 },
      { id: 35, product: 'Alpiste', brand: 'Limpior', price: 1.10 }
    ]

  }
  return (
    <div>
      <List name='Electronics' products={shop.electronics} />
      <List name='Food' products={shop.food} />
      <List name='Pets' products={shop.pets} />
    </div>
  )
}
