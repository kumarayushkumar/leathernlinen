import { Link } from 'react-router-dom'
import Logo from './Logo'
import { Hamburger } from '../assets/images/icon'
import { useState } from 'react'
import productList from '../data/productList';

export default function Header() {
  const [nav, setnav] = useState(false);
  const navhandler = () => {
    setnav(!nav)
  }
  const handleScrollToSection = (sectionId: string , offset?: number) => {
    const section = document.getElementById(sectionId);
    const headerOffset = offset!=null?offset:50;
    if (section != null) {
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header id="header" className="header">
      <div className="header-content">
        <Logo />
        <nav className={nav ? "active" : ""}>

          <ul>
            <div className="dropdown">
              <li><Link to="/product">Products</Link></li>

              <div className="dropdown-content">
                <div className="row px-2">
                  <div className="col-6 p-2">
                    {Object.entries(productList).map(([productType]) => (
                      <Link to={"/product/#" + productType.replace(/\s/g, "_")} onClick={() => handleScrollToSection(productType.replace(/\s/g, "_"))} >{productType}</Link>
                    ))}
                  </div>

                  <div className="col-6 p-2 vertical-line">
                    <Link to="/products/#tshirt">T-Shirt</Link>
                    <Link to="/products/#polo-tshirts">Polo T-Shirts</Link>
                    <Link to="/products/#hoodies">Hoodies</Link>
                    <Link to="/products/#brochures">Brochures</Link>
                    <Link to="/products/#mobile-covers">Mobile Covers</Link>
                    <Link to="/products/#caps">Caps</Link>
                    <Link to="/products/#boxes">Boxes</Link>
                    <Link to="/products/#corporate-gifts">Corporate Gifts</Link>
                    <Link to="/products/#mouse">Mouse</Link>
                    <Link to="/products/#pendrive">Pendrive</Link>
                    <Link to="/products/#headphones">Headphones</Link>
                  </div>
                </div>

              </div>

            </div>
            <li><Link to="/Services">Services</Link></li>
            {/* <Link to="/#latest-work">Clients</Link> */}
            <div className="dropdown">
              <li><Link to="/#about-us">About Us</Link></li>

              <div className="dropdown-content w-auto">
                <div className="row px-2">
                  <div className="col-12 p-2 vertical-line">
                    <Link to="#whoweare" onClick={() => handleScrollToSection("whoweare")}>Who We Are?</Link>
                    <Link to="#whymerchendise" onClick={() => handleScrollToSection("whymerchendise")}>Why merchendise & gift</Link>
                    <Link to="#doyouknowthat" onClick={() => handleScrollToSection("doyouknowthat" ,150)}>Why to choose us</Link>
                    <Link to="/" onClick={() => handleScrollToSection("testimonial")}>Testimonials</Link>
                    <Link to="/" onClick={() => handleScrollToSection("/")}>our promise & commitment</Link>
                    <Link to="/">What we offer</Link>

                  </div>
                </div>

              </div>

            </div>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <a href="tel: +61415816522" className='phone-number'>P: +61415816522</a>

          </ul>
        </nav>
        <Hamburger className='hamburger' onClick={navhandler} />

      </div>

    </header>
  )
}