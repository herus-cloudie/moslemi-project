import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendRecruitment = createAsyncThunk('recruitment/sendRecruitment', async (dataObj, { getState }) => {
     // Get the token from the Redux state
     const token = getState().recruitment.token;
 
     try {
         const response = await axios.post(
             'https://api.nahalit.ir/api/v1/recruitments',
             dataObj,
             {
                 headers: {
                     'Content-Type': 'application/json',
                     'Authorization': `Bearer ${token}`,
                 },
             }
         );
             console.log(response)
             
         return { data: response.data };
     } catch (axiosError) {
         let err = axiosError;
         
         return {
             error: {
                 status: err.response?.status,
                 data: err.response?.data || err.message,
             },
         };
     }
 });
