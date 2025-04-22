import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../utils/appSlice";
import videoReducer from "../utils/videosSlice";

const appStore = configureStore({
  reducer: {
    app: appReducer,
    videos: videoReducer,
  },
});

export default appStore;
