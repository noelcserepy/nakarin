import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import projectData from "../../components/Work/projectData";
import Nav from "../../components/Nav/nav";
import MainImage from "../../components/Work/mainImage";
import PrevAndNextImages from "../../components/Work/prevAndNextImages";
import useIndexScroller from "../../hooks/useIndexScroller";
import Button from "../../components/Common/button";
import { useRouter } from "next/router";
import BgGraphic from "./bgGraphic";
import ScrollText from "./scrollText";
import reel from "../../public/graphics/movie_reel.svg";
import carousel from "../../public/graphics/carousel.svg";
import Curtain from "../Common/curtain";

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
    x: -10,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1.5,
      duration: 0.5,
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.14,
      ease: "easeOut",
    },
  },
  next: {
    opacity: 0,
    x: -10,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

function ProjectSelect({
  segment,
  initialIndex = 0,
  setInitialIndex,
}: {
  segment: string;
  initialIndex: number;
  setInitialIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
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
    setInitialIndex(currentIndex);
    const nextSequence = async () => {
      await controls.start("next");
      setCurrentProject(projectData[currentIndex]);
      await controls.start("visible");
    };

    nextSequence();
  }, [currentIndex]);

  // Animate in on load
  useEffect(() => {
    controls.start("enter");
  }, []);

  // Prefetch project detail pages
  useEffect(() => {
    router.prefetch(`/${segment}/${currentProject.slug}`);
  }, [currentProject]);

  return (
    <div className="bg-dark text-light h-screen w-screen overflow-hidden z-0 flex relative justify-center p-8">
      <Nav />
      <Curtain />
      <BgGraphic
        totalScroll={totalScroll}
        graphic={segment === "photo" ? carousel : reel}
      />

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
              onClick={() => router.push(`/${segment}/${currentProject.slug}`)}
            />
          </div>
        </motion.div>

        <div className="h-full w-6/12 flex items-center justify-end pl-8 relative">
          <MainImage
            project={currentProject}
            currentIndex={currentIndex}
            handleClick={() =>
              router.push(`/${segment}/${currentProject.slug}`)
            }
          />
          <PrevAndNextImages
            projectData={projectData}
            currentIndex={currentIndex}
          />
        </div>
        <ScrollText currentIndex={currentIndex} />
      </motion.div>
    </div>
  );
}

export default ProjectSelect;
