import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import { useSelector, useDispatch } from "react-redux";
import { openSidebar } from "../utils/appSlice";

const VideoContainer = () => {
  const videos = useSelector((store) => store.videos.videosArray);
  const keywordVideos = useSelector((store) => store.videos.keywordVideos);
  const searchResults = useSelector((store) => store.app.searchResults);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openSidebar());
  }, []);

  return (
    <div className="flex flex-wrap m-auto">
      {searchResults
        ? keywordVideos.map((video, index) => (
            <VideoCard info={video} key={video?.id?.videoId} index={index} />
          ))
        : videos.map((video, index) => (
            <VideoCard info={video} key={video.id} index={index} />
          ))}
    </div>
  );
};

export default VideoContainer;
