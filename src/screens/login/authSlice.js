import {createSlice} from "@reduxjs/toolkit";
import {loginWithPhoneNumber} from "./authThunk";


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
        builder.addCase(
            loginWithPhoneNumber.fulfilled,
            (state, action) => {
                let payload = action.payload;
                console.log(JSON.stringify(action));
                if (payload.message) {
                    state.errorMessage = payload.message
                } else {
                    state.isLogin = true;
                    state.token = payload.token;
                }
            }
        )
    },
})

export default counterSlice;