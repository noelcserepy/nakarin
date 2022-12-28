import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import movieReel from "../../public/graphics/movie_reel.svg";
import carousel from "../../public/graphics/carousel.svg";
import { useEffect, useState } from "react";
import ProjectSelectContainer from "./projectSelectContainer";
import RotationContainer from "./rotationContainer";
import { useRouter } from "next/router";
import Image from "next/image";

const lineVariants = {
  initial: {
    height: 0,
  },
};

const textVariantsLeft = {
  initial: {
    opacity: 0.2,
    x: 5,
  },
  hover: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const textVariantsRight = {
  initial: {
    opacity: 0.2,
    x: -5,
  },
  hover: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
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

  const router = useRouter();

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

  function photoClickHandler(): void {
    router.push("/photo", undefined, { scroll: true });
  }
  function videoClickHandler(): void {
    router.push("/video", undefined, { scroll: true });
  }

  useEffect(() => {
    router.prefetch("/photo");
    router.prefetch("/video");
  }, []);

  return (
    <motion.div className="flex justify-center items-center">
      <motion.div
        className="w-screen h-[90vh] relative"
        initial="inView"
        viewport={{ amount: 0.5 }}
      >
        <ProjectSelectContainer
          left={true}
          setHoverLeft={setHoverLeft}
          setHoverRight={setHoverRight}
          centerLine={centerLine}
          handleClick={videoClickHandler}
        >
          <motion.h3
            className="absolute z-20 text-title left-24"
            variants={textVariantsLeft}
          >
            Video
          </motion.h3>
          <RotationContainer left={true}>
            <Image src={movieReel} alt="Movie Reel graphic" />
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
          handleClick={photoClickHandler}
        >
          <motion.h3
            className="absolute z-20 text-title -translate-y-50% right-24"
            variants={textVariantsRight}
          >
            Photo
          </motion.h3>
          <RotationContainer left={false}>
            <Image src={carousel} alt="Slide show carousel graphic" />
          </RotationContainer>
        </ProjectSelectContainer>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
