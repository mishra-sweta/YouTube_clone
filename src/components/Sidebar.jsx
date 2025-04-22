import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const toggleSidebar = useSelector((store) => store.app.sidebar);

  //early retun
  if (!toggleSidebar) return null;
  return (
    <div className="w-48 p-5 shadow-lg">
      <div>
        <ul className="text-lg">
          <li>Home</li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
        <div className="pt-5">
          <h1 className="font-bold text-lg">You</h1>
          <ul className="text-lg">
            <li>History</li>
            <li>Playlists</li>
            <li>Your Videos</li>
            <li>Watch Later</li>
          </ul>
        </div>
        <div className="pt-5">
          <h1 className="font-bold text-lg">Subscriptions</h1>
          <ul className="text-lg">
            <li>Music</li>
            <li>Movies</li>
            <li>Workout</li>
            <li>Podcasts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
