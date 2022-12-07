import { motion } from "framer-motion";
import Image from "next/image";

const projectVariants = {
  hidden: {
    opacity: 0,
  },
  first: (i: number) => ({
    opacity: 0.5,
    width: "288px",
    x: -100,
    y: -150 * i,
    // rotate: -15 * i,
  }),
  second: (i: number) => ({
    opacity: 0.1,
    x: -300,
    y: -80 * i,
    // rotate: -30 * i,
  }),
};

function PrevAndNextImages({
  projectData,
  currentIndex,
}: {
  projectData: any;
  currentIndex: number;
}) {
  const maxIndex = projectData.length - 1;

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

  const upComingProjects = [
    projectData[getIndexAt(2)],
    projectData[getIndexAt(1)],
  ];
  const previousProjects = [
    projectData[getIndexAt(-1)],
    projectData[getIndexAt(-2)],
  ];

  const getVariant = (i: number) => {
    if (i === 0) {
      return "first";
    } else if (i === 1) {
      return "second";
    } else {
      return "hidden";
    }
  };

  return (
    <div className="h-full w-full absolute flex flex-col justify-between items-center -z-10">
      <div>
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
      </div>
    </div>
  );
}

export default PrevAndNextImages;
