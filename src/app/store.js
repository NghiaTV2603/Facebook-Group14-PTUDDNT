import {configureStore} from "@reduxjs/toolkit";
import newfeedSlice from "../screens/NewFeed/newfeedSlice";
import postSlice from "../screens/components/postSlice";
import messageSlice from "../screens/message/messageSlice";
import authSlice from "../screens/login/authSlice";
import userSlice from "../screens/profile/userSlice";
import friendSlice from "../screens/friends/friendSlice";

const store = configureStore({
    reducer:{
        auth : authSlice.reducer,
        postNewFeed: newfeedSlice.reducer,
        post: postSlice.reducer,
        message: messageSlice.reducer,
        user : userSlice.reducer,
        friend : friendSlice.reducer
    }
})

export default store