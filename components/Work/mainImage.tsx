import Image from "next/image";
import { motion } from "framer-motion";
import { MouseEventHandler, useEffect } from "react";

const shutterVariants = {
  hidden: {
    background: "linear-gradient(0deg, rgba(0, 0, 0, 0) -199%, #090B0C 0%)",
    transition: {
      duration: 0.14,
      ease: "linear",
    },
  },
  enter: {
    background: "linear-gradient(0deg, rgba(0, 0, 0, 0) 199%, #090B0C 200%)",
    transition: {
      delay: 1,
      duration: 0.14,
      ease: "linear",
    },
  },
  visible: {
    background: "linear-gradient(0deg, rgba(0, 0, 0, 0) 199%, #090B0C 200%)",
    transition: {
      delay: 0.3,
      duration: 0.14,
      ease: "linear",
    },
  },
  next: {
    background: "linear-gradient(0deg, rgba(0, 0, 0, 0) -199%, #090B0C 0%)",
    transition: {
      duration: 0.14,
      ease: "linear",
    },
  },
};

function MainImage({
  project,
  currentIndex,
  handleClick,
}: {
  project: any;
  currentIndex: number;
  handleClick: MouseEventHandler<HTMLDivElement>;
}) {
  useEffect(() => {}, [currentIndex]);

  return (
    <motion.div
      className="aspect-3/2 w-full relative flex items-center overflow-clip cursor-pointer"
      onClick={handleClick}
    >
      <Image
        src={project.thumbnail}
        alt={project.name}
        fill
        style={{ objectFit: "cover" }}
      />
      <motion.div
        className="absolute top-0 left-0 bottom-0 right-0 bg-vignette"
        variants={shutterVariants}
      />
    </motion.div>
  );
}

export default MainImage;
