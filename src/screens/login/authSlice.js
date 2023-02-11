import {createSlice} from "@reduxjs/toolkit";
import {loginWithPhoneNumber} from "./authThunk";
import {AsyncStorage} from "react-native";


export const counterSlice = createSlice({
    name : "auth",
    initialState : {
        isLogin : false,
        token : null,
        errorMessage : null,
    },
    reducers : {
        updateInfoWhenLogin : (state, action) => {
            let payload = action.payload;
        }

    },
    extraReducers : (builder) => {
        builder
            .addCase(loginWithPhoneNumber.fulfilled, (state, action) => {
                let payload = action.payload;
                console.log("authSlice login " + JSON.stringify(action.payload));
                if (payload.message) {
                    state.errorMessage = payload.message
                } else {
                    state.isLogin = true;
                    state.token = payload.token;
                    AsyncStorage.setItem("token", payload.token);
                }
            })
    },
})

export default counterSlice;