import whoweareimg from '../assets/images/About_Us/who_we_are.png'

export default function WhoWeAre() {
  return (
    <section className="whoweare" id="whoweare">
      <div className="fluid-container d-flex justify-content-around">
        <div className="text">
          <h1 className="heading mt-4 md:mt-0">Who we are</h1>
          <div className="d-flex flex-column justify-content-center px-2 md:px-4">
            <p>
              A diverse and talented team working in the field of merchandising
              and gifts with a global presence, operating from offices in
              Sydney, Australia, and New Delhi, India, A Team of Director,
              Designer, sales, Production and Dispatch.
            </p>

            <p>
              We Cater to clients based on their choice of designs and products,
              as it demonstrates a strong commitment to customer satisfaction
              and a deep understanding of their preferences. Offering a diverse
              range of products from around tho world further enhances your
              company's appeal
            </p>

            <p>
              {' '}
              Considerations: market research, Quality controle Logistics and
              supply chain and customization
            </p>
          </div>
        </div>
        <div className="image">
          <img src={whoweareimg} alt="" />
        </div>
      </div>
    </section>
  )
}
