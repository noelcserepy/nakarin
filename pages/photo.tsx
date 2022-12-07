import Button from "../components/Common/button";
import Image from "next/image";
import arrowLeft from "../public/graphics/arrow_left.svg";
import arrowDown from "../public/graphics/arrow_down.svg";
import arrowUp from "../public/graphics/arrow_up.svg";
import projectData from "../components/Work/projectData";
import useIndexScroller from "../hooks/useIndexScroller";
import PrevAndNextImages from "../components/Work/prevAndNextImages";
import BgCarousel from "../components/Work/bgCarousel";
import MainImage from "../components/Work/mainImage";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const projectVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  next: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
  prev: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

function Photo() {
  const { currentIndex, totalScroll } = useIndexScroller(
    0,
    projectData.length - 1
  );
  const [currentProject, setCurrentProject] = useState(
    projectData[currentIndex]
  );
  const [laggingIndex, setlaggingIndex] = useState(currentIndex);
  const controls = useAnimationControls();

  useEffect(() => {
    const nextSequence = async () => {
      await controls.start("next");
      controls.set("hidden");
      setCurrentProject(projectData[currentIndex]);
      await controls.start("visible");
    };

    const prevSequence = async () => {
      await controls.start("prev");
      controls.set("next");
      setCurrentProject(projectData[currentIndex]);
      await controls.start("visible");
    };
    if (currentIndex < laggingIndex) {
      prevSequence();
      setlaggingIndex(currentIndex);
    } else {
      nextSequence();
      setlaggingIndex(currentIndex);
    }
  }, [currentIndex]);

  return (
    <div className="bg-dark text-light h-screen w-screen overflow-hidden z-0 flex relative justify-between p-8">
      <BgCarousel totalScroll={totalScroll} />

      <div className="fixed top-8 mx-8 flex items-start">
        <button className="flex items-center space-x-4">
          <Image src={arrowLeft} alt="arrow left" />
          <p>Back</p>
        </button>
      </div>

      <motion.div
        className="h-full w-full flex items-center justify-between"
        variants={projectVariants}
        animate={controls}
        initial="hidden"
      >
        <motion.div
          className="h-full w-5/12 flex flex-col items-start justify-center relative z-10"
          variants={textVariants}
        >
          <div className="w-full flex flex-col justify-between items-start space-y-8">
            <div className="flex flex-col items-start">
              <p>
                <span>{currentProject.yearStart}</span>{" "}
                <span>{currentProject.location}</span>
              </p>
              <h2 className="text-8xl font-extrabold text-start">
                {currentProject.name}
              </h2>
            </div>
            <Button shade="lightFull" size="small" text="Explore" />
          </div>
        </motion.div>

        <div className="h-full w-6/12 flex items-center justify-center px-8 relative">
          <MainImage project={currentProject} currentIndex={currentIndex} />
          <PrevAndNextImages
            projectData={projectData}
            currentIndex={currentIndex}
          />
        </div>
        <div className="right-8 w-min flex flex-col justify-center items-center space-y-4">
          <Image src={arrowUp} alt="arrowUp" />
          <p>Scroll</p>
          <Image src={arrowDown} alt="arrowDown" />
        </div>
      </motion.div>
    </div>
  );
}

export default Photo;
