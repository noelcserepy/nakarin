import { useEffect, useRef, useState } from "react";

function useIndexScroller(startIndex: number, maxIndex: number) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const indexRef = useRef(startIndex);

  useEffect(() => {
    function handleScroll(e: WheelEvent) {
      if (e.deltaY > 0) {
        if (indexRef.current === maxIndex) {
          indexRef.current = 0;
        } else {
          indexRef.current += 1;
        }
      }
      if (e.deltaY < 0) {
        if (indexRef.current - 1 < 0) {
          indexRef.current = maxIndex;
        } else {
          indexRef.current -= 1;
        }
      }
      setCurrentIndex(indexRef.current);
      console.log("currentIndex", indexRef.current);
    }

    window.addEventListener("wheel", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return { currentIndex };
}

export default useIndexScroller;
