import Image from "next/image";
import movieReel from "../../public/movie_reel.svg";
import carousel from "../../public/carousel.svg";
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

const reelVariants = {
  initial: {
    x: "100%",
  },
  inView: {
    x: 0,
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
        {/* <motion.div className="w-screen h-full overflow-clip flex justify-end absolute -translate-x-1/2">
          <motion.div className="h-full w-full" variants={reelVariants}>
            <Image
              alt="Movie reel illustration."
              src={movieReel}
              className="h-full w-full translate-x-1/2"
            />
          </motion.div>
          <h3 className="font-extrabold text-6xl text-light absolute top-1/2 right-1/4 -translate-y-1/2 -translate-x-1/2">
            Video
          </h3>
        </motion.div> */}

        <motion.div
          className="h-full w-0 border-l-2 border-beige absolute left-1/2 "
          variants={lineVariants}
        />

        <Carousel />

        {/* <div className="w-screen h-full overflow-clip absolute translate-x-1/2">
          <Image
            alt="Dia show carousel illustration."
            src={carousel}
            className="h-full -translate-x-1/2"
          />
          <h3 className="font-extrabold text-6xl text-light absolute top-1/2 left-1/4 -translate-y-1/2 translate-x-1/2">
            Photo
          </h3>
        </div> */}
      </motion.div>
    </div>
  );
}

export default Projects;
