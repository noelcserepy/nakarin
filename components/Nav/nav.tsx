import { motion } from "framer-motion";

const navVariants = {
  initial: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: -15,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

function Nav() {
  return (
    <motion.div
      className="font-bespokeSlab text-white absolute top-0 w-screen h-20 flex justify-between items-center px-16 z-10"
      variants={navVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={itemVariants}>Nakarin</motion.div>
      <motion.div className="flex space-x-4">
        <motion.div variants={itemVariants}>Work</motion.div>
        <motion.div variants={itemVariants}>About</motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Nav;
