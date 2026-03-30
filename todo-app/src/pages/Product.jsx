import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>

        <ul>
           <li> <Link to="/men">men</Link></li>
            <li><Link to="/women">women</Link></li>
        </ul>
    </div>
  )
}

export default Product