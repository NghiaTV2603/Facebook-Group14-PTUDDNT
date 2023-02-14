export default class FriendModel {
    constructor(/** string */ avatarUrl, /** string */ name, /** string */ uid) {
        this.avatarUrl = avatarUrl;
        this.name = name;
        this.uid = uid;
    }
}

export const FriendConstant = {
    OPTION: {
        SUGGEST: "suggest",
        YOUR_FIEND: "friend",
        NON_FRIEND : "non_friend"
    }
}
