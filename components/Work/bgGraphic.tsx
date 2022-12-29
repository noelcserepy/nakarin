import { motion, MotionValue, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import reel from "../../public/graphics/movie_reel.svg";

const bgVariants = {
  hidden: {
    x: "-50%",
    opacity: 1,
  },
  visible: {
    x: "0%",
    opacity: 0.2,
    transition: {
      opacity: { duration: 0.5, delay: 0.5 },
      duration: 0.5,
    },
  },
};

function BgGraphic({
  totalScroll,
  graphic,
}: {
  totalScroll: MotionValue;
  graphic: any;
}) {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start("visible");

    totalScroll.onChange((latest) => {
      controls.start({
        rotate: totalScroll.get() * 8,
        transition: {
          delay: 0.25,
          type: "spring",
          mass: 0.5,
          stiffness: 80,
          damping: 10,
        },
      });
    });
  }, []);

  return (
    <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2">
      <motion.div
        className=" h-[120vh] aspect-square  relative"
        variants={bgVariants}
        initial="hidden"
        animate={controls}
      >
        <Image
          src={graphic}
          alt="Movie reel graphic"
          fill
          priority
          style={{ objectFit: "contain", objectPosition: "center center" }}
        />
      </motion.div>
    </div>
  );
}

export default BgGraphic;
