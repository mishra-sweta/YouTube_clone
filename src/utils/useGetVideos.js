import { useEffect } from "react";
import { YOUTUBE_MOST_POPULAR_API } from "./constants";
import { addVideosInfo } from "./videosSlice";
import { useDispatch } from "react-redux";

const useGetVideos = () => {
  const dispatch = useDispatch();

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_MOST_POPULAR_API);
    const json = await data.json();
    dispatch(addVideosInfo(json.items));
  };

  useEffect(() => {
    fetchVideos();
  }, []);
};

export default useGetVideos;
