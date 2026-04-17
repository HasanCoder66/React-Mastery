import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const Login = () => {
  const [user, login, logout] = useContext(AuthContext)
  console.log(user,login, logout);
  
  return (
    <div className='mt-5 mb-5'>
      <h1>Login page</h1>


      <div className='flex gap-4'>
        <button onClick={() => {
          login({
            name:"hasan",
            email : "codermhasan@gmail.com"
          })
        }} className='bg-gray-400 rounded px-4 py-2 cursor-pointer'>
        Login 
      </button>
      
      </div>
    </div>
  )
}

export default Login