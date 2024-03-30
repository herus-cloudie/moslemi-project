import { createSlice } from "@reduxjs/toolkit";
import { getAllNews, getNewsById } from "./action";

const initialState = 
{
    news : [],
    c:false,
    error:null,
    number:null,
    goalNews:{},
}

const newsSlice = createSlice({
    name:'news',
    initialState,
    extraReducers: (builder) => {

        builder
        .addCase(getAllNews.fulfilled , (state , action) => {
            state.loading = false;
            state.news = action.payload.data;
        })
        .addCase(getAllNews.pending , (state) => {
            state.loading = true;
        })
        .addCase(getAllNews.rejected , (state) => {
            state.loading = false;
            state.error = 'data not received'
        })
        .addCase(getNewsById.fulfilled , (state , action) => {
            state.loading = false;
            state.goalNews = action.payload.data;
        })
        .addCase(getNewsById.pending , (state) => {
            state.loading = true;
        })
        .addCase(getNewsById.rejected , (state) => {
            state.loading = false;
            state.error = 'data not received'
        })
        .addCase(setPageQuery , (state,action) => {
            state.number = action.payload
        })
    },
    reducers : {
        setPageQuery : (state,action) => {
            state.number = action.payload
        }
    }
})

export const {setPageQuery} = newsSlice.actions;
export default newsSlice.reducer;