import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserApi} from "../../api/userApi";

const userThunkLog = function(where, message) {
    // console.log("[UserThunk] - " + where + " - " + message)
}

/**
 * Yêu cầu khi cung cấp payload cần theo form như sau
 * @type {AsyncThunk<unknown, void, AsyncThunkConfig>}
 * @example
 *   "username": "congson1907vn",
 *   "gender": "male",
 *   "birthday": "2001-07-19",
 *   "description": "love you love your mum too",
 *   "address": "thach Ha, Ha Tinh",
 *   "city": "Ha Tinh",
 *   "country": "Vietnam",
 *   "avatar" : <IMAGE BASE 64>,
 *   "cover_image" : <IMAGE BASE 64>
 */
const editUserInfo = createAsyncThunk(
    'user/editUserInfo',
    async (editPayload, thunkApi) => {
        try {
            console.log("CALLING");
            let response = await UserApi.edit(editPayload);
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
        console.log("Calling")
        try {
            userThunkLog("getUserInfo", "Calling this")
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

/**
 * API này sử dụng payload dưới dạng như sau
 * @type {AsyncThunk<unknown, void, AsyncThunkConfig>}
 * @example
 * payload = {
 *     keyword : "Thienhauocmo"
 * }
 */
const getSearchItems = createAsyncThunk(
    'user/getSearchItems',
    async (payload) => {
        console.log("Calling")
        try {
            userThunkLog("getSearchItems", "Calling this")
            let response = await UserApi.search(payload);
            if (response.status !== 200) {
                userThunkLog("getSearchItems", "Something wrong when request with code : " + response.status);
            }
            let json = await response.json();
            userThunkLog("getSearchItems", "JSON data + " + JSON.stringify(json));
            return json;
        } catch (err) {
            userThunkLog("getSearchItems/err", JSON.stringify(err));
        }
    }
)

export {
    editUserInfo,
    getUserInfo,
    getUserInfoById,
    getSearchItems
}
