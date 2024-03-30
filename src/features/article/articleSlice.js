import { createSlice } from "@reduxjs/toolkit";
import { articles } from "../../API/data";
import { toast } from "react-toastify";
import { getArticles } from "./action";

const initialState =
{
    articles:[],
    goalArticle:'',
    isLoading:false,
}

function foundArticleAction(state,action)
{
    let title = action.payload;
    const target = state.articles.find(item => item.title === title);
    state.goalArticle = target;
}

const articlesSlice = createSlice({
    name:'articles',
    initialState,
    reducers:{
        foundArticleAction,
    },
    extraReducers : (builder) => {
        builder
        .addCase(getArticles.fulfilled, (state,action) => {
            state.articles = action.payload.data;
            state.isLoading = false;
        })
        .addCase(getArticles.pending, (state,action) => {
            state.isLoading = true;
        })
        .addCase(getArticles.rejected, (state,action) => {
            state.isLoading = false;
            console.log("error in getting article =>",action)
        })
    }
})

export const {
        foundArticleAction: foundArticle,
     } = articlesSlice.actions;

export default articlesSlice.reducer;