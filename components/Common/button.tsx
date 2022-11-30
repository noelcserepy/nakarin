import { motion } from "framer-motion";

const buttonVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  hover: {
    backgroundColor: "#090B0C",
    color: "#A77946",
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

export default function Button({
  text = "button",
  shade = "light",
  size = "small",
}: {
  text?: string;
  shade?: string;
  size?: string;
}) {
  interface Shades {
    [index: string]: string;
    light: string;
    dark: string;
    lightBorder: string;
    darkBorder: string;
    lightFull: string;
    darkFull: string;
  }

  const shades: Shades = {
    light: "text-light",
    dark: "text-dark",
    lightBorder: "border-2 border-light text-light rounded ",
    darkBorder: "border-2 border-dark text-dark rounded ",
    lightFull: "bg-light text-dark rounded ",
    darkFull: "bg-dark text-light rounded ",
  };

  interface Sizes {
    [index: string]: string;
    none: string;
    small: string;
    big: string;
  }

  const sizes: Sizes = {
    none: "",
    small: "px-3 py-1",
    big: "text-xl px-4 py-2",
  };

  if (shade === "light" || shade === "dark") {
    size = "none";
  }

  return (
    <motion.button
      className={`font-bespokeSlab font-bold text-lg ${shades[shade]} ${sizes[size]}`}
      variants={buttonVariants}
      whileHover="hover"
    >
      {text}
    </motion.button>
  );
}
