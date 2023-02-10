import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserApi} from "../../api/userApi";

const editUserInfo = createAsyncThunk(
    'user/editUserInfo',
    async ({
               username,
               gender,
               birthday,
               description,
               address,
               city,
               country
           }, thunkApi) => {
        try {
            let response = await UserApi.edit(
                username,
                gender,
                birthday,
                description,
                address,
                city,
                country
            );
            if (response.status !== 200) {
                console.log("Something wrong when request with code : " + response.status);
            }
            let json = await response.json();
            console.log("\n\n");
            console.log("[UserApi] - edit user response");
            console.log(JSON.stringify(json));
            return json;
            // return await response.json();
        } catch (err) {
            console.log(JSON.stringify(err));
        }
    }
)

const getUserInfoById = createAsyncThunk(
    'user/getUserInfoById',
    async ({userId}) => {
        try {
            let response = await UserApi.showWithId(userId);
            if (response.status !== 200) {
                console.log("Something wrong when request with code : " + response.status);
            }
            let json = await response.json();
            console.log("\n\n");
            console.log("[UserApi] - show user info with id response");
            console.log(JSON.stringify(json));
            return json;
            // return await response.json();
        } catch (err) {
            console.log(JSON.stringify(err));
        }

    }

)

const getUserInfo = createAsyncThunk(
    'user/getUserInfoById',
    async () => {
        try {
            let response = await UserApi.show();
            if (response.status !== 200) {
                console.log("Something wrong when request with code : " + response.status);
            }
            let json = await response.json();
            console.log("\n\n");
            console.log("[UserApi] - show user info response");
            console.log(JSON.stringify(json));
            return json;
            // return await response.json();
        } catch (err) {
            console.log(JSON.stringify(err));
        }
    }
)

export {
    editUserInfo,
    getUserInfoById,
    getUserInfo
}
