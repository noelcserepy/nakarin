import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import UpcomingImage from "./upcomingImage";

const prevVariants = {
  hidden: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function PrevAndNextImages({
  projectData,
  currentIndex,
}: {
  projectData: any;
  currentIndex: number;
}) {
  const maxIndex = projectData.length - 1;

  console.log(currentIndex);

  return (
    <motion.div className="h-[250vh] w-full absolute flex flex-col justify-center items-center -z-10 ">
      {projectData.map((project: any, i: number) => (
        <UpcomingImage
          key={i}
          projectIndex={i}
          project={project}
          maxIndex={maxIndex}
          currentIndex={currentIndex}
        />
      ))}
    </motion.div>
  );
}

export default PrevAndNextImages;
