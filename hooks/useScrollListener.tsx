import { useEffect, useRef, useState } from "react";

// react hook that detects if user is scrolling up or down and returns two values: goingUp and goingDown. Using wheel event listener.
function useScrollListener() {
  const [goingUp, setGoingUp] = useState(false);
  const [goingDown, setGoingDown] = useState(false);

  useEffect(() => {
    function handleScroll(e: WheelEvent) {
      console.log(e.deltaY);
      const deltaY = e.deltaY;
      if (deltaY < 0) {
        setGoingDown(true);
      }
      if (deltaY > 0) {
        setGoingDown(true);
      }
      setGoingDown(false);
      setGoingUp(false);
      // const timer = setTimeout(() => {
      // }, 200);
    }

    window.addEventListener("wheel", handleScroll, { passive: true });

    return () => {
      // clearTimeout(timer);
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return { goingUp, goingDown };
}

export default useScrollListener;
