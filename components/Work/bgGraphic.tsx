import { motion, MotionValue, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { useContext, useEffect } from "react";
import IsMobileContext from "../Common/IsMobileContext";

const bgVariants = {
  hidden: {
    x: "-50%",
    opacity: 1,
  },
  hiddenMobile: {
    y: "80%",
    opacity: 1,
  },
  visible: {
    x: "0%",
    y: "0%",
    opacity: 0.2,
    transition: {
      opacity: { duration: 1, delay: 0.8 },
      delay: 0.8,
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
  const { isMobile, setIsMobile } = useContext(IsMobileContext);
  console.log(isMobile);

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
    <div className="absolute top-[60%] left-1/2 md:-translate-y-1/2 -translate-x-1/2 md:top-1/2 md:left-0 ">
      {isMobile ? (
        <motion.div
          className="w-[110vw] md:w-auto md:h-[120vh] aspect-square  relative"
          variants={bgVariants}
          initial="hiddenMobile"
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
      ) : (
        <motion.div
          className="w-[110vw] md:w-auto md:h-[120vh] aspect-square  relative"
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
      )}
    </div>
  );
}

export default BgGraphic;
