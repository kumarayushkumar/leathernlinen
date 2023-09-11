import { IProductList, IProduct } from '../../interface';
import ProductTypeSection from './ProductTypeSection';

function ProductContent({ productList }: { productList: IProductList }) {
  return (
    <section className="product_content">
      <div>
        {Object.entries(productList).map(([productType, products]) => (
          <ProductTypeSection key={productType} productType={productType} products={products} />
        ))}
      </div>
    </section>
  );
}

export default ProductContent;
