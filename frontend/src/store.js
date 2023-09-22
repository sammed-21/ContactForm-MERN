import {
    configureStore
} from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import contactSlice from "./features/contact/contactSlice";

const store = configureStore({
    reducer: {
    auth: authSlice,
    contact:contactSlice
    }
})

export default store