import {createSlice} from "@reduxjs/toolkit";
import {createPost, getNewFeed} from "./postThunk";

const postSliceLog = function(where, message) {
    console.log("[postSlice] - " + where + " - " + message);
}


const postSlice = createSlice({
    name:'post',
    initialState:{
        newFeed : [],
        userPost : [],
        otherUserPost : [],
    },
    reducers:{

    },
    extraReducers : (builder) => {
        builder
            .addCase(createPost.fulfilled, (state, action) => {
                postSliceLog("createPost", "payload = " + JSON.stringify(action.payload));
            })
            .addCase(getNewFeed.fulfilled, (state, action) => {
                postSliceLog("getNewFeed", "payload = " + JSON.stringify(action.payload));
                state.newFeed = action.payload.data;
            })
    }
})

export default postSlice