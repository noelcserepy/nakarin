import { useRef } from "react";
import { ScrollerMotion } from "scroller-motion";
import { motion, useTransform, useScroll } from "framer-motion";
import { useMediaQuery } from "../hooks/useMediaQuery";
import Image from "next/image";
import Nav from "../components/Nav/nav";
import Intro from "../components/Home/intro";
import PhotoVideoSelect from "../components/Home/photoVideoSelect";
import ScrollText from "../components/Home/scrolltext";
import Parallax from "../components/Common/parallax";
import takeoff from "../public/projects/takeoff_birrfeld/takeoff-birrfeld-nakarin-saisorn-1.jpg";
import michel from "../public/projects/michel_freudenberg/michel-freudenberg-nakarin-saisorn-0.jpg";
import Footer from "../components/Common/footer";
import Curtain from "../components/Common/curtain";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const introRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["end end", "start start"],
  });
  const yUp = useTransform(scrollYProgress, [1, 0], [0, -300]);

  const projectsRef = useRef(null);
  const { scrollYProgress: darkenProgress } = useScroll({
    target: projectsRef,
    offset: ["30% end", "50% end"],
  });
  const bgColor = useTransform(darkenProgress, [0, 1], ["#ECEEEF", "#090B0C"]);

  return (
    <>
      <Nav back={false} />
      <ScrollerMotion
        scale={1}
        spring={{
          stiffness: 250,
          damping: 50,
          mass: 0.4,
          restDelta: 0.5,
        }}
      >
        <Curtain />
        <header className="h-[110vh] w-full relative text-light overflow-clip">
          {/* Background Image */}
          <Parallax
            twClass="h-full w-full md:h-screen md:w-full flex items-center justify-center"
            offset={["center center", "end start"]}
            depth={100}
            zoom={120}
          >
            <Image
              alt="Nakarin Saisorn - Tremondi Quinten Interior"
              src={isMobile ? michel : takeoff}
              priority
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center center",
              }}
              sizes="100vw"
            />
          </Parallax>

          {/* Overlay */}
          <div
            className="w-full h-screen py-48 z-10 absolute top-0 left-0 flex flex-col justify-center items-center"
            style={{ zIndex: "10" }}
          >
            <ScrollText />
            <div className="text-subtitle text-center whitespace-pre-line px-8">
              {`Freelance Photographer & \nVideographer`}
            </div>
          </div>
        </header>

        <motion.div
          className="z-10 w-full"
          initial={{ y: 0 }}
          style={{ y: yUp, backgroundColor: bgColor }}
        >
          <motion.section ref={introRef} className="py-24 my-48 h-screen">
            <Intro darkenProgress={darkenProgress} />
          </motion.section>
          <motion.section
            id="projects"
            ref={projectsRef}
            className="py-24 my-48 h-[150vh] flex items-center"
          >
            <PhotoVideoSelect />
          </motion.section>
          <motion.section className="py-24 my-48 h-screen flex items-center">
            <Footer />
          </motion.section>
        </motion.div>
      </ScrollerMotion>
    </>
  );
}
