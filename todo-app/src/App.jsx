import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Todo from './pages/Todo'
import AboutMe from './pages/AboutMe'
import Product from './pages/Product'
import Mens from './pages/Mens'
import Womens from './pages/Womens'

const App = () => {
  return (
 <Routes>

<Route path='/' element={<Home />} />
<Route path='/about' element={<About />} />
<Route path='/todo' element={<Todo />} />

<Route path='/about/:id' element={<AboutMe />} />


<Route path='/product' element={<Product />}>
<Route path='men' element={<Mens />} />
<Route path='women' element={<Womens />} />

</Route>


<Route path='*' element={<NotFound />} />

 </Routes>
  )
}

export default App