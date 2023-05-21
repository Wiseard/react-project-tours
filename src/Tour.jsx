import { useState } from 'react'

export const Tour = ({ id, image, info, name, price, deleteTour }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <article className="tour-container">
      <img src={image} alt={name} />
      <p className="tour-price">${price}</p>
      <div className="tour-info">
        <h2>{name}</h2>
        {isExpanded ? (
          <>
            <p>{info}</p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="btn-expand"
            >
              Read less
            </button>
          </>
        ) : (
          <>
            <p>{info.slice(0, 199)}...</p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="btn-expand"
            >
              Read more
            </button>
          </>
        )}
        <button
          className="btn btn-delete"
          onClick={() => deleteTour(id)}
          type="button"
        >
          Not interested
        </button>
      </div>
    </article>
  )
}
