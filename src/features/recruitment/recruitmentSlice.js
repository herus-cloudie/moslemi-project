import { createSlice } from "@reduxjs/toolkit";
import { sendRecruitment } from "./action";
import { toast } from "react-toastify";
import Cookies from "js-cookie";


const initialState = {
    loading: false,
    token: localStorage.getItem('access_token'), 
};

const recruitmentSlice = createSlice({
    initialState,
    name: 'recruitment',
    
    extraReducers: (builder) => {
        builder
            .addCase(sendRecruitment.fulfilled, (state, action) => {
                console.log(action)
                if (action.payload.error) {
                    state.loading = false;
                    toast.error(action.payload.error.data.message);
                   
                    
                }else{
                    state.token = localStorage.getItem('access_token');
                    toast.success(action.payload.data.massage);
                }
                 
            })
            .addCase(sendRecruitment.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(sendRecruitment.rejected, (state, action) => {
                state.loading = false;
                console.log(action)
                console.log(1)
                toast.error(action.payload.message);
            });
    },
});

export default recruitmentSlice.reducer;
window.addEventListener('beforeunload', () => {
  
    dispatch({ type: sendRecruitment.start });
  });