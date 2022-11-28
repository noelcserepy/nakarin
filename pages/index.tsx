import RecentWork from "../components/Home/recentwork";
import Nav from "../components/Nav/nav";
import { ScrollerMotion } from "scroller-motion";
import { motion, useTransform, useScroll } from "framer-motion";
import ScrollText from "../components/Home/scrolltext";
import Image from "next/image";
import Map from "../components/Home/map";
import tremondi from "../public/nakarin_saisorn_tremondi_quinten_1.jpg";
import Intro from "../components/Home/intro";
import Projects from "../components/Home/projects";
import { useRef } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll({
    offset: ["end end", "start start"],
  });
  const yUp = useTransform(scrollYProgress, [1, 0], [0, -300]);

  const ref = useRef(null);
  const { scrollYProgress: darkenProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });
  const bgColor = useTransform(darkenProgress, [0, 1], ["#ECEEEF", "#090B0C"]);

  return (
    <ScrollerMotion
      scale={1}
      spring={{ stiffness: 600, damping: 100, mass: 1 }}
    >
      <Nav />

      <motion.section className="w-screen h-screen relative text-light overflow-clip">
        <Map />
        <Image
          alt="Nakarin Saisorn - Tremondi Quinten Interior"
          src={tremondi}
          priority
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center center",
          }}
        />
        <motion.div
          className="w-screen h-screen z-10"
          initial={{ y: 0 }}
          style={{ y: yUp, zIndex: "10" }}
        >
          <ScrollText />
          <div className="font-switzer text-4xl whitespace-pre absolute bottom-4 left-24">
            {`Freelance Photographer & Videographer`}
          </div>
        </motion.div>
      </motion.section>

      <motion.div
        className="z-10"
        initial={{ y: 0 }}
        style={{ y: yUp, backgroundColor: bgColor }}
      >
        <motion.section>
          <Intro />
        </motion.section>
        <motion.section ref={ref} className="mt-48">
          <Projects />
        </motion.section>
      </motion.div>
    </ScrollerMotion>
  );
}
