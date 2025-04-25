import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../utils/appSlice";
import videoReducer from "../utils/videosSlice";
import searchReducer from "../utils/searchSlice";

const appStore = configureStore({
  reducer: {
    app: appReducer,
    videos: videoReducer,
    search: searchReducer,
  },
});

export default appStore;
