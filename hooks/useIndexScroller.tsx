import { useMotionValue } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import _ from "lodash";

function useIndexScroller(
  maxIndex: number,
  currentIndex: number,
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
) {
  const ready = useRef(true);

  const indexRef = useRef(currentIndex);
  const totalScroll = useMotionValue(0);

  const resetReady = () => {
    ready.current = true;
  };

  const debouncedResetReady = useCallback(_.debounce(resetReady, 700), []);

  useEffect(() => {
    function handleScroll(e: WheelEvent) {
      if (!ready.current) {
        return;
      }
      ready.current = false;
      debouncedResetReady();
      if (e.deltaY > 0) {
        totalScroll.set(totalScroll.get() + 1);
        if (indexRef.current === maxIndex) {
          indexRef.current = 0;
        } else {
          indexRef.current += 1;
        }
      }
      if (e.deltaY < 0) {
        totalScroll.set(totalScroll.get() - 1);
        if (indexRef.current - 1 < 0) {
          indexRef.current = maxIndex;
        } else {
          indexRef.current -= 1;
        }
      }
      setCurrentIndex(indexRef.current);
      console.log(indexRef.current);
    }

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return { totalScroll };
}

export default useIndexScroller;
