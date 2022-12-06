import {
  motion,
  MotionValue,
  useMotionTemplate,
  useTransform,
} from "framer-motion";
import { useState } from "react";

const containerVariants = {
  initial: {
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  hover: {
    transition: {
      duration: 1,
      type: "tween",
      ease: "easeOut",
    },
  },
};

function ProjectSelectContainer({
  children,
  left,
  setHoverLeft,
  setHoverRight,
  centerLine,
}: {
  children?: React.ReactNode;
  left: boolean;
  setHoverLeft?: Function;
  setHoverRight?: Function;
  centerLine: MotionValue;
}) {
  const [enterComplete, setEnterComplete] = useState(false);

  const clipPath = left
    ? useMotionTemplate`polygon(0 0, ${centerLine}% 0, ${centerLine}% 100%, 0% 100%)`
    : useMotionTemplate`polygon(${centerLine}% 0, 100% 0, 100% 100%, ${centerLine}% 100%)`;

  const zIndex = useTransform(centerLine, (c) => {
    if (left && c > 50) {
      return 10;
    }
    if (!left && c < 50) {
      return 10;
    } else {
      return 0;
    }
  });

  const handleMouseEnter = () => {
    if (enterComplete) {
      if (left && setHoverLeft) {
        setHoverLeft(true);
      }
      if (!left && setHoverRight) {
        setHoverRight(true);
      }
    }
  };

  const handleMouseLeave = () => {
    if (enterComplete) {
      if (left && setHoverLeft) {
        setHoverLeft(false);
      }
      if (!left && setHoverRight) {
        setHoverRight(false);
      }
    }
  };

  return (
    <motion.div
      className="h-full w-full absolute cursor-pointer top-0 left-0 flex justify-center items-center "
      variants={containerVariants}
      initial="initial"
      custom={left}
      whileHover={enterComplete ? "hover" : "inView"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileInView="inView"
      onAnimationComplete={() => setEnterComplete(true)}
      onViewportLeave={() => setEnterComplete(false)}
      style={{ clipPath, zIndex }}
    >
      {children}
    </motion.div>
  );
}

export default ProjectSelectContainer;
