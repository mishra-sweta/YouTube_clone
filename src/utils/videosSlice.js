import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    videosArray: [],
    keywordVideos: [],
  },
  reducers: {
    addVideosInfo: (state, action) => {
      state.videosArray = action.payload;
    },
    addKeywordVideos: (state, action) => {
      state.keywordVideos = action.payload;
    },
  },
});

export default videosSlice.reducer;
export const { addVideosInfo, addKeywordVideos } = videosSlice.actions;
