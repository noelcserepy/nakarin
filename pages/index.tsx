import Nav from "../components/Nav/nav";
import { ScrollerMotion } from "scroller-motion";
import { motion, useTransform, useScroll } from "framer-motion";
import ScrollText from "../components/Home/scrolltext";
import Image from "next/image";
import tremondi from "../public/nakarin_saisorn_tremondi_quinten_1.jpg";
import Intro from "../components/Home/intro";
import Projects from "../components/Home/projects";
import { useRef } from "react";
import Parallax from "../components/Common/parallax";

export default function Home() {
  const introRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["end end", "start start"],
  });
  const yUp = useTransform(scrollYProgress, [1, 0], [0, -300]);

  const projectsRef = useRef(null);
  const { scrollYProgress: darkenProgress } = useScroll({
    target: projectsRef,
    offset: ["start end", "start start"],
  });
  const bgColor = useTransform(darkenProgress, [0, 1], ["#ECEEEF", "#090B0C"]);

  return (
    <ScrollerMotion
      scale={1}
      spring={
        // { stiffness: 60, damping: 12, mass: 0.5 }
        {
          stiffness: 150,
          damping: 30,
          restDelta: 0.1,
        }
      }
    >
      <Nav />

      <motion.section className="w-screen h-screen relative text-light overflow-clip">
        <Parallax
          twClass="h-full w-full flex items-center justify-center"
          offset={["center center", "end start"]}
          depth={100}
          zoom={120}
        >
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
        </Parallax>
        <motion.div
          className="w-screen h-screen z-10"
          initial={{ y: 0 }}
          style={{ zIndex: "10" }}
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
        <motion.section ref={introRef}>
          <Intro darkenProgress={darkenProgress} />
        </motion.section>
        <motion.section ref={projectsRef} className="mt-48">
          <Projects />
        </motion.section>
      </motion.div>
    </ScrollerMotion>
  );
}
