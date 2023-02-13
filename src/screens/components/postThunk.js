import {createAsyncThunk} from "@reduxjs/toolkit";
import {PostApi} from "../../api/postApi";

const postThunkLog = function(where, message) {
    console.log("[PostThunk] - " + where + " - " + message)
}


const createPost = createAsyncThunk(
    'post/createPost',
    async (payload) => {
        try {
            postThunkLog("createPost", "Calling this")
            let response = await PostApi.post(payload);
            if (response.status !== 200) {
                postThunkLog("createPost", "Something wrong when request with code : " + response.status);
            }
            let json = await response.json();
            postThunkLog("createPost", "JSON data + " + JSON.stringify(json));
            return json;
        } catch (err) {
            postThunkLog("createPost/err", JSON.stringify(err));
        }
    }
)

const getNewFeed = createAsyncThunk(
    'post/getNewFeed',
    async (payload) => {
        try {
            postThunkLog("getNewFeed", "Calling this")
            let response = await PostApi.getNewFeed(payload);
            if (response.status !== 200) {
                postThunkLog("getNewFeed", "Something wrong when request with code : " + response.status);
            }
            let json = await response.json();
            postThunkLog("getNewFeed", "JSON data + " + JSON.stringify(json));
            return json;
        } catch (err) {
            postThunkLog("createPost/err", JSON.stringify(err));
        }
    }
)

export {
    createPost,
    getNewFeed
}
