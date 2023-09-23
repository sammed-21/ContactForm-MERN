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
      
        const response = await axios.get(`${backendURL}/api/contact/`,config);
         
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

export const createContact = createAsyncThunk(
  'contact/create',
  async ({ data, userToken }, { rejectWithValue }) => { 
    
        try {
        
      const config = {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      };
          
      
        const response = await axios.post(`${backendURL}/api/contact/create`,data,config);
         
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

export const deleteContact = createAsyncThunk(
  'contact/delete',
  async ({id,userToken}, { rejectWithValue }) => {
    try {

      const config = {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      };
     
        await axios.delete(`${backendURL}/api/contact/${id}`,config);
   
      return id;
      

             
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
