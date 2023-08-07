import clientLogo from '../data/client';

function Client() {
  return (
    <section id="client" className="carousel">
      <div className="slider">
        <div className="slide-track">
          {clientLogo.map((client, index) => (
            <div className="slide" key={index}>
              <img src={client.img} alt={`Client Logo ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Client;
