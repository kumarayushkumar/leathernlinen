import clientLogo from '../data/client'

function Client() {
  return (
    <section id="client" className="courosel">
      <div className="slider">
        <div className="slide-track">
          {clientLogo.map((clientKey) => (
            <div className="slide ">
              <img src={clientKey.img}  alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Client