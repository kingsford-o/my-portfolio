import React from 'react'

const ProjectCard = ({imageUrl, cardTitle, cardDescription}) => {
  return (
    <div>      <div className="card bg-base-100 w-96 shadow-sm">
    <figure>
      <img
        src={imageUrl}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{cardTitle}</h2>
      <p>{cardDescription}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div></div>
  )
}

export default ProjectCard