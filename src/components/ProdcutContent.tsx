type ProductList = {
  [key: string]: {
    [key: string]: {
      name: string;
      image: string;
      price: number;
    }
  }
}

export default function ProductContent({ productList }: { productList: ProductList }) {
  return (
    <>
      <section className="product_content">
        <div>
          {Object.keys(productList).map((productType) => (
            <div className="section" key={productType}>
              <h5 className="heading">Would you like to add <span>{productType}</span> to your enquiry?</h5>
              <div className='arr_card mt-4'>
                {Object.keys(productList[ productType] ).map((productKey) => {
                  const product = productList[productType][productKey]
                  return (
                    <div className="card mb-5" key = {productKey}>
                      <div className="image">
                        <img src={product.image} alt = {product.name} />
                      </div>
                      <div className='content'>
                        <h6>{product.name}</h6>
                        <p>From ${product.price} per unit</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>


    </>
  )
}