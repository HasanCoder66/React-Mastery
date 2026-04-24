import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({children}) => {
    const user = useSelector((state) => state.auth)
      console.log(user)
      
    
        if(user.currentUser) return <Navigate to="/dashboard" />
    
        return children

}

export default PublicRoute