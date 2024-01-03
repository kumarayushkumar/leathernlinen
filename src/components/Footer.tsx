import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'

import catalogueCover from '../assets/images/catalogue_cover.png'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 mb-4 mt-3 mb-md-5">
            <Logo />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <h4 className="pb-3">Australia Office</h4>
            <h5>
              <a href="tel: +61415816522">P: +61415816522</a>
            </h5>
            <h5>
              <a href="mailto:sales.australia@merchngifts.com">
                E: sales.australia@merchngifts.com
              </a>
            </h5>
            <h5>
              {' '}
              Address: Level 5/1-3 Fitzwilliam St, Parramatta NSW 2150
            </h5>
            <h5 className="mt-4">Copyright @ merchNgifts</h5>
          </div>

          <div className="col-md-4">
            <h4 className="pb-3">India Office</h4>
            <h5>
              <a href="tel: +917983008573">P: +917983008573</a>
            </h5>
            <h5>
              <a href="mailto:sales.india@merchngifts.com">
                E: sales.india@merchngifts.com
              </a>
            </h5>
            <h5>
              {' '}
              Address: Chhattarpur, New delhi
            </h5>
          </div>

          {/* <div className="col-md-2">
            <ul>
              <li>
                <Link to="/#header">Home</Link>
              </li>
              <li>
                <Link to="/#about-us">About Us</Link>
              </li>
              <li>
                <Link to="/product">Products</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div> */}

          <div className="col-md-2 text-center">
            <img
              src={catalogueCover}
              alt=""
              className="dowload-catalogue-img"
            />
            <Link className="dowload-catalogue d-block mt-2" to="/contact-us">
              Download Catalogue
            </Link>
          </div>

          <div className="col-md-2">
            <div className="d-flex mt-4 f-social">
              <a
                className=""
                href=""
                target="_blank"
                rel="noopener noreferrrer">
                <FontAwesomeIcon className="" icon={faInstagram} />
              </a>
              <a
                className=""
                href=""
                target="_blank"
                rel="noopener noreferrrer">
                <FontAwesomeIcon className="" icon={faFacebookF} />
              </a>
              <a
                className=""
                href=""
                target="_blank"
                rel="noopener noreferrrer">
                <FontAwesomeIcon className="" icon={faLinkedinIn} />
              </a>
              <a
                className=""
                href=""
                target="_blank"
                rel="noopener noreferrrer">
                <FontAwesomeIcon className="" icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>
        <div className="row text-center text-black pt-3 pb-3">
          <div className="col-12 mt-1 mb-2 mt-sm-2 mb-sm-3 ">
            <div className="mt-4">
              <a
                className="growigh text-primary"
                href="https://www.growigh.com"
                target="_blank"
                rel="noopener noreferrrer">
                Developed and Maintained by{' '}
                <span className="growigh__name">
                  Gro<span className="growigh__name__w">w</span>igh
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
