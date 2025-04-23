import { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_API } from "./constants";

const useGetChannelDetails = (channelId) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const getChannelData = async () => {
      try {
        const data = await fetch(
          `${YOUTUBE_CHANNEL_API}${channelId}&part=snippet&key=${
            import.meta.env.VITE_YOUTUBE_API_KEY
          }`
        );
        const json = await data.json();
        const channelData = json?.items;

        setDetails(channelData);
      } catch (err) {
        console.error("Error fetching channel logo", err);
      }
    };

    if (channelId) {
      getChannelData();
    }
  }, [channelId]);

  return details;
};

export default useGetChannelDetails;
