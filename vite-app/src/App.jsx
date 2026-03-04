// import React, { useState } from 'react'
// import Card from './component/Card';

// const App = () => {
//   // let isActive =true;
//   // let users = ["hasan", "saleem", "uzair"];
//   // console.log(users)

//   // if(isActive){
//   //   return <h1>User Mojood hai janiiii</h1>
//   // }else {
//   //  return <h4 className='red'>user mojood nhi</h4>
//   // }

//  const [count, setCount] = useState(0)

//  const resetFn = () =>{
// setCount(0)
//  }
//   return (
//     // <div className='cardParent'>
//     //   <h3>Hasan Ashraf</h3>
//     //   <p>Hello! It's Me Muhammad Hasan Ashraf From SMIT.</p>
//     //   {/* <div className='cardParent' style={{}}>
//     //     <p className={`${isActive ? "paragraph":"kuchbi"}`}>
//     //       Hello Buddy
//     //        <h4>{isActive ? "Active User": "No Active User"}</h4>
//     //     </p>
//     //   </div>

//     //   <ul>
//     //   {users && users.map((u,i) => <li key={i}>{u}</li>)}
//     //   </ul> */}


//     // </div>
//     <>
//   {/* <div className='cardParent'>
//      <Card title={"Hasan Ashraf"} description={"Hello! It's Me Muhammad Hasan Ashraf From SMIT."}/>
//     <Card title={"jaani Ashraf"} description={"Hello! It's Me M Ashraf From SMIT."} />
//     <Card  title={"Ashraf"} description={"Hello! It's Me Ashraf From SMIT."} />
//  </div> */}
// <h2>{count}</h2>

// <button onClick={() => setCount(count + 1)}>Increment 1</button>
// <button onClick={resetFn}>Reset</button>


// <Parent />
//     </>
//   )
// }

// export default App



// function Parent (){
//   console.log("render ==>")
// return (
//   <>
//   <Child title={"Hello Child"} description={"description hai ye jaaani jaklsddddddddddd"} />
//   </>
// )
// }

// function Child ({title, description}){
// return (
//   <>
//   <p>{title}</p>
//   <p>{description}</p>
//   </>
// )
// }





import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(prev => prev + 1)
  }
  const handleDecrement = () => {
    setCount(prev => prev - 1)
  }
  const handleReset = () => {
setCount(0)
  }
  return (
    <>
    <h2>Total Clicks : {count}</h2>


    <Counter handleIncrement={handleIncrement}
handleDecrement={handleDecrement} onReset={handleReset}/>
    </>
  )
}

export default App


function Counter ({handleIncrement,
handleDecrement,onReset}){
return (
  <>
  <button onClick={handleIncrement}>Increment</button>
  <button onClick={handleDecrement}>Decrement</button>

  <div>
    <button onClick={onReset}>Reset</button>
  </div>
  </>
)
}