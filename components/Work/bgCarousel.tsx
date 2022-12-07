import { motion, useTransform, useSpring, MotionValue } from "framer-motion";
import Carousel from "../Home/carousel";

function BgCarousel({ totalScroll }: { totalScroll: MotionValue }) {
  const carouselRotation = useTransform(totalScroll, (v) => v * 8);
  const smoothRotation = useSpring(carouselRotation);

  return (
    <motion.div
      className="fixed top-1/2 left-0"
      style={{ rotate: smoothRotation }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <motion.div className="fixed top-1/2 [&>*]:h-[140vh] [&>*]:opacity-20 -translate-x-1/2 -translate-y-1/2 z-0">
        <Carousel />
      </motion.div>
    </motion.div>
  );
}

export default BgCarousel;
