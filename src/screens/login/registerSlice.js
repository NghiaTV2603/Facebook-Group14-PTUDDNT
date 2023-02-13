import {createSlice} from "@reduxjs/toolkit";


export const registerSlice = createSlice({
    name: 'register',
    initialState: {
        errorMessage: null,
        isRegister: false,
    },
    reducers: {
        updateRegisterInfo: (state, action) => {
            let payload = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase()
    },
    }
)