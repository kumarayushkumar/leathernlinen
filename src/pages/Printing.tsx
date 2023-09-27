import 'react-html5video/dist/styles.css'
import Header from '../components/Header'
import img from '../assets/images/Printing/Printing-cover.jpg'
import printing from '../assets/images/Printing/brochure-design-printing.jpg'
import flyer from '../assets/images/Printing/flyer 2.jpg'
import pullupbanner from '../assets/images/Printing/Pull-Up-Banners-Header.jpg'
import mediawall from '../assets/images/Printing/media-wall-edited.jpg'
import poster from '../assets/images/Printing/poster 1.jpg'
import Footer from '../components/Footer'
import { IPrinting } from '../interface'
function Printing({ scrolltoTop }:IPrinting) {
  scrolltoTop()
  return (
    <>
      <Header />
      <div className="printing" id="printing">
        <div className="hero">
          <img src={img} alt="" />
          <div className="text">
            <h1>Printing</h1>
            <p>Merch N Gift provide cost effective and quality printing services.</p>
          </div>
        </div>

        <div className="content">
          <div className="heading">
            <p>
              Bring life to your promotion or event with your own custom Flyers, Brochures
              signage and banners.
            </p>
          </div>

          <div className="card">
            <div className="image">
              <img src={printing} alt="" />
            </div>

            <div className="text">
              <div className="sub-heading">CUSTOM BROCHURES & BOOKLET</div>
              <div className="card-text">
                <p>
                  Brochures are fantastic way to encrypt your business in public. Brochures Communicate More Effectively. Brochures are one of the best ways to include the information you need to convey in one place. These are still distributed around the world and displayed for you to take home and enjoy your pre-planning period.
                  Available in single pieces, folded and booklet forms, you can customise your own brochures for others to experience the unique and special introductory products.

                </p>
              </div>
            </div>
          </div>

          <div className="card alternative">
            <div className="image">
              <img src={flyer} alt="" />
            </div>

            <div className="text">
              <div className="sub-heading">CUSTOM FLYERS</div>
              <div className="card-text">
                <p>
                  A flyer is exceptionally beneficial in gaining the attention of the audience. It helps to explain a business's strong point, promote trade, and express all products and services details.
                  Look beyond business cards and expand your horizons with our quality brochure, postcard and fast flyers printing. We have unlimited creative options for you and this is a fantastic way to express your message to the world. From most standard International Paper Sizes to customised sizes, it is an endless challenge for one to create special promotions.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <img src={pullupbanner} alt="" />
            </div>

            <div className="text">
              <div className="sub-heading">PULLUP BANNERS</div>
              <div className="card-text">
                <p>
                  These Pull Up Banners are a great option for displaying signage at tradeshows, conferences, exhibitions, retail stores, and markets. They're easy to assemble, lightweight, and can be conveniently packed up in a compact manner so you can travel with them.
                  •  You can choose from a range of material types.
                  •  The retractable base makes this Pull Up Banner easy to assemble.
                  •  A padded carry bag is provided for safe transportation.
                  •  They have a high quality construction with a sturdy frame.
                </p>
              </div>
            </div>
          </div>

          <div className="card alternative">
            <div className="image">
              <img src={mediawall} alt="" />
            </div>

            <div className="text">
              <div className="sub-heading">MEDIA WALL</div>
              <div className="card-text">
                <p>
                  Media Wall banner display, the perfect choice for exhibitions,
                  trade shows, media events, red carpet events, stage
                  backdrops, press conference backdrops, press walls,
                  photo media walls, promotional backdrops, photography
                  backdrops, office media wall and personalized webinar
                  backdrops. A captivating, high-quality media wall backdrop
                  will draw the right attention to your business setup,
                  developing brand awareness and gaining new leads.
                  The best thing about our media wall & stage backdrops is
                  that they can be used repeatedly for different shows and
                  events simply by replacing the fabric graphics.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <img src={poster} alt="" />
            </div>

            <div className="text">
              <div className="sub-heading">CUSTOM POSTERS</div>
              <div className="card-text">
                <p>
                  Posters are the easiest way to convey information and create eye-catching promotional material for your business. Be the centre of attention with one of our promotional posters – up to A1 poster size is available on a range of stocks. We can offer either the offset printing process or our new digital printing process. With digital printing no job is too small, if you only want 1 poster done then no problem we can make that happen!
                </p>
              </div>
            </div>
          </div>




        </div>

      </div>
      <Footer/>
    </>
  )
}

export default Printing