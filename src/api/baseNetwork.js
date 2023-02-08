import {BASE_API_SERVER} from "../app/constants";

/**
 * @param {string} api
 * @param {EnumMethodType} method
 * @param {Object} payload
 * @returns {Promise<Response>}
 */
export const fetchingData = function (api, method, payload) {
    let apiUrl = BASE_API_SERVER;
    apiUrl += api;
    let header;
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

