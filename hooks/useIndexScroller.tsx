import { useMotionValue } from "framer-motion";
import { read } from "fs";
import { useEffect, useRef, useState } from "react";
import useTimeout from "./useTimeout";

function useIndexScroller(
  maxIndex: number,
  currentIndex: number,
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
) {
  const ready = useRef(true);

  const indexRef = useRef(currentIndex);
  const totalScroll = useMotionValue(0);

  useEffect(() => {
    function handleScroll(e: WheelEvent) {
      if (!ready.current) {
        return;
      }
      ready.current = false;
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
    }

    let timer: NodeJS.Timeout;

    window.addEventListener(
      "wheel",
      (e) => {
        handleScroll(e);
        timer = setTimeout(() => {
          ready.current = true;
        }, 500);
      },
      { passive: true }
    );

    return () => {
      window.removeEventListener("wheel", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return { totalScroll };
}

export default useIndexScroller;
