import { IProduct } from '../../interface'
import ProductCard from './ProductCard'

interface ProductTypeSectionProps {
  productType: string
  products: { [key: string]: IProduct }
}

function ProductTypeSection({
  productType,
  products
}: ProductTypeSectionProps) {
  const formattedProductType = productType.replace(/\s/g, '_')

  return (
    <div className="product-type" key={productType} id={formattedProductType}>
      <div className="heading">
        Would you like to add <span>{productType}</span> to your enquiry?
      </div>
      <div className="arr_card mt-4 justify-content-center">
        {Object.entries(products).map(([productKey, product]) => (
          <ProductCard key={productKey} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductTypeSection
