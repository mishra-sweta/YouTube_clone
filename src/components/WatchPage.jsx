import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSidebar } from "../utils/appSlice";
import useGetChannelLogo from "../utils/useGetChannelLogo";

const Watchpage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeSidebar());
  }, [dispatch]);

  const videoDetails = useSelector((store) =>
    store.videos.videosArray.find((v) => v.id === videoId)
  );

  const channelDetail = useGetChannelLogo(videoDetails?.snippet?.channelId);

  if (!videoDetails) return <div className="p-4">Loading video details...</div>;

  const { snippet } = videoDetails;
  const { title, channelTitle } = snippet;
  const subscribers = channelDetail?.[0]?.statistics?.subscriberCount;

  return (
    <div className="grid grid-cols-12 gap-4 mx-4">
      {/* Left Side - Video and Info */}
      <div className="col-span-7 ml-20">
        {/* 16:9 Video Container */}
        <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden ">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <h1 className="text-xl font-bold mt-4">{title}</h1>

        {/* Channel Info */}
        <div className="flex items-center mt-4">
          <img
            alt="Channel Logo"
            src={channelDetail?.[0]?.snippet?.thumbnails?.default?.url}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <p className="font-medium text-base">{channelTitle}</p>
            <p className="text-sm text-gray-600">
              {subscribers
                ? `${Math.floor(subscribers / 1000000)}M subscribers`
                : ""}
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Suggestions */}
      <div className="col-span-5">
        <h2 className="text-lg font-semibold mb-2">Suggestions</h2>
        {/* Add suggestion cards here */}
      </div>
    </div>
  );
};

export default Watchpage;
