import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ReactElement, useEffect, useRef } from "react";

export default function Parallax({
  children,
  twClass = "h-full w-full flex items-center justify-center",
  depth = 200,
  zoom = 140,
  offset = ["start end", "end start"],
}: {
  children: ReactElement;
  twClass?: string;
  depth?: number;
  zoom?: number;
  offset?: any;
}) {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: offset,
  });

  const yUp = useTransform(scrollYProgress, [0, 1], [-depth / 2, depth / 2]);

  const ySmooth = useSpring(yUp, { stiffness: 600, damping: 100, mass: 1 });

  return (
    <motion.div ref={imageRef} className={`overflow-clip ${twClass}`}>
      <motion.div
        style={{
          y: ySmooth,
          height: `${zoom}%`,
          width: `${zoom}%`,
          position: "relative",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
