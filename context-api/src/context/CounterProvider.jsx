import React, { Children, createContext, useReducer, useState } from 'react'


export const CounterContext = createContext(0)


const CounterProvider = ({children}) => {
    const reducerfn =(state,action) => {
if(action.type == "Increment"){
    return state + 1
}
if(action.type == "Decrement"){
    return state - 1
}
    }

    const [state, dispatch] = useReducer(reducerfn, 0)

    console.log(state)
  return (
    <CounterContext.Provider value={[state, dispatch]}>
{children}
    </CounterContext.Provider>
  )
}

export default CounterProvider