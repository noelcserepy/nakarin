import { motion, useTransform, useSpring, MotionValue } from "framer-motion";
import Image from "next/image";
import carousel from "../../public/graphics/carousel.svg";

function BgCarousel({ totalScroll }: { totalScroll: MotionValue }) {
  const carouselRotation = useTransform(totalScroll, (v) => v * 8);
  const smoothRotation = useSpring(carouselRotation, {
    mass: 0.5,
    stiffness: 80,
    damping: 10,
  });

  return (
    <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2">
      <motion.div
        className=" h-[120vh] aspect-square [&>*]:opacity-20"
        style={{ rotate: smoothRotation }}
        transition={{ delay: 0.3 }}
      >
        <Image
          src={carousel}
          alt="Carousel graphic"
          fill
          style={{ objectFit: "contain", objectPosition: "center center" }}
        />
      </motion.div>
    </div>
  );
}

export default BgCarousel;
