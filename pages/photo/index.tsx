import { useContext } from "react";
import ProjectSelect from "../../components/Work/projectSelect";
import PhotoIndexContext from "../../components/Common/photoIndexContext";

function Photo() {
  const { photoIndex, setPhotoIndex } = useContext(PhotoIndexContext);

  return (
    <ProjectSelect
      segment="photo"
      initialIndex={photoIndex}
      setInitialIndex={setPhotoIndex}
    />
  );
}

export default Photo;
