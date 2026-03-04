import React from 'react'

const Card = (props) => {
    // console.log(props)
  return (
   
        <div className='card'>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
   
  )
}

export default Card