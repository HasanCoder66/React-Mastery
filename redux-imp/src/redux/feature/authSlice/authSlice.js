import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: false,
  users: [],
};
const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    signup: (state, action) => {
    state.users.push(action.payload)
    },

    login: (state, action) => {
      console.log(state, action);

      const {email, password} = action.payload;

      const user = state.users.find((u) => u.email == email && u.password == password)

      if(user) {
        state.currentUser = true
      }
    },
    
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
