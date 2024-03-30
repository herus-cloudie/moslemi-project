import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./article/articleSlice";
import articlesPostReducer from './articleComments/articleCommentsSlice';
import authenticationReducer from "./authentication/AuthenticationSlice";
import cartReducer from "./cart/cartSlice";
import dashboardReducer from "./dashboard/dashboardSlice";
import newsSliceReducer from "./news/newsSlice";
import productReducer from "./products/productSlice";
import searchReducer from "./search/searchSlice";
import loadingReducer from "./loading/loadingSlice";
import recruitmentReducer from "./recruitment/recruitmentSlice";
import userPanelReducer from "./userPanel/userPanelSlice";

const store = configureStore({
    reducer:{
        articles : articlesReducer,
        articlesPost : articlesPostReducer,
        news:newsSliceReducer,
        dashboard:dashboardReducer,
        products:productReducer,
        authentication:authenticationReducer,
        cart:cartReducer,
        search:searchReducer,
        loading:loadingReducer,
        recruitment:recruitmentReducer,
        userPanel:userPanelReducer
    }
})

export default store;