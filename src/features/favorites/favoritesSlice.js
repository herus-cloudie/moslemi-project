import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    articles:[],
    whole:this.products.concat(this.articles)
}

const favoritesSlice = createSlice({
    name:'favorites',
    initialState,
})