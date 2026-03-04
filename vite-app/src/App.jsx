import React from 'react'
import Card from './component/Card';

const App = () => {
  let isActive =true;
  let users = ["hasan", "saleem", "uzair"];
  // console.log(users)

  // if(isActive){
  //   return <h1>User Mojood hai janiiii</h1>
  // }else {
  //  return <h4 className='red'>user mojood nhi</h4>
  // }

 
  return (
    // <div className='cardParent'>
    //   <h3>Hasan Ashraf</h3>
    //   <p>Hello! It's Me Muhammad Hasan Ashraf From SMIT.</p>
    //   {/* <div className='cardParent' style={{}}>
    //     <p className={`${isActive ? "paragraph":"kuchbi"}`}>
    //       Hello Buddy
    //        <h4>{isActive ? "Active User": "No Active User"}</h4>
    //     </p>
    //   </div>

    //   <ul>
    //   {users && users.map((u,i) => <li key={i}>{u}</li>)}
    //   </ul> */}


    // </div>
    <>
  <div className='cardParent'>
     <Card title={"Hasan Ashraf"} description={"Hello! It's Me Muhammad Hasan Ashraf From SMIT."}/>
    <Card title={"jaani Ashraf"} description={"Hello! It's Me M Ashraf From SMIT."} />
    <Card  title={"Ashraf"} description={"Hello! It's Me Ashraf From SMIT."} />
 </div>
    </>
  )
}

export default App