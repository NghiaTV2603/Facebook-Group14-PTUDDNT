import {createSlice} from "@reduxjs/toolkit";
import {createComment, createPost, getComment, getNewFeed, likePost} from "./postThunk";

const postSliceLog = function(where, message) {
    console.log("[postSlice] - " + where + " - " + message);
}

const findPostWithId = function(postPool, postId) {
    for (let postIndex in postPool) {
        if (postPool[postIndex]._id == postId) {
            return postIndex;
        }
    }
    return null;
}


const postSlice = createSlice({
    name:'post',
    initialState:{
        newFeed : [],
        userPost : [],
        otherUserPost : [],
        comment : [],
        isLoading : false
    },
    reducers:{
        clearComment : state => {
            state.comment = [];
        },
        changeLoading : state => {
            state.isLoading = true;
        }
    },
    extraReducers : (builder) => {
        builder
            .addCase(createPost.fulfilled, (state, action) => {
                postSliceLog("createPost", "payload = " + JSON.stringify(action.payload));
                state.newFeed.unshift(action.payload.data);
                state.userPost.unshift(action.payload.data);
                state.isLoading = false;
            })
            .addCase(getNewFeed.fulfilled, (state, action) => {
                postSliceLog("getNewFeed", "payload = " + JSON.stringify(action.payload));
                state.newFeed = action.payload.data;
                state.newFeed = state.newFeed.reverse();
                state.isLoading = false;
            })
            .addCase(likePost.fulfilled, (state, action) => {
                postSliceLog("likePost", "payload = " + JSON.stringify(action.payload));
                let postId = action.payload.data._id;
                let postPool = [state.newFeed, state.userPost, state.otherUserPost];
                for (let i = 0; i < postPool.length; i++) {
                    let pool = postPool[i];
                    let postIndex = findPostWithId(pool, postId);
                    if (postIndex !== null) {
                        pool[postIndex].like = action.payload.data.like.length;
                        pool[postIndex].isLike = action.payload.data.isLike;
                    }
                }
                state.isLoading = false;
            })
            .addCase(getComment.fulfilled, (state, action) => {
                postSliceLog("getComment", "payload = " + JSON.stringify(action.payload));
                state.comment = action.payload.data;
                state.isLoading = false;
            })
            .addCase(createComment.fulfilled, (state, action) => {
                postSliceLog("createComment", "payload = " + JSON.stringify(action.payload));
                state.comment.push(action.payload.data);
                let postPool = [state.newFeed, state.userPost, state.otherUserPost];
                for (let i = 0; i < postPool.length; i++) {
                    let pool = postPool[i];
                    let postIndex = findPostWithId(pool, action.payload.data.post);
                    if (postIndex !== null) {
                        pool[postIndex].countComments += 1;
                    }
                }
                state.isLoading = false;
            })
    }
})

export default postSlice