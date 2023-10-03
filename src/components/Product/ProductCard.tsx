import { IProduct } from '../../interface'

interface IProductCardProps {
  product: IProduct
}

export default function ProductCard({ product }: IProductCardProps) {
  return (
    <div className="card">
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