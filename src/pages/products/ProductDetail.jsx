import { useParams, useNavigate } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // Mock product data - in a real app you'd fetch this
  const products = {
    1: { name: 'Premium Headphones', price: 2500, description: 'Noise-cancelling over-ear headphones with 30hr battery life' },
    2: { name: 'Wireless Keyboard', price: 3000, description: 'Ergonomic mechanical keyboard with RGB lighting' },
    3: { name: 'Bluetooth Speaker', price: 1500, description: 'Waterproof portable speaker with 20W output' }
  }

  const product = products[id] || { 
    name: 'Unknown Product', 
    price: 0, 
    description: 'Product not found' 
  }

  return (
    <div className="page product-detail">
      <h1>{product.name}</h1>
      <p className="price">{product.price.toFixed(2)}</p>
      <p className="description">{product.description}</p>
      <div className="button-group">
        <button onClick={() => navigate(-1)} className="back-button">
          Go Back
        </button>
        <button onClick={() => navigate('/products')} className="all-products">
          View
        </button>
      </div>
    </div>
  )
}

export default ProductDetail