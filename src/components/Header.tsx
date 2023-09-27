import { Link } from 'react-router-dom'
import Logo from './Logo'
import { Hamburger } from '../assets/images/icon'
import { useState } from 'react'

export default function Header() {
  const [nav, setnav] = useState(false);
  const [scroll ,setscroll]=useState(window.scrollY);
  window.addEventListener('scroll', () => {
    setscroll(window.scrollY)
  });
   
  const navhandler = () => {
    setnav(!nav)
  }
  const handleScrollToSection = (sectionId: string, offset?: number) => {
    const section = document.getElementById(sectionId);
    const headerOffset = offset != null ? offset : 50;
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
    <header id="header" className={scroll<=500?'header':'header shadow'}>
      <div className="header-content">
        <Logo />
        <nav className={nav ? "active" : ""}>

          <ul>
            <div className="dropdown">
              <li ><Link to="/#about-us" className='navbutton'>About Us</Link></li>

              <div className="dropdown-content">
                <div className="row px-2">
                  <div className="col-12 p-2 vertical-line">
                    <Link to="/#whoweare" onClick={() => handleScrollToSection("whoweare",150)}>Who We Are?</Link>
                    <Link to="/#whymerchendise" onClick={() => handleScrollToSection("whymerchendise",150)}>Why merchendise & gift</Link>
                    <Link to="/#doyouknowthat" onClick={() => handleScrollToSection("doyouknowthat", 150)}>Why to choose us</Link>
                    <Link to="/" onClick={() => handleScrollToSection("testimonial",150)}>Testimonials</Link>
                    <Link to="/our-promise">our promise & commitment</Link>
                    <Link to="/our-promise/#what-we-offer">What we offer</Link>

                  </div>
                </div>

              </div>

            </div>
            <li><Link to="/product" className='navbutton'>Products</Link></li>
            <div className="dropdown">
              <li> <Link to="/Printing" className='navbutton'>Printing</Link></li>

              <div className="dropdown-content">
                <div className="row px-2">
                  <div className="col-12 p-2 vertical-line">
                    <Link to="/Printing">Printing</Link>
                    <Link to="/#whymerchendise">Embroidery</Link>
                    <Link to="/#doyouknowthat">product design and artwork</Link>
                  </div>
                </div>

              </div>

            </div>
            {/* <Link to="/#latest-work">Clients</Link> */}

            <li><Link to="/contact-us" className='navbutton'>Contact Us</Link></li>
            <a href="tel: +61415816522" className='phone-number'>P: +61415816522</a>

          </ul>
        </nav>
        <Hamburger className='hamburger' onClick={navhandler} />

      </div>

    </header>
  )
}