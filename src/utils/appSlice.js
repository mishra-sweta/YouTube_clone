import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    sidebar: true,
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
  },
});

export default appSlice.reducer;
export const { toggleSidebar, closeSidebar, openSidebar } = appSlice.actions;
