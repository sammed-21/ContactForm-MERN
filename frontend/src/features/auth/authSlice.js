import { createSlice } from "@reduxjs/toolkit";
import { registerUser,loginUser } from "./authActions";

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
    loading: false,
    userInfo: null,
    userToken,
    error: null,
    success:false,

    
}
const authSlice = createSlice({
    name: "auth",
    initialState,
     reducers: {
    logout: (state) => {
       localStorage.removeItem('userToken') // deletes token from storage
      state.loading = false
      state.userInfo = null
      state.userToken = null
      state.error = null
    },
    
  },
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.loading = true,
                state.error=null
        },
        [loginUser.fulfilled]: (state, { payload }) => {
             
      state.loading = false
      state.userInfo = payload
             state.userToken = payload.token
             
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

//retister user reducer


        [registerUser.pending]: (state) => {
            state.loading = true,
                state.error=null
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.loading = false,
                state.success=true
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.loading=false,
                state.error=payload
        }
    

    },

})
export const { logout } = authSlice.actions

export default authSlice.reducer   


