import { createSlice } from "@reduxjs/toolkit";
 import { getContacts } from "./contactActions";
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null;

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false, // Assuming you want to track success in your state
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
   
  },
    extraReducers: {
        [getContacts.pending]: (state) => {
            state.loading = true,
                state.error = null
        },
        [getContacts.fulfilled]: (state, { payload }) => {
             
            state.loading = false
            state.userInfo = payload
       
             
        },
        [getContacts.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
});

export default contactSlice.reducer;