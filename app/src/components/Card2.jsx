// // import React, { useState } from 'react'

// // const Card2 = () => {
// //     // const [user, setUser] = useState(true)

// //     const [userObj , setUserObj] = useState({
// //         name:"hasan",
// //         age : 22,
// //         email :"codermhasan@gmail.com"
// //     })

// //     console.log(userObj)
// //     const [arr, setArr] = useState(["Saleem","Shakoor"])

// //     const submitHandler = () => {
// //         // console.log("submit handler chla -->")
// //         // setUser( user? false: true)
// //         // setUserObj ({...userObj, name :"Saleem"})
// //         setArr ([...arr, "Abdul Ghafoor", "Abdul Shakoor"])
// //     }
// //     console.log("render horaha -->", arr)
// //   return (
// //     <div>{arr[0]}

// //         <button onClick={submitHandler}>Submit</button>
// //     </div>
// //   )
// // }

// // export default Card2




// import React, { useState } from 'react'

// const Card2 = () => {
    
//     const dataFn = (d) => {
//         console.log(d)
//     }
//   return (
//     <div>

//         <Child />
//     </div>
//   )
// }


// const Child = () => {
// return (
//     <>
//     <button sendData={"Hello World"}>Send</button>
//     </>
// )
// }

// export default Card2














// function Parent() {

//   function receiveData(data) {
//     console.log("Parent ko data mila:", data);
//   }

//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <Child sendData={receiveData} />
//     </div>
//   );
// }

// function Child({ sendData }) {

//   function handleClick() {
//     sendData("Hello Parent");
//   }

//   return (
//     <button onClick={handleClick}>
//       Send Data to Parent
//     </button>
//   );
// }

// export default Parent;





function Parent (){
    const recieveData = (d) => {
console.log(d)
    }
    return(
        <>
        <h1>
            Data: <Child sendData={recieveData} /> 
        </h1>
        
        </>
    )
}


function Child ({sendData}){
    const handleClick = () => {
        sendData("Hello Jani")
    }
    return (
        <>
        <button onClick={handleClick}>
            Send Data To Parent
        </button>
        </>
    )
}

export default Parent




// // State Vs Props 


// // state ==> 
//     // internal data 
//     // component control kerta hai
//     // mutable hoti hain. (Editable hoti hain)
//     // useState sai banti hai.


// // Props ==>
//     // external data
//     // parent control kerta hai.
//     // immutable hoti hain. (Read Only)
//     // parent se pass hoti hain
