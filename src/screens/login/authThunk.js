import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthApi} from "../../api/authApi";

const loginWithPhoneNumber = createAsyncThunk(
    'auth/loginWithPhoneNumber',
    async ({phoneNumber, password}, thunkApi) => {
        try {
            let response = await AuthApi.login(phoneNumber, password);
            if (response.status !== 200) {
                console.log("[AuthThunk - loginWithPhoneNumber - Something wrong when request with code : " + response.status);
            }
            let json = await response.json();
            return json;
        } catch (err) {
            console.log("[AuthThunk - loginWithPhoneNumber - " + JSON.stringify(err));
        }
    }
)

export {
    loginWithPhoneNumber
}