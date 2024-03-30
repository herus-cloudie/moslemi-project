import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const searchBlogs = createAsyncThunk('search/searchBlogs', async (value) => {
     const response = await axios.get(`https://api.nahalit.ir/api/v1/blogs/search/${value}`);
     return response;
})

export const searchProducts = createAsyncThunk('search/searchProducts', async (value) => {
     const response = await axios.get(`https://api.nahalit.ir/api/v1/products/search/${value}`);
     return response;
})