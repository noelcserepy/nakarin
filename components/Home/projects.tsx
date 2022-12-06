import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import MovieReel from "./movieReel";
import Carousel from "./carousel";
import { useEffect, useState } from "react";
import ProjectSelectContainer from "./projectSelectContainer";
import RotationContainer from "./rotationContainer";

const lineVariants = {
  initial: {
    height: 0,
  },
  inView: {
    height: "100%",
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const textVariantsLeft = {
  initial: {
    opacity: 0,
    x: 5,
  },
  hover: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const textVariantsRight = {
  initial: {
    opacity: 0,
    x: -5,
  },
  hover: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const centerLineTransition = {
  duration: 0.4,
  bounce: 0.3,
};

function Projects() {
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  const centerLine = useMotionValue(50);
  const centerLinePercent = useMotionTemplate`${centerLine}%`;

  useEffect(() => {
    if (hoverLeft) {
      animate(centerLine, 55, centerLineTransition);
    }
    if (hoverRight) {
      animate(centerLine, 45, centerLineTransition);
    }
    if (!hoverRight && !hoverLeft) {
      animate(centerLine, 50, centerLineTransition);
    }
    if (hoverRight && hoverLeft) {
      animate(centerLine, 50, centerLineTransition);
    }
  }, [hoverLeft, hoverRight]);

  return (
    <motion.div className="flex justify-center items-center">
      <motion.div
        className="w-screen h-[90vh] relative"
        initial="initial"
        whileInView="inView"
        viewport={{ amount: 0.5 }}
      >
        <ProjectSelectContainer
          left={true}
          setHoverLeft={setHoverLeft}
          setHoverRight={setHoverRight}
          centerLine={centerLine}
        >
          <motion.h3
            className="absolute z-20 text-light font-switzer font-extrabold text-5xl top-1/2 -translate-y-1/2 left-24"
            variants={textVariantsLeft}
          >
            Video
          </motion.h3>
          <RotationContainer left={true}>
            <MovieReel />
          </RotationContainer>
        </ProjectSelectContainer>

        <motion.div
          className={`h-full w-0 border-l-2 border-beige absolute -translate-x-1/2 z-20`}
          variants={lineVariants}
          style={{
            left: centerLinePercent,
          }}
        />

        <ProjectSelectContainer
          left={false}
          setHoverLeft={setHoverLeft}
          setHoverRight={setHoverRight}
          centerLine={centerLine}
        >
          <motion.h3
            className="absolute z-20 text-light font-switzer font-extrabold text-5xl top-1/2 -translate-y-full right-24"
            variants={textVariantsRight}
          >
            Photo
          </motion.h3>
          <RotationContainer left={false}>
            <Carousel />
          </RotationContainer>
        </ProjectSelectContainer>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
