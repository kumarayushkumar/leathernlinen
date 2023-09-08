// components/ProductContent.tsx
import { IProductList } from '../../interface'
import ProductTypeSection from './ProductTypeSection'

interface IProductContentProps {
  productList: IProductList
}

function ProductContent({ productList }: IProductContentProps) {
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

export default ProductContent
