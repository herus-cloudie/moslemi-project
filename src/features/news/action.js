import { createAsyncThunk } from "@reduxjs/toolkit"; 
import instance from "../../axios_config/axios";

export const getAllNews = createAsyncThunk('news/getAllNews', async () => {
    const response = await instance.get('/news');
    const { data } = response;
    return data;
})

export const getNewsById = createAsyncThunk('news/getNewsById', async id => {
    const response = await instance.get(`/news/${id}`);
    const { data } = response;
    return data;
})
