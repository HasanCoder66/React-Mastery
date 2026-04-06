import React, { useEffect, useState } from 'react'
import axios from "axios"
const App = () => {

  const [data,setData] = useState([]);
  const [page,setPage] = useState(1)
  const [limit, setLimit] = useState(25)


  console.log(page)
  const apiCall = async () => {
    let  apiRes = await axios.get("https://picsum.photos/v2/list")
    // console.log(apiRes,"Api response ==>")

    const {data} = apiRes
    setData(data)
  }

  
  const pageNumApiCall = async ()  => {
    let apiRes = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)

    console.log(apiRes)

    const {data} = apiRes
    setData(data)
  }


  useEffect(()=>{
    apiCall()
  },[])

  useEffect(() => {
pageNumApiCall()
  },[page, limit])


  return (
    <div className='bg-black  text-white'>
    
    <div className=' p-2 flex flex-wrap gap-5 justify-center'>

      {data.map((item, i) => (
        <div key={i} className="cardImg h-[250px] w-[250px] bg-[#292930] rounded-2xl mt-2 mb-2 flex justify-center items-center">
        <div>
          <img src={item?.download_url} alt=""  className='w-[220px] h-[200px] object-cover rounded-2xl'/>
        <h2>{item.author}</h2>
        </div>
      </div>
      ) )}

      

    </div>
    <div className='flex justify-center gap-5 ' >
        <button className='bg-[#292930] p-2 font-bold text-2xl mt-2 mb-2 w-[100px] rounded-2xl cursor-pointer' onClick={() => {
          setPage(1)
        }}>1</button>
        <button className='bg-[#292930] p-2 font-bold text-2xl mt-2 mb-2 w-[100px] rounded-2xl cursor-pointer'  onClick={() => {
          setPage(2)
        }}>2</button>
        <button  onClick={() => {
          setPage(3)
        }} className='bg-[#292930] p-2 font-bold text-2xl mt-2 mb-2 w-[100px] rounded-2xl cursor-pointer'>3</button>
        <button
         onClick={() => {
          setPage(4)
        }}
        className='bg-[#292930] p-2 font-bold text-2xl mt-2 mb-2 w-[100px] rounded-2xl cursor-pointer'>4</button>
      </div>


      <div className='flex justify-center gap-5 ' >
        <button className='bg-[#292930] p-2 font-bold text-2xl mt-2 mb-2 w-[100px] rounded-2xl cursor-pointer' onClick={() => {
          setLimit(25)
        }}>25</button>
        <button className='bg-[#292930] p-2 font-bold text-2xl mt-2 mb-2 w-[100px] rounded-2xl cursor-pointer'  onClick={() => {
          setLimit(50)
        }}>50</button>
        <button  onClick={() => {
          setLimit(100)
        }} className='bg-[#292930] p-2 font-bold text-2xl mt-2 mb-2 w-[100px] rounded-2xl cursor-pointer'>100</button>
       
      </div>
    </div>
  )
}

export default App