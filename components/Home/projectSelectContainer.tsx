import { motion } from "framer-motion";
import { useState } from "react";

const containerVariants = {
  hover: {
    transition: {
      duration: 1,
    },
    transitionEnd: {
      zIndex: 0,
    },
  },
};

function ProjectSelectContainer({ children }: { children?: React.ReactNode }) {
  const [enterComplete, setEnterComplete] = useState(false);

  return (
    <motion.div
      className="h-full w-full overflow-clip flex relative cursor-pointer"
      variants={containerVariants}
      initial="initial"
      whileHover={enterComplete ? "hover" : "inView"}
      whileInView="inView"
      onAnimationComplete={() => setEnterComplete(true)}
      onViewportLeave={() => setEnterComplete(false)}
    >
      {children}
    </motion.div>
  );
}

export default ProjectSelectContainer;
