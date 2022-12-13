import { motion } from "framer-motion";
import MenuItem from "./menuItem";

const itemsVariants = {
  open: {
    x: 0,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 1,
    },
  },
  closed: {
    x: 0,
    transition: {
      ease: "easeIn",
    },
  },
};

function MenuItems() {
  return (
    <motion.div
      className="flex flex-col p-8 pt-16 w-full h-1/2 gap-8"
      variants={itemsVariants}
    >
      <MenuItem text="Home" key="home" />
      <MenuItem text="Photo" key="photo" />
      <MenuItem text="Video" key="video" />
      <MenuItem text="About" key="about" />
    </motion.div>
  );
}

export default MenuItems;
