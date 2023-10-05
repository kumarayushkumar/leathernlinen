import { IProductList } from '../../interface'
import ProductTypeSection from './ProductTypeSection'

interface ProductNavBarProps {
  merchendiseProductList: IProductList
  uniformProductList: IProductList
}

const ProductContent: React.FC<ProductNavBarProps> = ({ merchendiseProductList, uniformProductList }) => {
  return (
    <section className="product_content">
      <div>
        {Object.entries(uniformProductList).map(([productType, products]) => (

          <ProductTypeSection key={productType} productType={productType} products={products} />
        ))}
      </div>
      <div>
        {Object.entries(merchendiseProductList).map(([productType, products]) => (

          <ProductTypeSection key={productType} productType={productType} products={products} />
        ))}
      </div>
    </section>
  )
}

export default ProductContent