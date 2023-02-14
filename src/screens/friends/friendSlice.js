import {createSlice} from "@reduxjs/toolkit";
import {getListFriend, getListRequestedFriend} from "./FriendThunk";

const friendSliceLog = function(where, message) {
    // console.log("[friendSlice] - " + where + " - " + message)
}

const friendSlice = createSlice({
    name : "friend",
    initialState : {
        listFriend : [],
        listSuggest : [],
        listSearch : [],
    },
    reducers : {

    },
    extraReducers : (builder) => {
        builder
            .addCase(getListFriend.fulfilled, (state, action) => {
                friendSliceLog("getListFriend", "payload = " + JSON.stringify(action.payload));
                state.listFriend = action.payload.data.friends;
            })
            .addCase(getListRequestedFriend.fulfilled, (state, action) => {
                friendSliceLog("getListRequestedFriend", "payload = " + JSON.stringify(action.payload));
            })
    }
})

export default  friendSlice;
