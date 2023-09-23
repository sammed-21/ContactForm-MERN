import { createSlice } from "@reduxjs/toolkit";
 import { getContacts ,deleteContact,createContact} from "./contactActions";
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
            state.loading = false,
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
        [deleteContact.pending]: (state) => {
        state.loading = false
        state.error = null
      },
      [deleteContact.fulfilled]: (state, {payload}) => {
        state.loading = true
        // Remove the deleted contact from the state
        state.userInfo = state.userInfo.filter((user) => user._id !== payload._id)
      },
      [deleteContact.rejected]:(state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
        [createContact.pending]: (state) => {
        state.loading = true
        state.error = null
      },
      [createContact.fulfilled]: (state, {payload}) => {
        state.loading = false
        // Remove the deleted contact from the state
        state.userInfo =state.userInfo
      },
      [createContact.rejected]:(state, action) => {
        state.loading = false;
        state.error = action.payload;
      }
    }
});

export default contactSlice.reducer;