import Image from "next/image";
import arrowDown from "../../public/graphics/arrow_down.svg";
import arrowUp from "../../public/graphics/arrow_up.svg";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      delay: 3,
      duration: 0.5,
    },
  },
};

const scrollTextVariants = {
  hidden: {
    opacity: 0,
    x: 10,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 3,
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: 10,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  next: {
    y: [0, 10, 0],
    transition: {
      duration: 0.4,
      ease: ["easeIn", "easeOut"],
      times: [0, 0.2, 1],
    },
  },
  prev: {
    y: [0, -10, 0],
    transition: {
      duration: 0.4,
      ease: ["easeIn", "easeOut"],
      times: [0, 0.2, 1],
    },
  },
};

function ScrollText({ currentIndex }: { currentIndex: number }) {
  const controls = useAnimationControls();
  const prevIndex = useRef(currentIndex);

  useEffect(() => {
    if (currentIndex > prevIndex.current) {
      controls.start("next");
    } else if (currentIndex < prevIndex.current) {
      controls.start("prev");
    }
    prevIndex.current = currentIndex;
  }, [currentIndex]);

  return (
    <motion.div
      className="right-8 w-min flex flex-col justify-center items-center space-y-4"
      variants={containerVariants}
    >
      <Image src={arrowUp} alt="arrowUp" />
      <motion.p animate={controls} variants={scrollTextVariants}>
        Scroll
      </motion.p>
      <Image src={arrowDown} alt="arrowDown" />
    </motion.div>
  );
}

export default ScrollText;
