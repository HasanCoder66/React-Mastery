// import React from 'react'
// import Card from './component/Card'

// const App = () => {
//   return (
//     <div style={{
//       backgroundColor:"red",
//       color:"white"
//     }} >
//       <Card>
//         <h2>Hey Hasan</h2>
//         <p>hasan you are a good developer.</p>
//       </Card>
//     </div>
//   )
// }

// export default App


import React, { useState } from "react";

function Parent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increase {count}
      </button>

      <Child name="Hasan" />
    </>
  );
}

const Child  = React.memo(function Child({ name }) {
  console.log("Child Render");

  return <h1>{name}</h1>;
})

export default Parent