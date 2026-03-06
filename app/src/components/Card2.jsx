import React, { useState } from 'react'

const Card2 = () => {
    // const [user, setUser] = useState(true)

    const [userObj , setUserObj] = useState({
        name:"hasan",
        age : 22,
        email :"codermhasan@gmail.com"
    })
    const submitHandler = () => {
        // console.log("submit handler chla -->")
        // setUser( user? false: true)
        setUserObj ({...userObj, name :"Saleem"})
    }
    console.log("render horaha -->", userObj)
  return (
    <div>{userObj.name}

        <button onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Card2