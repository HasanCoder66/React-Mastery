import React, { createContext, useState } from 'react'

export const ThemeData = createContext()

const ThemeContext = ({children}) => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(prev => prev == "light" ? "dark" : "light" )
  }

  return (
    <div>
      <ThemeData.Provider value={[theme, toggleTheme]}>
      {children}
      </ThemeData.Provider>
      </div>
  )
}

export default ThemeContext