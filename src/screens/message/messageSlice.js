import {createSlice} from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name:'message',
    initialState:[
        {
            user_id:1,
            name:'Thong TM',
            avatar:'https://i.pinimg.com/originals/63/8c/53/638c53783cd8161ffd87d5846a10b928.jpg',
            message:'hi',
        },
        {
            user_id:2,
            name:'Minh TN',
            avatar:'https://i.pinimg.com/originals/05/5a/1d/055a1de0f1d3c598363b313d61696ecd.gif',
            message:'hello',
        },
        {
            user_id:3,
            name:'Truong TD',
            avatar:'https://cdn.popsww.com/blog/sites/2/2021/12/naruto-sasuke.jpg',
            message:'whattt...',
        },
        {
            user_id:4,
            name:'Nam TM',
            avatar:'https://cdn.popsww.com/blog/sites/2/2021/12/naruto-sasuke.jpg',
            message:'Ava..',
        },
    ],
    reducers:{

    },
})

export default messageSlice