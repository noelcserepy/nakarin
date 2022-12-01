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
    console.log("Left: " + hoverLeft.toString());
    console.log("Right: " + hoverRight.toString());
    if (hoverLeft) {
      animate(centerLine, 55, centerLineTransition);
    }
    if (hoverRight) {
      animate(centerLine, 45, centerLineTransition);
    }
    if (!hoverRight && !hoverLeft) {
      animate(centerLine, 50, centerLineTransition);
    }
  }, [hoverLeft, hoverRight]);

  return (
    <div className="h-full flex justify-center items-center sticky top-10">
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
          <MovieReel />
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
          <Carousel />
        </ProjectSelectContainer>
      </motion.div>
    </div>
  );
}

export default Projects;
