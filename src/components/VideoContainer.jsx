import React from "react";
import { YOUTUBE_MOST_POPULAR_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const videos = useSelector((store) => store.videos.videosArray);

  return (
    <div className="flex flex-wrap m-2">
      {videos.map((video, index) => (
        <VideoCard info={video} key={video.id} index={index} />
      ))}
    </div>
  );
};

export default VideoContainer;
