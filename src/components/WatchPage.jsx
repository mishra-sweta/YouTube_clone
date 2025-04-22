import React from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSidebar } from "../utils/appSlice";

const Watchpage = () => {
  const dispatch = useDispatch();
  dispatch(closeSidebar());
  const [searchParamss] = useSearchParams();
  console.log(searchParamss.get("v"));

  return (
    <div className="grid grid-cols-12 m-2 p-2 w-full h-full">
      <div className="col-span-7 relative pb-[56.25%]">
        {" "}
        {/* 16:9 aspect ratio */}
        <iframe
          className="absolute top-0 left-0 w-full rounded-lg h-full p-2 "
          style={{ borderRadius: "20px" }}
          src={"https://www.youtube.com/embed/" + searchParamss.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="col-span-5">
        <h1>Suggestions</h1>
      </div>
    </div>
  );
};

export default Watchpage;
