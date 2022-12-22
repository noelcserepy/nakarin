import { motion, useMotionValue } from "framer-motion";
import { useRouter } from "next/router";

const textVariants = {
  hidden: {
    opacity: 0,
    x: 40,
    transition: {
      ease: "easeIn",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.2,
    },
  },
  exit: { opacity: 0, x: 40, transition: { ease: "easeIn" } },
};
const dotVariants = {
  hidden: {
    opacity: 0,
    x: 40,
    transition: {
      ease: "easeIn",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.2,
    },
  },
  hover: {
    x: -10,
  },
  exit: { opacity: 0, x: 40, transition: { ease: "easeIn" } },
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

  const textX = useMotionValue(0);
  const dotX = useMotionValue(0);

  const handleClick = () => {
    router.push(`${getRoute()}`);
  };

  return (
    <motion.li className="relative group">
      {isCurrentRoute && (
        <div
          className="rounded-full bg-beige w-4 h-4 absolute top-1/2 -translate-y-1/2 -left-8 transition-all duration-200 ease-out group-hover:-translate-x-2"
          // variants={dotVariants}
          // onHoverStart={() => dotX.set(-10)}
          // onHoverEnd={() => dotX.set(0)}
        />
      )}
      <motion.div
        className="text-title text-5xl text-dark cursor-pointer transition-all duration-200 ease-out flex gap-4"
        variants={textVariants}
        onClick={handleClick}
        style={{ x: textX }}
        onHoverStart={() => textX.set(10)}
        onHoverEnd={() => textX.set(0)}
      >
        <div className="w-min">{text}</div>
      </motion.div>
    </motion.li>
  );
}

export default MenuItem;
