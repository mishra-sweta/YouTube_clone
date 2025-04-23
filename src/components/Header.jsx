import React, { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const handleMenuClick = () => {
    dispatch(toggleSidebar());
  };
  const [searchQuery, setSearchQuery] = useState("");

  //debouncing API call made after every 200ms
  // - make an API call after each key press
  // - but if the diff btw two key is <200ms decline the API call

  useEffect(() => {
    const timer = setTimeout(() => fetchSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const fetchSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
  };
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow">
      <div className="flex col-span-1">
        <img
          onClick={handleMenuClick}
          alt="menu"
          className="h-7 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ByNBMPtR-zoe5ktzRUPfwoAvTC26ZwH66FTiU8ENgVRx6TywoA&s=10&ec=72940545"
        />
        <Link to={"/"}>
          <img
            alt="yt-logo"
            className="h-6.5 mx-5"
            src="https://www.cdnlogo.com/logos/y/73/youtube.svg"
          />
        </Link>
      </div>
      <div className="col-span-10 flex">
        <input
          type="text"
          className="px-4 py-1 placeholder-gray-400 text-sm w-1/2 border-gray-400 border rounded-l-full"
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="text-lg border-gray-400 border rounded-r-full px-2 bg-gray-100">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        </button>
      </div>
      <div className="col-span-1">
        <img
          alt="user"
          className="h-8"
          src="https://publicdomainvectors.org/tn_img/abstract-user-flat-4.webp"
        />
      </div>
    </div>
  );
};

export default Header;
