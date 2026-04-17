import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const listItems = [
        {
            path : "/",
            title : "Home"
        },
        {
            path : "/about",
            title : "About"
        },
        {
            path : "/contact",
            title : "Contact"
        },
        {
            path : "/services",
            title : "Services"
        },
        {
            path : "/login",
            title : "Login"
        },
        {
            path : "/signup",
            title : "Signup"
        },
    ]

  return (
    <div>
{listItems.map((item,i) => (
    <Link to={item.path}><li key={i} >{item.title} </li></Link>
))}
    </div>
  )
}

export default Navbar