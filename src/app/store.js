import {configureStore} from "@reduxjs/toolkit";
import newfeedSlice from "../screens/NewFeed/newfeedSlice";
import postSlice from "../screens/components/postSlice";
import messageSlice from "../screens/message/messageSlice";

const store = configureStore({
    reducer:{
        postNewFeed: newfeedSlice.reducer,
        post: postSlice.reducer,
        message: messageSlice.reducer,
    }
})

export default store