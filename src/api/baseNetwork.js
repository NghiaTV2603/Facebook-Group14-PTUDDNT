import {BASE_API_SERVER} from "../app/constants";
import {useSelector} from "react-redux";
import {authSelector} from "../app/selector";


/**
 * @param {string} api
 * @param {EnumMethodType} method
 * @param {Object} payload
 * @returns {Promise<Response>}
 */
export const fetchingData = function (api, method, payload) {
    let apiUrl = BASE_API_SERVER;
    // let authToken = authInfo.token;
    apiUrl += api;
    let header;
    // if (TOKEN !== null) {
    //     header = {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //         'Authentication': 'Bearer ' + TOKEN
    //     }
    // } else {
    header = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
    // }

    return fetch(apiUrl, {
        method: method, headers: header, body: JSON.stringify(payload),
    });
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

