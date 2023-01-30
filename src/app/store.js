import {configureStore} from "@reduxjs/toolkit";
import newfeedSlice from "../screens/NewFeed/newfeedSlice";
import postSlice from "../screens/components/postSlice";

const store = configureStore({
    reducer:{
        postNewFeed: newfeedSlice.reducer,
        post: postSlice.reducer,
    }
})

export default store