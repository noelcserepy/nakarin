import { motion, useTransform, useSpring, MotionValue } from "framer-motion";
import Carousel from "../Home/carousel";

function BgCarousel({ totalScroll }: { totalScroll: MotionValue }) {
  const carouselRotation = useTransform(totalScroll, (v) => v * 8);
  // const smoothRotation = useTransform(carouselRotation, v => v, {{ease: "circIn"}});
  const smoothRotation = useSpring(carouselRotation, {
    mass: 0.5,
    stiffness: 80,
    damping: 10,
  });

  return (
    <motion.div
      className="fixed top-1/2 left-0"
      style={{ rotate: smoothRotation }}
    >
      <motion.div className="fixed top-1/2 [&>*]:h-[140vh] [&>*]:opacity-20 -translate-x-1/2 -translate-y-1/2 z-0">
        <Carousel />
      </motion.div>
    </motion.div>
  );
}

export default BgCarousel;
