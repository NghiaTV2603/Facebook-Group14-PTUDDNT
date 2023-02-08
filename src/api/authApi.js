import {fetchingData, METHOD_TYPE} from "./baseNetwork";

let AuthApi = {}
AuthApi.login = async function (username, password) {
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

export {AuthApi};