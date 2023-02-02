import {configureStore} from "@reduxjs/toolkit";
import newfeedSlice from "../screens/NewFeed/newfeedSlice";
import postSlice from "../screens/components/postSlice";
import authSlice from "../screens/login/authSlice";

const store = configureStore({
    reducer:{
        auth : authSlice.reducer,
        postNewFeed: newfeedSlice.reducer,
        post: postSlice.reducer,
    }
})

export default store