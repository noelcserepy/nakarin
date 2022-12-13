import React from "react";

type PhotoIndexContextType = {
  photoIndex: number;
  setPhotoIndex: React.Dispatch<React.SetStateAction<number>>;
};

const PhotoIndexContext = React.createContext<PhotoIndexContextType>({
  photoIndex: 0,
  setPhotoIndex: () => {},
});

export default PhotoIndexContext;
