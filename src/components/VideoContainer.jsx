import React from "react";
import { YOUTUBE_MOST_POPULAR_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import useGetVideos from "../utils/useGetVideos";

const VideoContainer = () => {
  useGetVideos();
  const videos = useSelector((store) => store.videos.videos);

  return (
    <div className="flex flex-wrap m-2">
      {videos.map((video) => (
        <VideoCard info={video} key={video.id} />
      ))}
    </div>
  );
};

export default VideoContainer;
