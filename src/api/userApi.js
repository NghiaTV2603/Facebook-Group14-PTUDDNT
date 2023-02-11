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

UserApi.edit = async function (
    username,
    gender,
    birthday,
    description,
    address,
    city,
    country
) {
    let createPayload = {
        username: username,
        gender: gender,
        birthday: birthday,
        description: description,
        address: address,
        city: city,
        country: country
    };
    return fetchingData(
        'users/edit',
        METHOD_TYPE.POST,
        createPayload
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
