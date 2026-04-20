import React from 'react'
import { arr } from '../../app'


const Child = React.memo(({onClick}) => {
    console.log("janii child component render howaa ==>")
  return (
    <div>
Total length of my arr : {arr.length}
        <button onClick={onClick}>Click Btn</button>
    </div>
  )
})

export default Child