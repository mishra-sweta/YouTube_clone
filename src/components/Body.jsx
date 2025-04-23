import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import useGetVideos from "../utils/useGetVideos";

const Body = () => {
  useGetVideos();
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
