import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="page home">
      <center><h1>Welcome to Our Store</h1>
      <button 
        onClick={() => navigate('/products')}
        className="cta-button"
      >
        Browse
      </button>
      </center>
    </div>
  )
}

export default Home