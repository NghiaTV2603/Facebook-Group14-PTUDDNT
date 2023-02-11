import {createSlice} from "@reduxjs/toolkit";
import {
    editUserInfo,
    getUserInfo,
    getUserInfoById
} from "./userThunk";


export const counterSlice = createSlice({
    name : "user",
    initialState : {
        username: "username_default",
        gender: "gender_default",
        birthday: "birthday_default",
        description: "des_default",
        address: "add_default",
        city: "city_default",
        country: "country_default"
    },
    reducers : {
        updateInfoWhenLogin : (state, action) => {
        },
        updateUser : (state, action) => {
        },
    },
    extraReducers : (builder) => {
        // builder
            // .addCase(editUserInfo.fulfilled, (state, action) => {
            //
            // })
            // .addCase(getUserInfo.fulfilled, (state, action) => {
            //
            // })
            // .addCase(getUserInfoById.fulfilled, (state, action) => {
            //
            // })
    },
})

export default counterSlice;
