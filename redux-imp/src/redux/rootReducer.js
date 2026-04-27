    import { combineReducers } from "@reduxjs/toolkit";
    import authReduer from './feature/authSlice/authSlice.js'
    import todoReducer from './feature/todoSlice/todoSlice.js'


    const rootReducer = combineReducers({
        auth :authReduer,
        todo :todoReducer,

    })


    export default rootReducer
