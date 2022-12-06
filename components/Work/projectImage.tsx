import Image from "next/image";
import { motion } from "framer-motion";

const transition = { duration: 0.5, ease: "easeOut" };

const imageVariants: any = {
  initial: {
    opacity: "none",
    transition,
  },
  isCurrent: {
    opacity: 1,
    transition,
  },
  isPrevious: {
    opacity: 1,
    position: "absolute",
    rotate: 30,
    scale: 1,
    zIndex: -1,
    transition,
  },
  isNext: {
    opacity: 1,
    position: "absolute",
    rotate: -30,
    scale: 1,
    zIndex: -11,
    transition,
  },
  isUpcoming: {
    display: "none",
    rotate: 60,
    transition,
  },
  isPassed: {
    display: "none",
    rotate: -60,
    transition,
  },
};

const vignetteVariants: any = {
  initial: {
    opacity: 1,
  },
  isCurrent: {
    opacity: 0,
  },
  isPrevious: {
    opacity: 1,
  },
  isNext: {
    opacity: 1,
  },
  isUpcoming: {
    opacity: 1,
  },
  isPassed: {
    opacity: 1,
  },
};

function ProjectImage({
  currentIndex = 0,
  maxIndex = 0,
  project,
}: {
  currentIndex?: number;
  maxIndex?: number;
  project: any;
}) {
  const getCurrentVariant = () => {
    if (currentIndex === project.index) {
      return "isCurrent";
    } else if (currentIndex === 0 && project.index === maxIndex) {
      return "isNext";
    } else if (currentIndex === 0 && project.index === maxIndex - 1) {
      return "isUpcoming";
    } else if (currentIndex === maxIndex && project.index === 0) {
      return "isPrevious";
    } else if (currentIndex === maxIndex && project.index === 1) {
      return "isPassed";
    } else if (currentIndex === project.index - 1) {
      return "isPrevious";
    } else if (currentIndex === project.index + 1) {
      return "isNext";
    } else if (currentIndex < project.index) {
      return "isUpcoming";
    } else if (currentIndex > project.index) {
      return "isPassed";
    } else {
      return "initial";
    }
  };

  const currentVariant = getCurrentVariant();

  return (
    <motion.div
      className="h-[400px] w-[600px] relative flex items-center overflow-clip"
      style={{ originX: -1.5, originY: 0.5 }}
      variants={imageVariants}
      animate={currentVariant}
    >
      <Image
        src={project.thumbnail}
        alt={project.name}
        fill
        style={{ objectFit: "cover" }}
      />
      <motion.div
        className="absolute top-0 left-0 bottom-0 right-0 bg-vignette"
        variants={vignetteVariants}
        animate={currentVariant}
      />
    </motion.div>
  );
}

export default ProjectImage;
