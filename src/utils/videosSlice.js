import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    videosArray: [],
  },
  reducers: {
    addVideosInfo: (state, action) => {
      state.videosArray = action.payload;
    },
  },
});

export default videosSlice.reducer;
export const { addVideosInfo } = videosSlice.actions;
