import Carousel from "../components/Home/carousel";
import { motion } from "framer-motion";
import Button from "../components/Common/button";
import Image from "next/image";
import arrowLeft from "../public/graphics/arrow_left.svg";
import arrowDown from "../public/graphics/arrow_down.svg";
import arrowUp from "../public/graphics/arrow_up.svg";
import ProjectImage from "../components/Work/projectImage";
import projectData from "../components/Work/projectData";
import useScrollListener from "../hooks/useScrollListener";
import useIndexScroller from "../hooks/useIndexScroller";

function Photo() {
  const { currentIndex, setCurrentIndex } = useIndexScroller(
    0,
    projectData.length - 1
  );
  const { goingUp, goingDown } = useScrollListener();

  return (
    <div className="bg-dark text-light h-screen w-screen overflow-hidden z-0 flex relative justify-between">
      <motion.div className="absolute top-1/2 [&>*]:h-[140vh] [&>*]:opacity-20 -translate-x-1/2 -translate-y-1/2 z-0">
        <Carousel />
      </motion.div>

      <div className="h-full w-2/5 flex flex-col items-start justify-between relative z-10 p-16">
        <button className="flex items-center space-x-4">
          <Image src={arrowLeft} alt="arrow left" />
          <p>Back</p>
        </button>
        <div className="w-full flex flex-col justify-between items-start space-y-8">
          <div className="flex flex-col ">
            <p>2020 Zürich</p>
            <h2 className="text-8xl font-extrabold">Michel Freudenberg</h2>
          </div>
          <Button shade="lightFull" size="small" text="Explore" />
        </div>
        <div />
      </div>

      <div className="h-full w-1/2 flex items-center pr-16 relative">
        {projectData.map((project, index) => (
          <ProjectImage
            key={index}
            currentIndex={currentIndex}
            project={project}
          />
        ))}

        <div className="h-full w-min flex flex-col justify-center items-center space-y-4 ml-8">
          <Image src={arrowUp} alt="arrowUp" />
          <p>Scroll</p>
          <Image src={arrowDown} alt="arrowDown" />
        </div>
      </div>
    </div>
  );
}

export default Photo;
