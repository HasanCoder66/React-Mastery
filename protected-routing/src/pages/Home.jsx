import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider';

const Home = () => {
  const [user, login, logout] = useContext(AuthContext)
    console.log(user,login, logout);
  return (
    <div  className='text-red-500 h-[500px] mt-5 mb-5'>
      <h1>Home</h1>

      <div>
        <button onClick={logout} className='bg-gray-400 rounded px-4 py-2 cursor-pointer'>
        Logout
      </button>
      </div>
    </div>
  )
}

export default Home