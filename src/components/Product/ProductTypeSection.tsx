import { IProductType } from '../../interface'
import ProductCard from './ProductCard'

interface ProductTypeSectionProps {
  productType: string
  products: IProductType
}

function ProductTypeSection({ productType, products }: ProductTypeSectionProps) {
  const formattedProductType = productType.replace(/\s/g, '_')

  return (
    <div className="product-type" key={productType} id={formattedProductType}>
      <div className="arr_card mt-4">
        {Object.entries(products).map(([productKey, product]) => (
          <ProductCard key={productKey} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductTypeSection
