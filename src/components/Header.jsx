import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow">
      <div className="flex col-span-1">
        <img
          alt="menu"
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ByNBMPtR-zoe5ktzRUPfwoAvTC26ZwH66FTiU8ENgVRx6TywoA&s=10&ec=72940545"
        />
        <img
          alt="yt-logo"
          className="h-8"
          src="https://www.cdnlogo.com/logos/y/73/youtube.svg"
        />
      </div>
      <div className="col-span-10 flex">
        <input
          type="text"
          className="text-lg w-1/2 border-gray-700 border rounded-l-full"
          placeholder="Search"
        />
        <button className="text-lg border-gray-700 border rounded-r-full px-2">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
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
