import React from 'react'

type CardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  addToCart: (id: string) => void;
}

const Card: React.FC<CardProps> = ({ id, title, description, image, price, addToCart }) => {
  return (
    <div className="card">

      <div className="card-image">
        <img src={image} alt={title} />
      </div>

      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <button onClick={() => addToCart(id)}>Add to Cart</button>
      </div>
      
    </div>
  )
}

export default Card