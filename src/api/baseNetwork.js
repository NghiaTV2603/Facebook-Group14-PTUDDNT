import {BASE_API_SERVER} from "../app/constants";
import {AsyncStorage} from "react-native";

/**
 * @param {string} api
 * @param {EnumMethodType} method
 * @param {Object} payload
 * @returns {Promise<Response>}
 */
export const fetchingData = async function (api, method, payload) {
    let apiUrl = BASE_API_SERVER;
    apiUrl += api;
    let header;
    header = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
    let token = await AsyncStorage.getItem("token");
    if (token) {
        header = {
            ...header,
            Authorization : "Bearer " + token
        }
    }

    let init = {}
    if (payload !== null) {
        init = {
            method: method, headers: header, body: JSON.stringify(payload)
        }
    } else {
        init = {method: method, headers: header}
    }

    return fetch(apiUrl, init);
};

/** @typedef {string} EnumMethodType */
let METHOD_TYPE = {}
/** @type EnumMethodType */ METHOD_TYPE.POST = "POST";
/** @type EnumMethodType */ METHOD_TYPE.GET = "GET";
/** @type EnumMethodType */ METHOD_TYPE.PATCH = "PATCH";
/** @type EnumMethodType */ METHOD_TYPE.PUT = "PUT";
/** @type EnumMethodType */ METHOD_TYPE.DELETE = "DELETE";


export default fetchingData;
export {METHOD_TYPE};

