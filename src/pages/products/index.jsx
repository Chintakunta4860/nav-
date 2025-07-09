import { Link } from 'react-router-dom'

const Products = () => {
  const products = [
    { id: 1, name: 'Premium Headphones', price: 2500 },
    { id: 2, name: 'Wireless Keyboard', price: 3000 },
    { id: 3, name: 'Bluetooth Speaker', price: 1500 },
  ]

  return (
    <div className="page products">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.price.toFixed(2)}</p>
            <Link 
              to={`/products/${product.id}`}
              className="view-details"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products