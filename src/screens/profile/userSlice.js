import {createSlice} from "@reduxjs/toolkit";
import {
    editUserInfo, getSearchItems,
    getUserInfo,
    getUserInfoById
} from "./userThunk";
import {useDispatch} from "react-redux";

const userSliceLog = function(where, message) {
    // console.log("[userSlice] - " + where + " - " + message);
}


export const counterSlice = createSlice({
    name : "user",
    initialState : {
        username: "userNameDefault",
        gender: "genderDefault",
        birthday: "1900-07-19T00:00:00.000Z",
        description: "love you love your mum too",
        avatar: {
            type: "image",
            id: "63e682a0d051a30021c4b421",
            fileName: "bae17c38-21f7-483c-b6b0-6f55498a76b2.png",
            fileSize: 61462,
            createdAt: "2023-02-10T17:45:04.603Z",
            updatedAt: "2023-02-10T17:45:04.603Z",
            version: 0
        },
        coverImage: {
            type: "image",
            id: "63e682a0d051a30021c4b421",
            fileName: "bae17c38-21f7-483c-b6b0-6f55498a76b2.png",
            fileSize: 61462,
            createdAt: "2023-02-10T17:45:04.603Z",
            updatedAt: "2023-02-10T17:45:04.603Z",
            version: 0
        },
        blockedInbox: [],
        blockedDiary: [],
        phoneNumber: "0987654321+1",
        id: "6395ef6b6eca6b001600dac7",
        searchItems : [],
    },
    reducers : {
        updateUserInfo : (state, action) => {
        },
    },
    extraReducers : (builder) => {
        builder
            .addCase(editUserInfo.fulfilled, (state, action) => {
                userSliceLog("editUserInfo", "payload = " + JSON.stringify(action.payload));
                let payload = action.payload.data;
                state.username =  payload.username;
                state.gender =  payload.gender;
                state.birthday =  payload.birthday;
                state.description =  payload.description;
                state.address =  payload.address;
                state.city =  payload.city;
                state.country =  payload.country;
                state.avatar =  payload.avatar;
                state.coverImage = payload.cover_image;
                state.blocked_diary =  payload.blocked_diary;
                state.blockedInbox =  payload.blockedInbox;
            })
            .addCase(getUserInfo.fulfilled, (state, action) => {
                userSliceLog("getUserInfo", "payload = " + JSON.stringify(action.payload));
                let payload = action.payload.data;
                state.username =  payload.username;
                state.gender =  payload.gender;
                state.birthday =  payload.birthday;
                state.description =  payload.description;
                state.address =  payload.address;
                state.city =  payload.city;
                state.country =  payload.country;
                state.avatar =  payload.avatar;
                state.coverImage = payload.cover_image;
                state.blocked_diary =  payload.blocked_diary;
                state.blockedInbox =  payload.blockedInbox;
            })
            .addCase(getUserInfoById.fulfilled, (state, action) => {

            })
            .addCase(getSearchItems.fulfilled, (state, action) => {
                userSliceLog("getSearchItems" , "payload = " + JSON.stringify(action.payload));
            })
    },
})

export default counterSlice;
