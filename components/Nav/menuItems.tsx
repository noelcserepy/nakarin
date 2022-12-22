import { motion } from "framer-motion";
import MenuItem from "./menuItem";

const itemsVariants = {
  hidden: {
    x: 0,
    transition: {
      ease: "easeIn",
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
  visible: {
    x: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

function MenuItems() {
  return (
    <motion.ol
      className="flex flex-col w-full h-1/2 gap-8"
      variants={itemsVariants}
      initial="hidden"
      animate="visible"
    >
      <MenuItem text="Home" key="home" />
      <MenuItem text="Photo" key="photo" />
      <MenuItem text="Video" key="video" />
      <MenuItem text="About" key="about" />
    </motion.ol>
  );
}

export default MenuItems;
