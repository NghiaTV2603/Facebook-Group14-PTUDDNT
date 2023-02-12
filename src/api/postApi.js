import {fetchingData, METHOD_TYPE} from "./baseNetwork";

let PostApi = {}

/**
 * Payload phải chứa các trường dưới đậy
 * @param payload
 * @returns {Promise<Response>}
 * @example
 * payload = {
 *     description : "",
 *     images : <Mảng ảnh base 64>
 * }
 */
PostApi.post = function(payload) {
    return fetchingData(
        'posts/create',
        METHOD_TYPE.POST,
        payload
    )
}

PostApi.getNewFeed = function(payload) {
    return fetchingData(
        'posts/list',
        METHOD_TYPE.GET,
        null
    )
}

export {PostApi};

