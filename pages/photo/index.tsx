import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import projectData from "../../components/Work/projectData";
import Nav from "../../components/Nav/nav";
import MainImage from "../../components/Work/mainImage";
import PrevAndNextImages from "../../components/Work/prevAndNextImages";
import BgCarousel from "../../components/Work/bgCarousel";
import useIndexScroller from "../../hooks/useIndexScroller";
import Button from "../../components/Common/button";
import arrowDown from "../../public/graphics/arrow_down.svg";
import arrowUp from "../../public/graphics/arrow_up.svg";
import { useRouter } from "next/router";
import PhotoIndexContext from "../../components/Common/photoIndexContext";

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
  const { photoIndex, setPhotoIndex } = useContext(PhotoIndexContext);
  const [currentIndex, setCurrentIndex] = useState(photoIndex);
  const router = useRouter();

  const { totalScroll } = useIndexScroller(
    projectData.length - 1,
    currentIndex,
    setCurrentIndex
  );
  const [currentProject, setCurrentProject] = useState(
    projectData[currentIndex]
  );

  const controls = useAnimationControls();

  // Change project on scroll
  useEffect(() => {
    const nextSequence = async () => {
      await controls.start("next");
      setCurrentProject(projectData[currentIndex]);
      await controls.start("visible");
    };

    nextSequence();
  }, [currentIndex]);

  // Prefetch project detail pages
  useEffect(() => {
    router.prefetch(`/photo/${currentProject.slug}`);
  }, [currentProject]);

  const handleClick = () => {
    setPhotoIndex(currentIndex);
    router.push(`/photo/${currentProject.slug}`);
  };

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
              <p className="text-subtitle">
                <span>{currentProject.yearStart}</span>{" "}
                <span>{currentProject.location}</span>
              </p>
              <h2 className="text-title">{currentProject.name}</h2>
            </div>
            <Button
              shade="lightFull"
              size="small"
              text="Explore"
              onClick={() => router.push(`/photo/${currentProject.slug}`)}
            />
          </div>
        </motion.div>

        <div className="h-full w-6/12 flex items-center justify-end pl-8 relative">
          <MainImage
            project={currentProject}
            currentIndex={currentIndex}
            handleClick={() => router.push(`/photo/${currentProject.slug}`)}
          />
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
