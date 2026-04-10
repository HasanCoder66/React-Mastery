import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useToggle from './hooks/customHook'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  const [open, toggle] =  useToggle()
  const [count, setCount] = useState(0)


  // const a = useRef(0)
  const btnRef = useRef()


  useEffect(() => {
    // a.current = a.current + 1
    // btnRef.current.  
    // console.log(`Rendering..... time`)
    // btnRef.current.style.background = "yellow"
    // console.log(`Rendering..... value of is ${a.current}`)
  },[])

  return (
    <>

    {open && <Sidebar open={open} toggle={toggle}/>}

<Navbar  toggle={toggle}/>

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
