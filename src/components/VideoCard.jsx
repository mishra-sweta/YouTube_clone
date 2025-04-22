import React from "react";
import useGetChannelLogo from "../utils/useGetChannelLogo";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  const { thumbnails, title, channelTitle, channelId } = info.snippet;
  const logoUrl = useGetChannelLogo(channelId);
  return (
    <Link to={"/watch?v=" + info.id}>
      <div className="w-80 m-3 shadow-xl p-2 rounded">
        <img className="rounded" alt="thumbmail" src={thumbnails.medium.url} />
        <div className="flex">
          <img
            alt="Channel Logo"
            src={logoUrl}
            className="w-8 h-8 m-2 mr-4 rounded-full"
          />

          <div>
            <h1 className="text-base line-clamp-2 font-bold">{title}</h1>
            <p className="text-sm line-clamp-2 s">{channelTitle}</p>
            <p className="text-sm line-clamp-2 s">
              {Math.floor(info.statistics.viewCount / 1000)}K views
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
