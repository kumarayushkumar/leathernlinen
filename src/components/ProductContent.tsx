type Product = {
  name: string
  image: string
  price: number
}

type ProductType = {
  [key: string]: Product
}

type ProductList = {
  [key: string]: ProductType
}

interface ProductContentProps {
  productList: ProductList
}

function ProductCard({ product }: { product: Product }) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price)

  return (
    <div className="card mb-5">
      <div className="image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="content">
        <h6>{product.name}</h6>
        <p>From {formattedPrice} per unit</p>
      </div>
    </div>
  )
}

function ProductTypeSection({ productType, products }: { productType: string; products: ProductType }) {
  const formattedProductType = productType.replace(/\s/g, '_')
  return (
    <div className="section" key={productType} id={formattedProductType}>
      {/* <h5 className="heading">
        Would you like to add <span>{productType}</span> to your enquiry?
      </h5> */}
      <div className="arr_card mt-4">
        {Object.entries(products).map(([productKey, product]) => (
          <ProductCard key={productKey} product={product} />
        ))}
      </div>
    </div>
  )
}

export default function ProductContent({ productList }: ProductContentProps) {
  return (
    <section className="product_content">
      <div>
        {Object.entries(productList).map(([productType, products]) => (
          <ProductTypeSection key={productType} productType={productType} products={products} />
        ))}
      </div>
    </section>
  )
}
