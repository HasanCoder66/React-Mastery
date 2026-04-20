import React, { useCallback, useMemo, useState, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Child from './components/Child'

const MyChildComp = React.lazy(() => import('./components/Child'))

function App() {
  const [count, setCount] = useState(0)



  const handleClick = useCallback(() => {
    console.log("click horaha hai...")
  },[])


const nums = useMemo(() => {
let arr = [];
console.log("han maani")
for(let i = 1; i<500; i++){
  arr.push(i)
}
return arr
}, [])

  const total = useMemo(() => {
    console.log("jaaani")
  return  nums.reduce((a, b) => a+b)
  },[nums])



  return (
    <>
     {total}
    <Suspense fallback={<p>loading....</p>}>
      <MyChildComp  onClick={handleClick} /> 
    </Suspense>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
