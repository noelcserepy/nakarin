import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  useSpring,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { useRef } from "react";

function ScrollText({ baseVelocity = 100 }) {
  const x = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    stiffness: 200,
    damping: 100,
  });
  const velocity = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const direction = useRef<number>(-1);

  useAnimationFrame((time, delta) => {
    let moveBy = direction.current * baseVelocity * (delta / 20000);

    moveBy += direction.current * moveBy * velocity.get();

    x.set(x.get() + moveBy);
  });

  const xPercent = useTransform(x, (value) => {
    return `${value % 100}%`;
  });

  return (
    <motion.div className="text-title-mobile lg:text-[13rem] whitespace-nowrap flex z-50">
      <motion.h1 style={{ x: xPercent }}>{"  Nakarin Saisorn - "}</motion.h1>
      <motion.h1 style={{ x: xPercent }}>{"  Nakarin Saisorn - "}</motion.h1>
      <motion.h1 style={{ x: xPercent }}>{"  Nakarin Saisorn - "}</motion.h1>
    </motion.div>
  );
}

export default ScrollText;
