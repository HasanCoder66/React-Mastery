import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = ({children}) => {
    const [user] = useContext(AuthContext)

    console.log(user)
    if(user) {
      return  <Navigate  to={"/"}/>
    }
  return  children
}

export default PublicRoute