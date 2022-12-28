import { useContext } from "react";
import ProjectSelect from "../../components/Work/projectSelect";
import VideoIndexContext from "../../components/Common/videoIndexContext";

function Video() {
  const { videoIndex, setVideoIndex } = useContext(VideoIndexContext);

  return (
    <ProjectSelect
      segment="video"
      initialIndex={videoIndex}
      setInitialIndex={setVideoIndex}
    />
  );
}

export default Video;
