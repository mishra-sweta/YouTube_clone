import React, { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearchResults, toggleSidebar } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cachedResults } from "../utils/searchSlice";
import useGetVideosByKeyword from "../utils/useGetVideosByKeyword";

const Header = () => {
  const dispatch = useDispatch();
  const handleMenuClick = () => {
    dispatch(toggleSidebar());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [keyword, setKeyword] = useState(null);

  const cacheData = useSelector((store) => store.search);

  // Use the custom hook here, passing keyword directly
  useGetVideosByKeyword(keyword);

  // Debouncing API call made after every 200ms
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheData[searchQuery]) {
        setSearchSuggestions(cacheData[searchQuery]);
      } else {
        fetchSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const fetchSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchSuggestions(json[1]);

    dispatch(
      cachedResults({
        [searchQuery]: json[1],
      })
    );
  };

  const handleSuggestionClick = () => {
    dispatch(toggleSearchResults());
  };
  const handleHomeClick = () => {
    dispatch(toggleSearchResults());
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
            onClick={handleHomeClick}
          />
        </Link>
      </div>
      <div className="col-span-10 relative">
        <div className=" flex">
          <input
            type="text"
            className="px-4 py-1 placeholder-gray-400 text-sm w-1/2 border-gray-400 border rounded-l-full"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
          />
          <button className="text-lg border-gray-400 border rounded-r-full bg-gray-100">
            <MagnifyingGlassIcon className="h-5 w-5 mx-2 text-gray-400" />
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white z-10 w-110 p-2 pt-4 rounded-lg border border-gray-200 shadow-2xl cursor-pointer">
            <ul>
              {searchSuggestions.map((suggestion) => (
                <li
                  className="text-sm p-1 hover:bg-gray-100"
                  key={suggestion}
                  onClick={() => {
                    setKeyword(suggestion);
                    setSearchQuery(suggestion);
                    setShowSuggestions(false);
                    handleSuggestionClick();
                  }}
                >
                  <div className="flex">
                    <MagnifyingGlassIcon className="h-4 w-4 text-gray-400 mr-2 mt-1" />
                    {suggestion}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
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
