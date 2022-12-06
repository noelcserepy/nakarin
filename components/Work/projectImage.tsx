import Image from "next/image";
import { motion } from "framer-motion";

const imageVariants: any = {
  initial: {
    opacity: "none",
  },
  isCurrent: {
    opacity: 1,
  },
  isPrevious: {
    opacity: 0.9,
    position: "absolute",
    rotate: -30,
    scale: 1,
    zIndex: -1,
  },
  isNext: {
    opacity: 0.9,
    position: "absolute",
    rotate: 30,
    scale: 1,
    zIndex: -11,
  },
  isUpcoming: {
    display: "none",
    rotate: -60,
  },
  isPassed: {
    display: "none",
    rotate: 60,
  },
};

function ProjectImage({
  currentIndex = 0,
  project,
}: {
  currentIndex?: number;
  project: any;
}) {
  const getCurrentVariant = () => {
    if (currentIndex === project.index) {
      return "isCurrent";
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

  return (
    <motion.div
      className="h-[400px] w-[600px] relative flex items-center overflow-clip"
      style={{ originX: -1.5, originY: 0.5 }}
      variants={imageVariants}
      animate={getCurrentVariant()}
    >
      <Image
        src={project.thumbnail}
        alt={project.name}
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-vignette" />
    </motion.div>
  );
}

export default ProjectImage;
