
import axios from 'axios'

import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = 'http://localhost:5000'

export const registerUser = createAsyncThunk(
    'auth/register',
    async ({ name, email, password, pics }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type':"application/json"
                },
            }
            await axios.post(
                `${backendURL}/api/users/`,
                { name, email, password, pics },
                config
            )
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            }
            else {
                return rejectWithValue(error.message);
            }
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type':'application/json',
                },
            }
            const { data } = await axios.post(
                `${backendURL}/api/users/login`,
                { email, password },
                config
            )
           localStorage.setItem('userToken', data.token)
      return data
    } catch (error) {
       if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)
 export const logoutUser =(dispatch) => {
  // Remove the user token from local storage and then dispatch the logout action
  localStorage.removeItem('userToken');
  dispatch(logout());
};