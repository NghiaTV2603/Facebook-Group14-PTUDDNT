import {createSelector} from "@reduxjs/toolkit";
import {BASE_SERVER_FILES} from "./constants";

export const postNewFeedSelector = (state) => state.postNewFeed;
export const commentPostSelector = (state) => {
    let listComment = state.post.comment;
    let clientComment = [];
    listComment.map((comment) => {
        let element = {
            username : comment.user.username,
            userId : comment.user._id,
            avatar : BASE_SERVER_FILES + comment.user.avatar.fileName,
            comment : comment.content
        }
        clientComment.unshift(element);
    })
    return clientComment;
};

// AUTH ==============================================
export const authSelector = (state) => state.auth;
export const loginMessageErrorSel = (state) => state.auth.errorMessage;
// END AUTH ==========================================

// USER SELECTOR ====================================================

export const otherProfile = (state) => state.user.otherProfile;
export const dataUserMessage = (state) => state.message.listChat;
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
        "address",
    ];
    for (let key of infoKey) {
        if (userInfo[key]) {
            response[key] = userInfo[key];
        }
    }
    return response;
}

export const userNameSelector = (state) => state.user.username;

export const userSearchItem = (state) => {
    let searchItems = state.user.searchItems;
    let listSearch = [];
    console.log(JSON.stringify(Object.keys(searchItems)));
    for (let category of Object.keys(searchItems)) {
        console.log("Category " + category + " " + JSON.stringify(searchItems[category]));
        listSearch.push(...searchItems[category]);
    }
    // console.log(JSON.stringify(listSearch));
    return listSearch;
};

// END USER SELECTOR ===========================================

// POST SELECTOR ===============================================

export const isLoadingSelector = state => state.post.isLoading;

export const newFeedSelector = (state) => {
    if (state.post && state.post.newFeed) {
        let response = [];
        let serverPost = state.post.newFeed;
        serverPost.map(({_id, isLike, author, countComments, described, images, like, createdAt}) => {
            let clientPost = {
                id : _id,
                user : author.username,
                avatar : author.avatar.fileName,
                date : createdAt,
                caption : described,
                comment : countComments,
                likeNumber : like.length,
                imageContent : images,
                isLike : isLike
            }
            response.push(clientPost);
        })
        return response;
    } else {
        console.log("[newFeedSelector] - newFeed non exist, default post");
        return [
            {
                id:1,
                user: "Thierry Henry",
                avatar:
                    "https://i.guim.co.uk/img/media/21f4eb902cc4fe56dd2378adb83d4eef49b0fbe6/0_0_4966_2979/master/4966.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d81de456b25007c739555f1e064bab5f",
                date: "20 nov",
                caption: "Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii Messiiii ",
                like: 16000 ,
                comment: "345",
                content:
                    "https://cdnmedia.baotintuc.vn/Upload/c2tvplmdloSDblsn03qN2Q/files/2022/12/04/VDH/Messi-world-cup-2022-argentina-4122022.jpg",
            },
            {
                id:2,
                user: "Neymar JR",
                avatar:
                    "https://neymar2022.football/wp-content/uploads/2022/12/BRAZIL-4-1-korea-4.jpg",
                date: "20 nov",
                caption: "Fierce battle ... ",
                like: 166010,
                comment: "1345",
                content:
                    "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blta6d3c1124fa3ed25/60dbf60f454f930f33f6720a/5916b0bbf9d26509a25a7f16b0bc4841dc405175.jpg",
            },
            {
                id:3,
                user: "Mesut Ozil",
                avatar:
                    "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltc3f9d5b7b6c4ea65/60dd409393730d0ef600f1e0/5bcb15b961ee67f1d73f90606f091992776cb2a7.jpg",
                date: "20 nov",
                caption: "We will fight to the end.  ",
                like: 112000,
                comment: "545",
                content:
                    "https://prod.static9.net.au/fs/c6280c7c-d302-4664-bd9b-30fef84ba2b2",
            },
        ]
    }
}




// END POST SELECTOR ===========================================


// FRIEND SELECTOR
export const getListFriendSelector = state => state.friend.listFriend;
export const getListRequestedFriendSelector = state => state.friend.listRequested;

// END FRIEND SELECTOR

export const userSeletor = (state) => {
    return state.user;
}