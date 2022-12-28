import React from "react";

type VideoIndexContextType = {
  videoIndex: number;
  setVideoIndex: React.Dispatch<React.SetStateAction<number>>;
};

const VideoIndexContext = React.createContext<VideoIndexContextType>({
  videoIndex: 0,
  setVideoIndex: () => {},
});

export default VideoIndexContext;
