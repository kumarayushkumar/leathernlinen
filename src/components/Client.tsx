import clientLogo from '../data/client';

interface clientLogo {
  [key: string]: string;
}

export default function Client() {
  const clientLogos = Object.keys(clientLogo);
  console.log(clientLogos);

  return (
    <section id="client">
      <div className="container">
        <div className="row">
          <p className="text-secondary">Brands we've worked with</p>
          <div className="col-12 d-flex">
            <div className="client-logo p-3">
              {clientLogos.map((clientKey) => (
                <img
                  key={clientKey}
                  src={clientLogo[clientKey]}
                  alt={`Client ${clientKey}`} // Use the clientKey as alt text
                  className="client-logo-img"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
