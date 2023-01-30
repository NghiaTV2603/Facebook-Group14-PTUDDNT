import {createSelector} from "@reduxjs/toolkit";

export const postNewFeedSelector = (state) => state.postNewFeed;
export const commentPostSelector = (state) => state.post.comment;