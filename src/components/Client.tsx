import clientLogo from '../data/client';

function Client() {
  return (
    <section id="client" className="d-block mt-3">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h4 className='text-secondary'>Brands we've worked with:</h4>
          </div>
        </div>
      </div>

      <div className="container mt-3 carousel">
        <div className="slider">
          <div className="slide-track">
            {clientLogo.map((client, index) => (
              <div className="slide" key={index}>
                <img src={client.img} alt={`Client Logo ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Client;
