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
    extraReducers : {
        [editUserInfo.fulfilled] : (state, action) => {

        },
        [getUserInfo.fulfilled] : (state, action) => {
            let payload = action.payload;
            console.log(JSON.stringify(action.payload))
            state.username = payload.username;
            state.gender = payload.gender;
            state.birthday = payload.birthday;
            state.description = payload.description;
            state.address = payload.address;
            state.city = payload.city;
            state.country = payload.country;
        },
        [getUserInfoById.fulfilled] : (state, action) => {

        }
    },
})

export default counterSlice;
