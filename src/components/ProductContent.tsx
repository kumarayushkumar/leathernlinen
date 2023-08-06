import React from 'react';

type Product = {
  name: string;
  image: string;
  price: number;
};

type ProductType = {
  [key: string]: Product;
};

type ProductList = {
  [key: string]: ProductType;
};

type ProductContentProps = {
  productList: ProductList;
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="card mb-5">
    <div className="image">
      <img src={product.image} alt={product.name} />
    </div>
    <div className="content">
      <h6>{product.name}</h6>
      <p>From ${product.price} per unit</p>
    </div>
  </div>
);

const ProductSection: React.FC<{ productType: string; products: ProductType }> = ({ productType, products }) => (
  <div className="section" id={productType} key={productType}>
    <h5 className="heading">
      Would you like to add <span>{productType}</span> to your enquiry?
    </h5>
    <div className="arr_card mt-4">
      {Object.entries(products).map(([productKey, product]) => (
        <ProductCard key={productKey} product={product} />
      ))}
    </div>
  </div>
);

const ProductContent: React.FC<ProductContentProps> = ({ productList }) => (
  <section className="product_content">
    <div>
      {Object.entries(productList).map(([productType, products]) => (
        <ProductSection key={productType} productType={productType} products={products} />
      ))}
    </div>
  </section>
);

export default ProductContent;
