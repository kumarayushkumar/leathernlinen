import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'

import catalogueCover from '../assets/images/catalogue_cover.png'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer>
      <div className="container">

        <div className="row">
          <div className="col-12 mb-4 mt-3 mb-md-5">
            <Logo/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <h5><a href="tel: +61415816522">P: +61415816522</a></h5>
            <h5><a href="mailto:naseem.khan10@gmail.com">E: naseem.khan10@gmail.com</a></h5>
            <h5 className="mt-4">Copyright @ merchNgifts</h5>
          </div>

          <div className="col-md-2">
            <ul>
              <li><Link to="/#header">Home</Link></li>
              <li><Link to="/#about-us">About Us</Link></li>
              <li><Link to="/product">Products</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          <div className="col-md-3 text-center">
            <img src={catalogueCover} alt="" className="dowload-catalogue-img"/>
            <Link className="dowload-catalogue d-block mt-2" to="/contact-us">Download Catalogue</Link>
          </div>

          <div className="col-md-3">
            <div className="d-flex mt-4 f-social">
              <a className="" href="" target="_blank" rel="noopener noreferrrer">
                <FontAwesomeIcon className="" icon={faInstagram} />
              </a>
              <a className="" href="" target="_blank" rel="noopener noreferrrer">
                <FontAwesomeIcon className="" icon={faFacebookF} />
              </a>
              <a className="" href="" target="_blank" rel="noopener noreferrrer">
                <FontAwesomeIcon className="" icon={faLinkedinIn} />
              </a>
              <a className="" href="" target="_blank" rel="noopener noreferrrer">
                <FontAwesomeIcon className="" icon={faWhatsapp} />
              </a>

            </div>
          </div>

        </div>

        

      </div>

      <a className="btt btt__whatsapp shadow rounded-circle" href="https://api.whatsapp.com/send/?phone=61415816522&text&app_absent=0" target="_blank" rel="noopener noreferrrer">
        <FontAwesomeIcon className="icon-whatsapp" icon={faWhatsapp} />
      </a>

      <a className="btt btt__chevron-up shadow rounded-circle" href="#header">
        <FontAwesomeIcon className="icon-chevron-up" icon={faChevronUp} />
      </a>
    </footer>
  )
}