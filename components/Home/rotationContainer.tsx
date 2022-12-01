import React from "react";
import { motion, MotionValue, useMotionValue } from "framer-motion";

const hoverTransition = {
  rotate: {
    duration: 60,
    repeat: Infinity,
    ease: "linear",
  },
  x: {
    duration: 2,
    delay: 0,
    ease: "easeOut",
  },
};

const inViewTransition = {
  x: {
    duration: 2,
    delay: 0,
    ease: "easeOut",
  },
  rotate: {
    duration: 0.5,
    ease: "easeOut",
  },
};

const leftVariants = {
  initial: {
    x: "100%",
  },
  inView: (i: MotionValue) => ({
    x: "-50%",
    rotate: i.get() - 1,
    transition: inViewTransition,
  }),

  hover: (i: MotionValue) => ({
    rotate: i.get() - 360,
    x: "-50%",
    transition: hoverTransition,
  }),
};

const rightVariants = {
  initial: {
    x: "-100%",
  },
  inView: (i: MotionValue) => ({
    x: "50%",
    rotate: i.get() + 1,
    transition: inViewTransition,
  }),
  hover: (i: MotionValue) => ({
    rotate: i.get() + 360,
    x: "50%",
    transition: hoverTransition,
  }),
};

function RotationContainer({
  children,
  left,
}: {
  children: React.ReactNode;
  left: boolean;
}) {
  const rot = useMotionValue(0);

  return (
    <motion.div
      className={`h-full aspect-square absolute top-0 ${
        left ? "left-full" : "right-full"
      }`}
      variants={left ? leftVariants : rightVariants}
      custom={rot}
      style={{ originX: 0.5, originY: 0.5, rotate: rot }}
    >
      {children}
    </motion.div>
  );
}

export default RotationContainer;
