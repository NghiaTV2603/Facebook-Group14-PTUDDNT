import {createAsyncThunk} from "@reduxjs/toolkit";
import {FriendApi} from "./friendApi";

const friendThunkLog = function(where, message) {
    console.log("[friendThunk] - " + where + " - " + message)
}

/**
 * API này không nhận bất cứ payload nào, truyền null vào
 * @type {AsyncThunk<unknown, void, AsyncThunkConfig>}
 */
const getListFriend = createAsyncThunk(
    "friend/getListFriend",
    async (payload) => {
        try {
            let response = await FriendApi.getListFriend(null);
            if (response.status !== 200) {
                friendThunkLog('getListFriend', "Something wrong when request with code : " + response.status);
            }
            let json = await response.json();
            return json;
            // return await response.json();
        } catch (err) {
            friendThunkLog('getListFriend/err', JSON.stringify(err));
        }

    }
)

const getListRequestedFriend = createAsyncThunk(
    "friend/getListRequested",
    async (payload) => {
        try {
            let response = await FriendApi.getListRequestedFriend(null);
            if (response.status !== 200) {
                friendThunkLog('getListRequestedFriend', "Something wrong when request with code : " + response.status);
            }
            let json = await response.json();
            return json;
            // return await response.json();
        } catch (err) {
            friendThunkLog('getListRequestedFriend/err', JSON.stringify(err));
        }

    }
)
export {
    getListFriend,
    getListRequestedFriend
}