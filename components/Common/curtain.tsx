import { motion } from "framer-motion";

const curtainVariants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    height: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

function Curtain() {
  return (
    <motion.div
      className="w-screen h-screen absolute bottom-0 left-0 z-50 bg-dark"
      variants={curtainVariants}
      initial="visible"
      animate="hidden"
    />
  );
}

export default Curtain;
