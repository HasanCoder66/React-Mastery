import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// Thunks ==>

   export const getTodos = createAsyncThunk("getTodos", async () => {
        const apiRes = await axios.get("https://dummyjson.com/todos")
        

        console.log(apiRes.data)

        return apiRes.data.todos
    })










const initialState = {
    todos : [],
    loading:false,
    error:null

}



const todoSlice = createSlice({
    name:"todo",
    initialState,

    reducers:{},

    extraReducers : (builder) => {
        builder

        .addCase(getTodos.pending, (state) => {
            state.loading = true;
        })
        .addCase(getTodos.fulfilled, (state,action) => {
            console.log(state, action)
            state.loading = false;
            state.todos = action.payload
        })
        .addCase(getTodos.rejected, (state) => {
            state.loading = false;
            state.error = "Error fetching todos"
        })
    }
})

export default todoSlice.reducer