import React, { useContext, useReducer } from 'react'
import InputCmp from './components/InputCmp'
import { ThemeData } from './context/ThemeContext'


const App = () => {
  const [theme, toggleTheme] = useContext(ThemeData)
  console.log(theme, toggleTheme)

  const initialState = {
    email : "",
    password : ""
  }

  const reducerFn = (state, action) => {
    // console.log(state, action)
    return {
      ...state,
      [action.field] : action.value
    }
  }
  const [form, dispatch] = useReducer(reducerFn, initialState)


  const submitHandler = () => {
    console.log(form)
    
  }

  return (
   <div>
      <InputCmp
        placeholder={"Enter your email"}
        type={"text"}
        field="email"
        handler={dispatch}
      />
      <InputCmp
        placeholder={"Enter your password"}
        type={"password"}
        field="password"
        handler={dispatch}
      />

      <button onClick={toggleTheme}>Submit {theme}</button>
    </div>
  )
}

export default App