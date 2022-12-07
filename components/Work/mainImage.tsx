import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";

const imageVariants = {
  hidden: {
    opacity: 0,
    transition: {},
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0,
      ease: "easeInOut",
    },
  },
};

const shutterVariants = {
  hidden: {
    background: "linear-gradient(0deg, rgba(0, 0, 0, 0) -100%, #090B0C 0%)",
    transition: {
      duration: 0.06,
      ease: "linear",
    },
  },
  next: {
    background: "linear-gradient(0deg, rgba(0, 0, 0, 0) -100%, #090B0C 0%)",
    transition: {
      duration: 0.06,
      ease: "linear",
    },
  },
  prev: {
    background: "linear-gradient(0deg, rgba(0, 0, 0, 0) -100%, #090B0C 0%)",
    transition: {
      duration: 0.06,
      ease: "linear",
    },
  },
  visible: {
    background: "linear-gradient(0deg, rgba(0, 0, 0, 0) 100%, #090B0C 200%)",
    transition: {
      delay: 0.3,
      duration: 0.06,
      ease: "linear",
    },
  },
};

function MainImage({
  project,
  currentIndex,
}: {
  project: any;
  currentIndex: number;
}) {
  useEffect(() => {}, [currentIndex]);
  return (
    <motion.div
      className="aspect-3/2 w-full relative flex items-center overflow-clip"
      variants={imageVariants}
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
