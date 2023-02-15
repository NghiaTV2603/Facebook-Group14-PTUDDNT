import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import MessageApi from "../../api/messageApi";

const messageSlice = createSlice({
    name:'message',
    initialState:{
        listChat : [
            {
                "chatId": '',
                "lastMessage": {
                    "_id": "",
                    "time": "",
                    "senderId": "",
                    "receiverId": "",
                    "content": "",
                    "chatId": "",
                    "createdAt": "",
                    "updatedAt": "",
                    "__v": 0
                },
                "friend": {
                    "gender": "",
                    "blocked_inbox": [],
                    "blocked_diary": [],
                    "_id": "",
                    "phonenumber": "",
                    "password": "",
                    "username": "",
                    "avatar": {
                        "type": "",
                        "_id": "",
                        "fileName": "",
                        "fileSize": '',
                        "__v": 0,
                        "createdAt": "",
                        "updatedAt": ""
                    },
                    "cover_image": "",
                    "createdAt": "",
                    "updatedAt": "",
                    "__v": 4,
                    "address": "",
                    "birthday": "",
                    "city": "",
                    "country": "",
                    "description": ""
                },
                "seen": true,
                "blockers": []
            }
        ],
        currentChat: [],

    },
    reducers:{
        addMessage : (state,action) => {
            state.currentChat.data.push(action.payload)
        },
        resetCurrentChat : (state, action) => {
            state.currentChat = []
        },
        seenMessage : (state, action)=>{
            const chatSeen = state.listChat.find(chat => chat.chatId === action.payload)
            if (chatSeen) {
                chatSeen.seen = true;
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchListChat.fulfilled,(state, action) => {
            state.listChat = action.payload
        })
        builder.addCase(fetchMessage.fulfilled,(state, action)=>{
            state.currentChat = action.payload
        })
    }
})

export const fetchListChat = createAsyncThunk("message/fetchListChat", async () => {
    try {
        let response = await MessageApi.listChat();
        if (response.status !== 200) {
            console.log("[FetchListChatThunk - Error] " + response.status);
        }
        let json = await response.json();
        return json.data;
    } catch (err) {
        console.log("[FetchListChatThunk - Error ]" + JSON.stringify(err));
    }
})

export const fetchMessage = createAsyncThunk("message/fetchMessage", async (chatId)=>{
    try {
        let response = await MessageApi.getMessage(chatId);
        if (response.status !== 200) {
            console.log("[FetchMessage - Error] " + response.status);
        }
        let json = await response.json();
        return json;
    } catch (err) {
        console.log("[FetchMessage - Error ]" + JSON.stringify(err));
    }
})


export default messageSlice