// import React from 'react'

// const Card = (props) => {
//     // console.log(props)
//   return (
   
//         <div className='card'>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </div>
   
//   )
// }

// export default Card


import React from 'react'
import styled from 'styled-components'


const MyCard = styled.div`
width: 500px;
height : 400px;
border-radius : 40px;
padding : 20px;
box-shadow:0px 5px 5px red;
background:orange;
display:flex;
justify-content:center;
align-items:center;
font-weight:bold;
font-size:32px;
text-align-left;
`


const Card = () => {


  return (
    <MyCard>Janiii personal styled components ban rahy hai</MyCard>
  )
}

export default Card