import { motion } from "framer-motion";
import { useRouter } from "next/router";

const itemVariants = {
  closed: {
    opacity: 0,
    x: 40,
    transition: {
      ease: "easeIn",
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      ease: "easeIn",
      duration: 0.2,
    },
  },
  hover: {
    x: 10,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

function MenuItem({ text }: { text: string }) {
  const router = useRouter();

  const getRoute = () => {
    switch (text) {
      case "Home":
        return "/";
      case "About":
        return "/about";
      case "Photo":
        return "/photo";
      case "Video":
        return "/video";
    }
  };

  const isCurrentRoute = router.pathname === getRoute();

  const handleClick = () => {
    router.push(`${getRoute()}`);
  };

  return (
    <motion.h1
      className="text-title text-5xl text-dark cursor-pointer"
      variants={itemVariants}
      initial="closed"
      animate="open"
      exit="closed"
      whileHover="hover"
      style={{ originX: 0, originY: 0.5 }}
      onClick={handleClick}
    >
      {isCurrentRoute && <span>-</span>}
      {text}
    </motion.h1>
  );
}

export default MenuItem;
