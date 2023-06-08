import React from 'react'
import './Cards.css'

const Cards = (props) => {
  return (
    <>
    <div className="card">
        <img src={props.image} className='product--image' alt="Shoes" />
        <h3>{props.heading}</h3>
        <p className="description">{props.description}</p>
        <p className='mb-0'><button>Read More</button></p>
    </div>
    </>
  )
}

export default Cards