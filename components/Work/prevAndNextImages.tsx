import { motion } from "framer-motion";
import Image from "next/image";

const upcomingVariants = {
  hidden: {
    opacity: 0,
    zIndex: -20,
    x: -600,
    top: "-112px",
    width: "56px",
  },

  current: {
    opacity: 0,
    width: "70%",
    transition: {
      opacity: {
        duration: 0.05,
      },
    },
  },

  next: {
    opacity: 1,
    x: -250,
    top: "-48px",
  },

  upcoming: {
    opacity: 1,
    zIndex: -20,
    x: -400,
    top: "-80px",
    width: "128px",
  },
};

const passedVariants = {
  hidden: {
    opacity: 0,
    zIndex: -20,
    x: -600,
    bottom: "-112px",
    width: "56px",
  },

  current: {
    opacity: 0,
    width: "70%",
    transition: {
      opacity: {
        duration: 0.05,
      },
    },
  },

  previous: {
    opacity: 0.5,
    x: -250,
    bottom: "-48px",
  },

  passed: {
    opacity: 0.5,
    zIndex: -20,
    x: -400,
    bottom: "-80px",
    width: "128px",
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
  const indexArray = Array.from(Array(maxIndex + 1).keys());

  // A function that returns the correct index based on the current index and the distance
  const getIndexAt = (distance: number) => {
    const added = currentIndex + distance;
    if (added > maxIndex) {
      return (added % maxIndex) - 1;
    } else if (added < 0) {
      return maxIndex + added + 1;
    }
    return added;
  };

  const getUpcomingVariant = (i: number) => {
    if (i === currentIndex) {
      return "current";
    }
    if (i === indexArray[getIndexAt(1)]) {
      return "next";
    }
    if (i === indexArray[getIndexAt(2)]) {
      return "upcoming";
    }
    return "hidden";
  };

  const getPassedVariant = (i: number) => {
    if (i === currentIndex) {
      return "current";
    }
    if (i === indexArray[getIndexAt(-1)]) {
      return "previous";
    }
    if (i === indexArray[getIndexAt(-2)]) {
      return "passed";
    }
    return "hidden";
  };

  const transition = {
    delay: 0.25,
    duration: 0.3,
    ease: "easeIn",
  };

  return (
    <motion.div
      className="h-full w-full absolute flex flex-col justify-center items-center -z-10"
      initial="hidden"
      animate="visible"
    >
      {projectData.map((project: any, i: number) => (
        <motion.div
          className="absolute aspect-3/2 w-72"
          key={i}
          variants={upcomingVariants}
          animate={getUpcomingVariant(i)}
          transition={transition}
        >
          <Image
            src={project.thumbnail}
            alt={project.name}
            fill
            style={{ objectFit: "cover" }}
          />
          <motion.div className="absolute top-0 left-0 bottom-0 right-0 bg-vignette " />
          <motion.div className="absolute top-0 left-0 bottom-0 right-0 bg-dark opacity-90" />
        </motion.div>
      ))}
      {projectData.map((project: any, i: number) => (
        <motion.div
          className="absolute aspect-3/2 w-72"
          key={i}
          variants={passedVariants}
          animate={getPassedVariant(i)}
          transition={transition}
        >
          <Image
            src={project.thumbnail}
            alt={project.name}
            fill
            style={{ objectFit: "cover" }}
          />
          <motion.div className="absolute top-0 left-0 bottom-0 right-0 bg-vignette" />
          <motion.div className="absolute top-0 left-0 bottom-0 right-0 bg-dark opacity-90" />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default PrevAndNextImages;

{
  /* <div>
        {upComingProjects.map((project: any, i: number) => (
          <motion.div
            className="relative top-0 left-0 aspect-3/2 w-32"
            key={i}
            variants={projectVariants}
            custom={1}
            animate={getVariant(1 - i)}
          >
            <Image
              src={project.thumbnail}
              alt={project.name}
              fill
              style={{ objectFit: "cover" }}
            />

            <motion.div className="absolute top-0 left-0 bottom-0 right-0 bg-vignette " />
          </motion.div>
        ))}
      </div>
      <div>
        {previousProjects.map((project: any, i: number) => (
          <motion.div
            className="relative top-0 left-0 aspect-3/2 w-32"
            key={i}
            variants={projectVariants}
            custom={-1}
            animate={getVariant(i)}
          >
            <Image
              src={project.thumbnail}
              alt={project.name}
              fill
              style={{ objectFit: "cover" }}
            />

            <motion.div className="absolute top-0 left-0 bottom-0 right-0 bg-vignette " />
          </motion.div>
        ))}
      </div> */
}
