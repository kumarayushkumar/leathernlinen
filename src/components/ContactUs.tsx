export default function ContactUs() {
  return (
    <section id="contact-us">
      <div className="container">

        <div className="row text-center">
          <h2 className="display-3 text-white fw-bold mt-3">Contact Us</h2>
          <p className="fw-light mt-1 mt-md-2 text-white lead">Feel free to leave a message</p>
        </div>

        <div className="row text-white mt-2 bg-sec">
          <div className="col-12 col-lg-6 shadow p-4 p-sm-5">
            <div className="info">
              <h4 className="display-4 fw-bold">100% Satisfaction Guaranteed</h4>
              <p className="lh-lg">We do our best to satisfy our clients and</p>
              <ul className="info__list">
                <li>Let's start conversation</li>
                <li>Let us know your requirements</li>
                <li>We will full fill your requirements</li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-lg-6 bg-white shadow p-4 p-sm-5 ">
            <div className="form">
              <h3 className="mb-3 mb-sm-5">Start Your Project</h3>
              <form action="index1.php" method="POST" className="row">
                <div className="col-md-12 mb-3"><input type="text" placeholder="Name" name="name" className="form-control shadow form-control-lg" required /></div>
                <div className="col-md-12 mb-3"><input type="tel" pattern="[0-9]{10}" placeholder="Mobile number" name="mobile" className="form-control shadow form-control-lg" required /></div>
                <div className="col-lg-12 mb-3"><input type="email" placeholder="Email Address" name="email" className="form-control shadow form-control-lg" required /></div>
                <div className="col-lg-12 mb-3"><textarea name="message" placeholder="Message" className="form-control shadow form-control-lg" required></textarea></div>
                <text className="center d-grid mt-1">
                  <button className="btn btn-primary py-3 fw-bold text-white" type="submit">Submit
                    {/* <div className="icon fas fa-paper-plane"></div> */}
                  </button>
                </text>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}