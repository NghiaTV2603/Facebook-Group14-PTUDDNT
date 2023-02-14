import {createSlice} from "@reduxjs/toolkit";
import {
    getListFriend,
    getListRequestedFriend,
    setAcceptFriend,
    setCancelRequest,
    setFriend,
    setRemoveFriend
} from "./FriendThunk";
const friendSliceLog = function(where, message) {
    console.log("[friendSlice] - " + where + " - " + message)
}

const friendSlice = createSlice({
    name : "friend",
    initialState : {
        listFriend : [],
        listRequested : [],
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
                state.listRequested = action.payload.data.friends;
            })
            .addCase(setRemoveFriend.fulfilled, (state, action) => {
                friendSliceLog("setRemoveFriend", "payload = " + JSON.stringify(action.payload));
                let sender = action.payload.data.sender;
                let receiver = action.payload.data.receiver;
                state.listFriend = state.listFriend.filter((element) => {
                    console.log(element._id);
                    return (element._id === sender && element._id === receiver)
                });
            })
            .addCase(setAcceptFriend.fulfilled, (state, action) => {
                friendSliceLog("setAcceptFriend", "payload = " + JSON.stringify(action.payload));
                let sender = action.payload.data.sender;
                let receiver = action.payload.data.receiver;
                state.listRequested = state.listRequested.filter((element) => {
                    console.log(element._id);
                    return (element._id !== sender && element._id === receiver)
                });
            })
            .addCase(setCancelRequest.fulfilled, (state, action) => {
                friendSliceLog("setCancelRequest", "payload = " + JSON.stringify(action.payload));
            })
            .addCase(setFriend.fulfilled, (state, action) => {
                friendSliceLog("setFriend", "payload = " + JSON.stringify(action.payload));
            })
    }
})

export default  friendSlice;
