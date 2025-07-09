import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">Products</Link>
        </li>
        <li className="nav-item">
          <Link to="/service" className="nav-link">Service</Link>
        </li>
        <li className="nav-item">
          <Link to="/address" className="nav-link">Address</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar