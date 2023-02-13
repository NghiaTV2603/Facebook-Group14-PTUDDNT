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

export {FriendApi};
