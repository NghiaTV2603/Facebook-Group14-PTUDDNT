import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserApi} from "../../api/userApi";

const userThunkLog = function(where, message) {
    console.log("[UserThunk] - " + where + " - " + message)
}

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
               userThunkLog('editUserInfo', "Something wrong when request with code : " + response.status);
            }
            let json = await response.json();
            return json;
            // return await response.json();
        } catch (err) {
            userThunkLog('editUserInfo/err', JSON.stringify(err));
        }
    }
)

const getUserInfoById = createAsyncThunk(
    'user/getUserInfoById',
    async ({userId}) => {
        try {
            let response = await UserApi.showWithId(userId);
            if (response.status !== 200) {
               userThunkLog("getUserInfoById", "Something wrong when request with code : " + response.status);
            }
            let json = await response.json();
            return json;
            // return await response.json();
        } catch (err) {
            userThunkLog("getUserInfoById/err", JSON.stringify(err));
        }

    }

)

const getUserInfo = createAsyncThunk(
    'user/getUserInfo',
    async () => {
        try {
            let response = await UserApi.show();
            if (response.status !== 200) {
                userThunkLog("getUserInfo", "Something wrong when request with code : " + response.status);
            }
            let json = await response.json();
            userThunkLog("getUserInfo", "JSON data + " + JSON.stringify(json));
            return json;
        } catch (err) {
            userThunkLog("getUserInfo/err", JSON.stringify(err));
        }
    }
)

export {
    editUserInfo,
    getUserInfo,
    getUserInfoById,
    userThunkLog
}
