import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const imageVariants: any = {
  hidden: {
    opacity: 0,
    transition: { duration: 0 },
  },
  isCurrent: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  isPrevious: {
    opacity: 1,
    position: "absolute",
    rotate: 30,
    scale: 1,
    zIndex: -1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  isNext: {
    opacity: 1,
    position: "absolute",
    rotate: -30,
    scale: 1,
    zIndex: -1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  isUpcoming: {
    rotate: 60,
    zIndex: -2,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  isPassed: {
    rotate: -60,
    zIndex: -2,
    transition: { duration: 0.5, ease: "easeOut" },
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
  i,
}: {
  currentIndex?: number;
  maxIndex?: number;
  project: any;
  i: number;
}) {
  const [activeVariant, setactiveVariant] = useState("hidden");
  const controls = useAnimationControls();

  // An array of indexes between 0 and maxIndex
  const indexArray = Array.from(Array(maxIndex + 1).keys());

  // A function that returns the correct index based on the current index and the distance
  const getIndexAt = (distance: number) => {
    const added = currentIndex + distance;
    if (added > maxIndex) {
      return added % maxIndex;
    } else if (added < 0) {
      return maxIndex + added + 1;
    }
    return added;
  };

  // A function that returns the correct variant based on the current index
  const getCurrentVariant = () => {
    if (i === currentIndex) {
      return "isCurrent";
    } else if (i === indexArray[getIndexAt(-1)]) {
      return "isPrevious";
    } else if (i === indexArray[getIndexAt(1)]) {
      return "isNext";
    }
    // else if (i === indexArray[getIndexAt(2)]) {
    //   return "isUpcoming";
    // } else if (i === indexArray[getIndexAt(-2)]) {
    //   return "isPassed";
    // }
    else {
      return "hidden";
    }
  };

  useEffect(() => {
    const currentVariant = getCurrentVariant();

    if (currentVariant === "isCurrent") {
      console.log("isCurrent " + i);
      controls.start("isCurrent");
      setactiveVariant("isCurrent");
      return;
    }

    if (activeVariant === "isCurrent") {
      if (currentVariant === "isPrevious") {
        controls.start("isPrevious");
        setactiveVariant("isPrevious");
        return;
      }
      if (currentVariant === "isNext") {
        controls.start("isNext");
        setactiveVariant("isNext");
        return;
      }
    }

    if (activeVariant === "hidden") {
      if (currentVariant === "isPrevious") {
        controls.set("isPassed");
        controls.start("isPrevious");
        setactiveVariant("isPrevious");
        return;
      }
      if (currentVariant === "isNext") {
        controls.set("isUpcoming");
        controls.start("isNext");
        setactiveVariant("isNext");
        return;
      }
    }

    if (activeVariant === "isPrevious" || activeVariant === "isNext") {
      if (currentVariant === "hidden") {
        controls.start("hidden");
        setactiveVariant("hidden");
        return;
      }
    }
  }, [currentIndex]);

  return (
    <motion.div
      className="h-[400px] w-[600px] relative flex items-center overflow-clip"
      style={{ originX: -1.5, originY: 0.5 }}
      variants={imageVariants}
      animate={controls}
    >
      <Image
        src={project.thumbnail}
        alt={project.name}
        fill
        style={{ objectFit: "cover" }}
      />
      {/* <motion.div
        className="absolute top-0 left-0 bottom-0 right-0 bg-vignette"
        variants={vignetteVariants}
        animate={getCurrentVariant()}
      /> */}
    </motion.div>
  );
}

export default ProjectImage;
