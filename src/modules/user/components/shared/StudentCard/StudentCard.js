import React from 'react'
import '../AppCard/AppCard'

const Cards = (props) => {
  return (
    <>
    <div className="card">
        <img src={props.image} className='student--image' alt="Shoes" />
        <h4>{props.heading}</h4>
        <p className="description">{props.description}</p>
        <p className='mb-0'><button>Read More</button></p>
    </div>
    </>
  )
}

export default Cards