import {createSelector} from "@reduxjs/toolkit";

export const postNewFeedSelector = (state) => state.postNewFeed;
export const commentPostSelector = (state) => state.post.comment;

export const authSelector = (state) => state.auth;
export const dataUserMessage = (state) => state.message;