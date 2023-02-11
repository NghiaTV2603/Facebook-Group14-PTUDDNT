import {fetchingData, METHOD_TYPE} from "./baseNetwork";

let UserApi = {}
UserApi.login = async function (username, password) {
    let loginPayload = {
        phonenumber: username,
        password: password
    };
    return fetchingData(
        'users/login',
        METHOD_TYPE.POST,
        loginPayload
    );
}

/**
 * Khi sử dụng API này cần thực hiện truyền đúng đối tượng chứa 1 / nhiều trường như dưới ví dụ
 * @param editPayload
 * @returns {Promise<Response>}
 * @example
 * const editPayLoad = {
 *   "username": "congson1907vn",
 *   "gender": "male",
 *   "birthday": "2001-07-19",
 *   "description": "love you love your mum too",
 *   "address": "thach Ha, Ha Tinh",
 *   "city": "Ha Tinh",
 *   "country": "Vietnam",
 *   "avatar" : <Image Base 64>,
 *   "cover_image" : <Image Base 64>
 * }
 */
UserApi.edit = async function (editPayload ) {
    return fetchingData(
        'users/edit',
        METHOD_TYPE.POST,
        editPayload
    );
}

UserApi.show = async function() {
    return fetchingData (
        'users/show',
        METHOD_TYPE.GET,
        null,
    )
}

UserApi.showWithId = async function(userId) {
    let api = 'users/show/' + userId;
    return fetchingData(
        api,
        METHOD_TYPE.GET,
        null
    )
}
export {UserApi};
