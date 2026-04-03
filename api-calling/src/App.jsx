import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  // const [num, setNum] = useState(3)
  // const [num2, setNum2] = useState(3)

const [products, setProducts] = useState([])

  const getData =async () => {
    let response =await axios.get("https://picsum.photos/v2/list")
    console.log(response)
   
  setProducts(response.data)
  }

  useEffect(() => {
    console.log("use effect is working!")
    getData()
  },[])

  return (
<div className='flex flex-wrap justify-around'>
  {/* <p className='text-3xl font-bold'>{num}</p> */}
  {/* <button onClick={getData} className='bg-green-900 p-2 rounded-2xl font-semibold cursor-pointer'>Get Data</button> */}

  {products.map((item, i) => (
    
    <>
    
      <div className='mb-2'>
        <div>
          <img className='w-[350px] h-[250px] rounded-2xl object-cover' src={item.download_url} alt="" />
      <p className='font-semibold text-2xl'>{item.author}</p>
        </div>
      </div>
    
    </>
  ))}

  {/* <button onClick={() => setNum(num +1)}>Increment</button>
  <button onClick={() => setNum2(num2 -1)}>Decrement</button> */}
</div>
  )
}

export default App







// import React, { useEffect, useState } from 'react'

// const App = () => {

//   const [n1, setN1] = useState(2)

//   const numChangeHowa = () => {
//     console.log(
//       "jani number change horaha hai.........."
//     )
//   }

//   useEffect(()=>{
//     console.log("useffect run......")
//     numChangeHowa()
//   },[n1])

//   return (
//     <div>


//     <h2 className='text-2xl font-bold'>N1 is {n1}</h2>

//       <button className='bg-gray-700 py-3 px-5 cursor-pointer mr-2 rounded-2xl' onClick={()=> setN1(n1 + 1)}>Inc</button>
//       <button className='bg-gray-700 py-3 px-5 cursor-pointer mr-2 rounded-2xl' onClick={()=> setN1(n1 - 1)}>Dec</button>
//     </div>
//   )
// }

// export default App