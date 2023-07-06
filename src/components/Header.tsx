import { Link } from 'react-router-dom'
import { CartIcon } from '../images/icon'

export default function Header() {  
  return (
    <header className="header">

      <div className="top-bar">

      </div>

      <div className="header-content">

        <div className="logo">
          <img className="logo-img" src="https://via.placeholder.com/40" alt="logo" />
        </div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <CartIcon />
        </nav>
        
      </div>

    </header>
  )
}