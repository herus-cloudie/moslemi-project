import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading:false
}

const loadingSlice = createSlice({
    name:'loading',
    initialState,
    reducers:{
        Active : (state) => {
            state.isLoading = true;
        },
        deActive : (state) => {
            state.isLoading = false;
        }
    }
})

export const  {
    Active,
    deActive
} = loadingSlice.actions

export default loadingSlice.reducer;