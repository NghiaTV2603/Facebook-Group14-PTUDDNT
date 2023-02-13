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
export default MessageApi