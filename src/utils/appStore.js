import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../utils/appSlice";
import videoReducer from "../utils/videosSlice";
import searchReducer from "../utils/searchSlice";
import chatReducer from "../utils/chatSlice";

const appStore = configureStore({
  reducer: {
    app: appReducer,
    videos: videoReducer,
    search: searchReducer,
    chat: chatReducer,
  },
});

export default appStore;
