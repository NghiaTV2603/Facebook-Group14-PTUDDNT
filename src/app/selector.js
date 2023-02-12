import {createSelector} from "@reduxjs/toolkit";
import {BASE_SERVER_FILES} from "./constants";

export const postNewFeedSelector = (state) => state.postNewFeed;
export const commentPostSelector = (state) => state.post.comment;

export const authSelector = (state) => state.auth;

// USER SELECTOR ====================================================
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

// END USER SELECTOR ===========================================

// POST SELECTOR ===============================================

export const newFeedSelector = (state) => {
    if (state.post && state.post.newFeed) {
        let response = [];
        let serverPost = state.post.newFeed;
        serverPost.map(({author, countComments, described, images, like, updatedAt}) => {
            let clientPost = {
                id : author._id,
                user : author.username,
                avatar : author.avatar.fileName,
                date : updatedAt,
                caption : described,
                comment : countComments,
                like : like.length,
                imageContent : images,
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


export const userSeletor = (state) => state.user;