import Hero from "../components/Home/hero";
import RecentWork from "../components/Home/recentwork";
import Nav from "../components/Nav/nav";
import { ScrollerMotion } from "scroller-motion";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const yUp = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <ScrollerMotion
      ref={ref}
      scale={1}
      spring={{ stiffness: 600, damping: 100, mass: 1 }}
    >
      <Nav />
      <motion.section className="z-0 h-screen ">
        <Hero />
      </motion.section>
      <motion.section
        className="z-10 bg-light"
        style={{ y: yUp }}
        // initial={{ y: 0 }}
        // whileInView={{ y: -30 }}
        // viewport={{ amount: "some" }}
      >
        <RecentWork />
      </motion.section>
    </ScrollerMotion>
  );
}
