import Project from "./project";
import { motion } from "framer-motion";

const h4Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delay: 0.3,
      staggerChildren: 0.02,
      ease: "easeOut",
    },
  },
};

const headerSpanVariants = {
  initial: {
    y: 40,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const learnVariants = {
  initial: {
    y: 40,
    background: "none",
    color: "#090B0C",
  },
  animate: {
    y: 0,
    background: "none",
    color: "#090B0C",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  hover: {
    background: "#090B0C",
    color: "#ECEEEF",
    paddingRight: "0.5rem",
  },
};

export default function Intro() {
  const headerText = `I help brands and individuals find their unique look, using both video and photography.`;
  const spanTexts = headerText.split(" ");

  return (
    <div className="flex flex-col px-48 w-full">
      <div className="flex w-full justify-between py-48">
        <motion.h4
          className="font-switzer font-extralight text-4xl w-7/12 overflow-hidden flex flex-wrap leading-tight "
          variants={h4Variants}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: "all" }}
        >
          {spanTexts.map((t, i) => (
            <motion.span
              key={i}
              className="overflow-hidden mr-3 inline-flex relative"
            >
              <motion.span
                variants={headerSpanVariants}
                className="block relative"
              >
                {t + " "}
              </motion.span>
            </motion.span>
          ))}
        </motion.h4>
        <motion.div
          className="flex flex-col items-end text-end h-min rounded-md pl-2 py-2 cursor-pointer"
          variants={learnVariants}
          initial="initial"
          whileInView="animate"
          whileHover="hover"
        >
          <div className="font-bespokeSlab text-2xl">Learn more</div>
          <div className="font-bespokeSlab font-black text-4xl">About me</div>
        </motion.div>
      </div>
      <div className="font-switzer text-mid2 mb-4">Recent work</div>
      <div>
        <Project />
      </div>
    </div>
  );
}
