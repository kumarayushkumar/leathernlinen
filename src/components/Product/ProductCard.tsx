

import { IProduct } from '../../interface'

interface IProductCardProps {
  product: IProduct
}

function ProductCard({ product }: IProductCardProps) {
  // const formattedPrice = new Intl.NumberFormat('en-US', {
  //   style: 'currency',
  //   currency: 'USD',
  // }).format(product.price)

  return (
    <div className="card mb-5">
      <div className="image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="content">
        <h6>{product.name}</h6>
        {/* <p>From {formattedPrice} per unit</p> */}
      </div>
    </div>
  )
}

export default ProductCard
