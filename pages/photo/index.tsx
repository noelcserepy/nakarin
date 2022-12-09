import Button from "../../components/Common/button";
import Image from "next/image";
import arrowDown from "../../public/graphics/arrow_down.svg";
import arrowUp from "../../public/graphics/arrow_up.svg";
import projectData from "../../components/Work/projectData";
import useIndexScroller from "../../hooks/useIndexScroller";
import PrevAndNextImages from "../../components/Work/prevAndNextImages";
import BgCarousel from "../../components/Work/bgCarousel";
import MainImage from "../../components/Work/mainImage";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import Nav from "../../components/Nav/nav";

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
      delay: 0.3,
      duration: 0.14,
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

  const controls = useAnimationControls();

  useEffect(() => {
    const nextSequence = async () => {
      await controls.start("next");
      setCurrentProject(projectData[currentIndex]);
      await controls.start("visible");
    };

    nextSequence();
  }, [currentIndex]);

  return (
    <div className="bg-dark text-light h-screen w-screen overflow-hidden z-0 flex relative justify-center p-8">
      <Nav />

      <BgCarousel totalScroll={totalScroll} />

      <motion.div
        className="h-full w-full max-w-[100rem] flex items-center justify-between"
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
              <h2 className="text-title">{currentProject.name}</h2>
            </div>
            <Button shade="lightFull" size="small" text="Explore" />
          </div>
        </motion.div>

        <div className="h-full w-6/12 flex items-center justify-end pl-8 relative">
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
