import {createSelector} from "@reduxjs/toolkit";
import {BASE_SERVER_FILES} from "./constants";

export const postNewFeedSelector = (state) => state.postNewFeed;
export const commentPostSelector = (state) => state.post.comment;

export const authSelector = (state) => state.auth;

// User Selector
export const dataUserMessage = (state) => state.message;
export const userAvatarUrl = (state) => {
    let userInfo = state.user;
    let url;
    if (userInfo && userInfo.avatar) {
        url =  BASE_SERVER_FILES + userInfo.avatar.fileName;
    } else {
        url = "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar-600x600.png";
    }
    return url;
}
export const userCoverAvatarUrl = (state) => {
    let userInfo = state.user;
    let url;
    if (userInfo && userInfo.coverImage) {
        url =  BASE_SERVER_FILES + userInfo.coverImage.fileName;
    } else {
        url = "https://media.sproutsocial.com/uploads/2018/04/Facebook-Cover-Photo-Size.png";
    }
    return url
}

export const userInfoSelector = (state) => {
    let userInfo = state.user;
    let response = {};
    let infoKey = [
        "gender",
        "birthday",
        "description",
        "phonenumber",
        "address"
    ];
    for (let key of infoKey) {
        if (userInfo[key]) {
            response[key] = userInfo[key];
        }
    }
    return response;
}

export const userNameSelector = (state) => state.user.username;


export const userSeletor = (state) => state.user;