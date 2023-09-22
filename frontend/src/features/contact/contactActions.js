import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const backendURL = 'http://localhost:5000';
 
export const getContacts = createAsyncThunk(
  'contacts/get',
  async (userToken, { rejectWithValue }) => {
    try {
        
      const config = {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      };
      
        const response = await axios.get(`http://localhost:5000/api/contact/`,config);
         
      return response.data;
      

             
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