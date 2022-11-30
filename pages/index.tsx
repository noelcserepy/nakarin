import { useRef } from "react";
import { ScrollerMotion } from "scroller-motion";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import Nav from "../components/Nav/nav";
import Intro from "../components/Home/intro";
import Projects from "../components/Home/projects";
import ScrollText from "../components/Home/scrolltext";
import Parallax from "../components/Common/parallax";
import tremondi from "../public/nakarin_saisorn_tremondi_quinten_1.jpg";
import schlieren from "../public/Schlieren_Wakkerpreis_Drohne__Studio-Gataric__014_Web.jpg";
import Footer from "../components/Common/footer";

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
    offset: ["30% end", "80% end"],
  });
  const bgColor = useTransform(darkenProgress, [0, 1], ["#ECEEEF", "#090B0C"]);

  return (
    <ScrollerMotion
      scale={1}
      spring={{
        stiffness: 250,
        damping: 50,
        mass: 0.4,
        restDelta: 0.5,
      }}
    >
      <Nav />

      <header className="w-screen h-[110vh] relative text-light overflow-clip">
        {/* Background Image */}
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

        {/* Overlay */}
        <div
          className="w-screen h-screen py-48 z-10 absolute top-0 left-0 flex flex-col justify-end"
          style={{ zIndex: "10" }}
        >
          <div className="font-switzer text-4xl whitespace-pre text-right px-24">
            {`Freelance Photographer & Videographer`}
          </div>
          <ScrollText />
        </div>
      </header>

      <motion.div
        className="z-10"
        initial={{ y: 0 }}
        style={{ y: yUp, backgroundColor: bgColor }}
      >
        <motion.section ref={introRef} className="py-24 my-48 h-screen">
          <Intro darkenProgress={darkenProgress} />
        </motion.section>
        <motion.section ref={projectsRef} className="py-24 my-48 h-screen">
          <Projects />
        </motion.section>
        <motion.section className="py-24 my-48 h-screen">
          <Footer />
        </motion.section>
      </motion.div>
    </ScrollerMotion>
  );
}
