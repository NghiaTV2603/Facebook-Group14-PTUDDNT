import {createAsyncThunk} from "@reduxjs/toolkit";
import {PostApi} from "../../api/postApi";

const postThunkLog = function(where, message) {
    console.log("[PostThunk] - " + where + " - " + message)
}

/**
 * API sử dụng để tạo bài viết, payload là một object bao gồm các trường dưới đâyj
 * @type {AsyncThunk<unknown, void, AsyncThunkConfig>}
 * @example
 * payload = {
 *     descripted : <Status của post cần đăng>,
 *     images : <Mảng chứa image được encode dạng bas64, bắt đầu bằng "data:image/png;base64,">
 * }}
 */
const createPost = createAsyncThunk(
    'post/createPost',
    async (payload) => {
        try {
            postThunkLog("createPost", "Calling this")
            let response = await PostApi.post(payload);
            if (response.status !== 200) {
                postThunkLog("createPost", "Something wrong when request with code : " + response.status);
            }
            let json = await response.json();
            postThunkLog("createPost", "JSON data + " + JSON.stringify(json));
            return json;
        } catch (err) {
            postThunkLog("createPost/err", JSON.stringify(err));
        }
    }
)

/**
 * API này sử dụng payload = null là tham số, không cần gì bên trong payload cả
 * @type {AsyncThunk<unknown, void, AsyncThunkConfig>}
 */
const getNewFeed = createAsyncThunk(
    'post/getNewFeed',
    async (payload) => {
        try {
            let response = await PostApi.getNewFeed(payload);
            if (response.status !== 200) {
                postThunkLog("getNewFeed", "Something wrong when request with code : " + response.status);
            }
            let json = await response.json();
            // postThunkLog("getNewFeed", "JSON data + " + JSON.stringify(json));
            return json;
        } catch (err) {
            postThunkLog("createPost/err", JSON.stringify(err));
        }
    }
)

/**
 * API sử dụng postId để thực hiện chèn vào đường dẫn
 * @type {AsyncThunk<unknown, void, AsyncThunkConfig>}
 * @example
 * payload = {
 *     postId : "aiojoi9398qn2p3ih8hg293gp9382g"
 * }
 */
const likePost = createAsyncThunk(
    'post/postLike',
    async (payload) => {
        try {
            let response = await PostApi.likePost(payload);
            if (response.status !== 200) {
                postThunkLog("likePost", "Something wrong when request with code : " + response.status);
            }
            let json = await response.json();
            // postThunkLog("likePost", "JSON data + " + JSON.stringify(json));
            return json;
        } catch (err) {
            postThunkLog("likePost/err", JSON.stringify(err));
        }
    }
)

/**
 * API sử dụng postId để thực hiện chèn vào đường dẫn
 * @type {AsyncThunk<unknown, void, AsyncThunkConfig>}
 * @example
 * payload = {
 *     postId : "aiojoi9398qn2p3ih8hg293gp9382g"
 * }
 */
const getComment = createAsyncThunk(
    'post/getComment',
    async (payload) => {
        try {
            let response = await PostApi.getComment(payload);
            if (response.status !== 200) {
                postThunkLog("getComment", "Something wrong when request with code : " + response.status);
            }
            let json = await response.json();
            postThunkLog("getComment", "JSON data + " + JSON.stringify(json));
            return json;
        } catch (err) {
            postThunkLog("getComment/err", JSON.stringify(err));
        }
    }
)

/**
 * Payload của API này cần các trường dưới đây để có thể hoạt động được
 * @type {AsyncThunk<unknown, void, AsyncThunkConfig>}
 * @example
 * paylad = {
 *     content : "Đây là comment của tao, nhìn cái con cặt à",
 *     postId : <Post ID vút vào đây>
 * }
 */
const createComment = createAsyncThunk(
    'post/createComment',
    async (payload) => {
        try {
            let response = await PostApi.createComment(payload);
            if (response.status !== 200) {
                postThunkLog("createComment", "Something wrong when request with code : " + response.status);
            }
            let json = await response.json();
            postThunkLog("createComment", "JSON data + " + JSON.stringify(json));
            return json;
        } catch (err) {
            postThunkLog("createComment/err", JSON.stringify(err));
        }
    }
)


export {
    createPost,
    getNewFeed,
    likePost,
    getComment,
    createComment
}
