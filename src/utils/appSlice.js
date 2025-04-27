import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    sidebar: true,
    searchResults: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
    closeSidebar: (state) => {
      state.sidebar = false;
    },
    openSidebar: (state) => {
      state.sidebar = true;
    },
    toggleSearchResults: (state) => {
      state.searchResults = !state.searchResults;
    },
  },
});

export default appSlice.reducer;
export const { toggleSidebar, closeSidebar, openSidebar, toggleSearchResults } =
  appSlice.actions;
