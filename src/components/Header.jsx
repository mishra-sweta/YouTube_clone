import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const handleMenuClick = () => {
    dispatch(toggleSidebar());
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
