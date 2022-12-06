import { useEffect, useState } from "react";

// react hook that detects if user is scrolling up or down and returns two values: goingUp and goingDown. Using wheel event listener.
function useIndexScroller(startIndex: number, maxIndex: number) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  console.log("MaxIndex" + maxIndex);

  useEffect(() => {
    function handleScroll(e: WheelEvent) {
      if (e.deltaY > 0) {
        if (currentIndex + 1 > maxIndex) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
          console.log("currentIndex" + currentIndex);
        }
      }
      if (e.deltaY < 0) {
        if (currentIndex - 1 < 0) {
          setCurrentIndex(maxIndex);
        } else {
          setCurrentIndex(currentIndex - 1);
        }
      }
    }

    console.log(currentIndex);
    window.addEventListener("wheel", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return { currentIndex, setCurrentIndex };
}

export default useIndexScroller;
