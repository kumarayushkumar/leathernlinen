// import React from 'react'

// type CardProps = {
//   id: string
//   title: string
//   description: string
//   image: string
// }

// const Card: React.FC<CardProps> = ({ id, title, description, image }) => {
//   return (
//     <article className="card">
//       <figure className="card-image">
//         <img src={image} alt={title} />
//       </figure>

//       <div className="card-content">
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//     </article>
//   )
// }

// export default Card


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
