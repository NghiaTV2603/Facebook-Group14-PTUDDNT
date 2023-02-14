import {fetchingData, METHOD_TYPE} from "../../api/baseNetwork";

let FriendApi = {}
FriendApi.getListFriend = async function (payload) {
    return fetchingData(
        'friends/list',
        METHOD_TYPE.POST,
        payload
    );
}

FriendApi.getListRequestedFriend = async function (payload) {
    return fetchingData(
        'friends/get-requested-friend',
        METHOD_TYPE.POST,
        payload
    );
}

/**
 * API sử dụng payload có dạng dữ liệu như dưới đây
 * @param payload
 * @returns {Promise<Response>}
 * @example
 * payload = {
 *     "user_id" : <userId của người bạn muốn kết bạn>
 * }
 */
FriendApi.setRequestedFriend = async function(payload) {
    return fetchingData(
        'friends/set-request-friend',
        METHOD_TYPE.POST,
        payload
    )
}

/**
 * API sử dụng payload có dạng dữ liệu như dưới đây
 * @param payload
 * @returns {Promise<Response>}
 * {
 *     user_id : <UserId của người bạn mà bạn muốn accept>,
 *     is_accept : "1" <Giá trị này là mặc định để set kết bạn>
 * }
 */
FriendApi.setAcceptRequest = async function(payload) {
    return fetchingData(
        'friends/set-accept',
        METHOD_TYPE.POST,
        payload
    )
}

/**
 * API sử dụng payload có dạng dữ liệu như dưới đây
 * @param payload
 * @returns {Promise<Response>}
 * {
 *     user_id : <UserId của người bạn mà bạn muốn accept>,
 * }
 */
FriendApi.setRemoveFriend = async function(payload) {
    return fetchingData(
        'friends/set-remove',
        METHOD_TYPE.POST,
        payload
    )

}

/**
 * API sử dụng payload có dạng dữ liệu như dưới đây
 * @param payload
 * @returns {Promise<Response>}
 * {
 *     user_id : <UserId của người bạn mà bạn muốn accept>,
 * }
 */
FriendApi.setCancelRequest = async function(payload) {
    return fetchingData(
        'friends/friends/cancel-request',
        METHOD_TYPE.POST,
        payload
    )
}

export {FriendApi};
