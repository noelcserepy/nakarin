import { motion } from "framer-motion";
import Button from "../Common/button";

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
      className="absolute top-0 w-screen h-20 flex justify-between items-center px-24 z-10 [&>*]:cursor-pointer"
      variants={navVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={itemVariants}>
        <Button text="Nakarin" shade="light" />
      </motion.div>
      <motion.div className="flex space-x-8 items-center">
        <motion.div variants={itemVariants}>
          <Button text="Work" shade="light" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button text="About" shade="light" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button text="Contact" shade="lightBorder" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Nav;
