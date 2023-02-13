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
/**
 * Payload là một đối tượng có chứa trường postId
 * @param payload
 * @returns {Promise<Response>}
 * @example
 * payload = {
 *     postId : <Post ID ở đây>
 * }
 */
PostApi.likePost = function(payload) {
    let postId = payload.postId;
    console.log("[postApi] uri = " + 'postLike/action/' + postId);
    return fetchingData(
        'postLike/action/' + postId,
        METHOD_TYPE.POST,
        null
    )
}

/**
 * Payload là một đối tượng có chứa trường postId
 * @param payload
 * @returns {Promise<Response>}
 * @example
 * payload = {
 *     postId : <Post ID ở đây>
 * }
 */
PostApi.getComment = function(payload) {
    let postId = payload.postId;
    console.log("[postApi] - getComment - uri = " + 'postLike/action/' + postId);
    return fetchingData(
        'postComment/list/' + postId,
        METHOD_TYPE.GET,
        null
    )
}

PostApi.createComment = function(payload) {
    let postId = payload.postId;
    return fetchingData(
        'postComment/create/' + postId,
        METHOD_TYPE.POST,
        {
            content : payload.content
        }
    )
}

export {PostApi};

