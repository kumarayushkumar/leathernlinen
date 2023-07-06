import { Link } from 'react-router-dom'

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
          <Link to="#services">Services</Link>
          <Link to="#latest-work">Latest Work</Link>
          <Link to="#about-us">About Us</Link>
          <Link to="#form">Contact Us</Link>
          <Link to="/product">Product</Link>
        </nav>
        
      </div>

    </header>
  )
}