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

/**
 * API sử dụng payload có dạng dữ liệu như dưới đây
 * @param payload
 * @returns {Promise<Response>}
 * @example
 * {
 *     user_id : <UserId của người bạn mà bạn muốn accept>,
 *     is_accept : "1" <Giá trị này là mặc định để set kết bạn>
 * }
 */
const setAcceptFriend = createAsyncThunk(
    "friend/setAcceptFriend",
    async (payload) => {
        try {
            let response = await FriendApi.setAcceptRequest(payload);
            if (response.status !== 200) {
                friendThunkLog('setAcceptFriend', "Something wrong when request with code : " + response.status);
            }
            let json = await response.json();
            return json;
            // return await response.json();
        } catch (err) {
            friendThunkLog('setAcceptRequest/err', JSON.stringify(err));
        }

    }
)


/**
 * API sử dụng payload có dạng dữ liệu như dưới đây
 * @param payload
 * @returns {Promise<Response>}
 * @example
 * {
 *     user_id : <UserId của người bạn mà bạn muốn accept>,
 * }
 */
const setRemoveFriend = createAsyncThunk(
    "friend/setRemoveFriend",
    async (payload) => {
        try {
            let response = await FriendApi.setRemoveFriend(payload);
            if (response.status !== 200) {
                friendThunkLog('setRemoveFriend', "Something wrong when request with code : " + response.status);
            }
            let json = await response.json();
            return json;
            // return await response.json();
        } catch (err) {
            friendThunkLog('setRemoveFriend/err', JSON.stringify(err));
        }
    }
)


/**
 * API sử dụng payload có dạng dữ liệu như dưới đây
 * @param payload
 * @returns {Promise<Response>}
 * @example
 * {
 *     user_id : <UserId của người bạn mà bạn muốn accept>,
 * }
 */
const setCancelRequest = createAsyncThunk(
    "friend/setCancelRequest",
    async (payload) => {
        try {
            let response = await FriendApi.setCancelRequest(payload);
            if (response.status !== 200) {
                friendThunkLog('setCancelRequest', "Something wrong when request with code : " + response.status);
            }
            let json = await response.json();
            return json;
            // return await response.json();
        } catch (err) {
            friendThunkLog('setCancelRequest/err', JSON.stringify(err));
        }
    }
)

/**
 * API sử dụng payload có dạng dữ liệu như dưới đây
 * @param payload
 * @returns {Promise<Response>}
 * @example
 * {
 *     user_id : <UserId của người bạn mà bạn muốn accept>,
 * }
 */
const setFriend = createAsyncThunk(
    "friend/setFriend",
    async (payload) => {
        try {
            let response = await FriendApi.setRequestedFriend(payload);
            if (response.status !== 200) {
                friendThunkLog('setRequestedFriend', "Something wrong when request with code : " + response.status);
            }
            let json = await response.json();
            return json;
            // return await response.json();
        } catch (err) {
            friendThunkLog('setRequestedFriend/err', JSON.stringify(err));
        }
    }
)




export {
    getListFriend,
    getListRequestedFriend,
    setRemoveFriend,
    setCancelRequest,
    setAcceptFriend,
    setFriend
}