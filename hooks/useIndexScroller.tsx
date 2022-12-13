import { useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

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
      console.log(indexRef.current);
    }

    let timer: NodeJS.Timeout;

    window.addEventListener("wheel", (e) => {
      handleScroll(e);
      timer = setTimeout(() => {
        ready.current = true;
      }, 500);
    });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return { totalScroll };
}

export default useIndexScroller;
