import { motion } from "framer-motion";

const buttonVariants = {
  initial: {
    opacity: 1,
  },
  hover: {},
};

const defaultButtonProps = {
  shade: "light",
};

export default function Button({
  text,
  shade,
}: {
  text: string;
} & typeof defaultButtonProps) {
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
    lightBorder: "border-2 border-light text-light px-3 py-1 rounded ",
    darkBorder: "border-2 border-dark text-dark px-3 py-1 rounded ",
    lightFull: "bg-light text-dark px-3 py-1 rounded ",
    darkFull: "bg-dark text-light px-3 py-1 rounded ",
  };

  return (
    <motion.div
      variants={buttonVariants}
      className={`font-bespokeSlab text-lg ${shades[shade]}`}
    >
      {text}
    </motion.div>
  );
}
