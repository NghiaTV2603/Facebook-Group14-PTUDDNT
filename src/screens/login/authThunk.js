import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthApi} from "../../api/authApi";

const loginWithPhoneNumber = createAsyncThunk(
    'auth/loginWithPhoneNumber',
    async ({phoneNumber, password}, thunkApi) => {
        try {
            let response = await AuthApi.login(phoneNumber, password);
            if (response.status !== 200) {
                console.log("Something wrong when request with code : " + response.status);
            }
            let json = await response.json();
            console.log("\n\n");
            console.log(JSON.stringify(json));
            return json;
            // return await response.json();
        } catch (err) {
            console.log(JSON.stringify(err));
        }
    }
)

export {
    loginWithPhoneNumber
}