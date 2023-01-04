import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

function UpcomingImageMobile({
  currentIndex,
  project,
  projectIndex,
  maxIndex,
}: {
  currentIndex: number;
  project: any;
  projectIndex: number;
  maxIndex: number;
}) {
  const y = useMotionValue(0);
  const ySmooth = useSpring(y, { damping: 20, stiffness: 120 });
  const x = useMotionValue(0);
  const xSmooth = useSpring(x, { damping: 20, stiffness: 120 });
  const opacity = useMotionValue(0);
  const opacitySmooth = useSpring(opacity, { damping: 20, stiffness: 300 });

  const halfLength = Math.floor(maxIndex / 2) - 1;

  useEffect(() => {
    const timer = setTimeout(() => {
      let distance = projectIndex - currentIndex;

      if (distance > halfLength) {
        distance = distance - maxIndex - 1;
      } else if (distance < -halfLength) {
        distance = distance + maxIndex + 1;
      }

      const yOffset = Math.abs(distance) * 110 - 30;
      y.set(yOffset);

      const xOffset = -distance * 120;
      x.set(xOffset);

      if (distance === 0) {
        opacity.set(0);
      } else {
        opacity.set(1 - Math.abs(distance) / halfLength);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <motion.div
      className="absolute aspect-3/2 w-28 bottom-0"
      style={{ y: ySmooth, x: xSmooth, opacity: opacitySmooth }}
    >
      <Image
        src={project.thumbnail}
        alt={project.name}
        fill
        style={{
          objectFit: "cover",
          filter: "brightness(20%)",
        }}
        sizes="50vw"
      />
    </motion.div>
  );
}

export default UpcomingImageMobile;
