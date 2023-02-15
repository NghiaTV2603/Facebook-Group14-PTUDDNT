import {fetchingData, METHOD_TYPE} from "./baseNetwork";

let MessageApi = {}

MessageApi.listChat = function () {
    return fetchingData(
        'chats/getChats',
        METHOD_TYPE.GET,
    );
}
MessageApi.getMessage = function (chatId) {
    return fetchingData(
        `chats/getMessages/${chatId}`,
        METHOD_TYPE.GET,
    );
}
MessageApi.deleteMessage = function (chatId) {
    return fetchingData(
        `chats/deleteChat/${chatId}`,
        METHOD_TYPE.DELETE,
    );
}
export default MessageApi