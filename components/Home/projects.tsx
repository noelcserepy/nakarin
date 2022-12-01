import { motion } from "framer-motion";
import MovieReel from "./movieReel";
import Carousel from "./carousel";

const lineVariants = {
  initial: {
    height: 0,
  },
  inView: {
    height: "100%",
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

function Projects() {
  return (
    <div className="h-full flex justify-center items-center">
      <motion.div
        className="flex w-screen h-[90vh] relative items-center"
        initial="initial"
        whileInView="inView"
        viewport={{ amount: 0.5 }}
      >
        <MovieReel />

        <motion.div
          className="h-full w-0 border-l-2 border-beige absolute left-1/2 "
          variants={lineVariants}
        />

        <Carousel />
      </motion.div>
    </div>
  );
}

export default Projects;
