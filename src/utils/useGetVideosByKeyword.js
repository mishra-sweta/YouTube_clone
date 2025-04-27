// useGetVideosByKeyword.js
import { useEffect } from "react";
import { YOUTUBE_KEYWORD_VIDEO_API } from "./constants";
import { addKeywordVideos } from "./videosSlice";
import { useDispatch } from "react-redux";

const useGetVideosByKeyword = (keyword) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!keyword) return; // Don't make the API call if no keyword is provided
    const fetchVideos = async () => {
      const data = await fetch(
        `${YOUTUBE_KEYWORD_VIDEO_API}${keyword}&key=${
          import.meta.env.VITE_YOUTUBE_API_KEY
        }`
      );
      const json = await data.json();

      dispatch(addKeywordVideos(json.items));
    };

    fetchVideos();
  }, [keyword, dispatch]); // Dependency on keyword to fetch new videos when keyword changes
};

export default useGetVideosByKeyword;
