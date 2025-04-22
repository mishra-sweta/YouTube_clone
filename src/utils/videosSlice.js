import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
  },
  reducers: {
    addVideosInfo: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export default videosSlice.reducer;
export const { addVideosInfo } = videosSlice.actions;
