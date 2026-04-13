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

// import React, { act, useReducer, useState } from "react";

// const App = () => {
//   // const [count, setCount] = useState(0);

//   const [count, dispatch] = useReducer((state , action) => {
// if(action.type == "Increment"){
//   return state + 1
// }
// if(action.type == "Decrement"){
//   return state - 1
// }
//   }, 0)
//   return (
//     <div>
//       <h1>Count value is {count}</h1>

//       <button
//         onClick={() => {
//           dispatch({type:"Increment"})
//           // setCount((prev) => prev + 1);
//         }}
//       >
//         Increment
//       </button>
//       <button
//         onClick={() => {
//           dispatch({type:"Decrement"})
//           // console.log("chl raha ho");
//           // setCount((prev) => prev - 1);
//         }}
//       >
//         Decrement
//       </button>
//     </div>
//   );
// };

// export default App;
