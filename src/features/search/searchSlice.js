import { createSlice } from "@reduxjs/toolkit";
import { searchBlogs , searchProducts } from "./action";
import { toast } from "react-toastify";

const initialState = {
    loading:false,
    blogsResult:[],
    productsResult:[],
    isError: false,
    errorBlogsMessage : '',
    errorProductsMessage : ''
}

const searchSlice = createSlice({
    initialState,
    name:'search',
    extraReducers:(builder) => {
        builder
        .addCase(searchBlogs.fulfilled, (state,action) => {
            state.loading = false;
            state.isError = false;
            state.blogsResult = action.payload.data;
        })
        .addCase(searchBlogs.pending, (state,action) => {
            state.loading = true;
        })
        .addCase(searchBlogs.rejected, (state,action) => {
            state.loading = false;
            state.isError = true;
            state.blogsResult = [];
            state.errorBlogsMessage = 'متاسفانه جستجوی مقاله با خطا مواجه شده است';
            toast.error(action.error.message)
        })
        .addCase(searchProducts.fulfilled, (state,action) => {
            state.loading = false;
            state.isError = false;
            state.productsResult = action.payload.data.products;
        })
        .addCase(searchProducts.pending, (state,action) => {
            state.loading = true;
        })
        .addCase(searchProducts.rejected, (state,action) => {
            state.loading = false;
            state.isError = true;
            state.productsResult = [];
            state.errorProductsMessage = 'متاسفانه جستجوی محصول با خطا مواجه شده است'
            toast.error(action.error.message)
        })
    }
})

export default searchSlice.reducer;