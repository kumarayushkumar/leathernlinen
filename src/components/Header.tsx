import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Header() {

  return (
    <header id="header" className="header">
      <div className="header-content">
        <Logo />
        <nav>
          <ul>
            <li><Link to="/product">Products</Link></li>
            <li><Link to="/product">Services</Link></li>
            {/* <Link to="/#latest-work">Clients</Link> */}
            <li><Link to="/#about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li> <Link to="/contact-us" className="downloadbtn">Download Brochure</Link></li>

          </ul>
        </nav>


      </div>

    </header>
  )
}