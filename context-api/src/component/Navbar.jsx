import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'

const Navbar = () => {
    const [theme, toggleTheme] = useContext(ThemeContext)

    // console.log(theme)
  return (
    <div>Navbar {theme}</div>
  )
}

export default Navbar