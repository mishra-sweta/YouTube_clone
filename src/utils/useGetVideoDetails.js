import { YOUTUBE_VIDEO_API } from "./constants";
import { useEffect, useState } from "react";

const useGetVideoDetails = ({ id }) => {
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(
          `${YOUTUBE_VIDEO_API}${id}&key=${
            import.meta.env.VITE_YOUTUBE_API_KEY
          }`
        );
        const json = await data.json();
        setVideoDetails(json?.items);
        console.log(json);
      } catch (err) {
        console.error("Failed to fetch video details:", err);
      }
    };

    if (id) getData();
  }, [id]);

  return videoDetails;
};

export default useGetVideoDetails;
