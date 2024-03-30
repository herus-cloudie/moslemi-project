import { createAsyncThunk } from "@reduxjs/toolkit/dist";
import axios from "axios";

export const  getArticles = createAsyncThunk('articles/getArticles', async () => {
    const response = await axios.get("https://api.nahalit.ir/api/v1/blogs");
    const { data } = response;
    return data;
})