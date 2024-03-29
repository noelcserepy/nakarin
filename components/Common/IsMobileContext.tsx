import React from "react";

type IsMobileContext = {
  isMobile: boolean;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
};

const IsMobileContext = React.createContext<IsMobileContext>({
  isMobile: false,
  setIsMobile: () => {},
});

export default IsMobileContext;
