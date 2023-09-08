import React from 'react'

type CardProps = {
  id: string
  title: string
  description: string
  image: string
}

const Card: React.FC<CardProps> = ({ id, title, description, image }) => {
  return (
    <article className="card">
      <figure className="card-image">
        <img src={image} alt={title} />
      </figure>

      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default Card
