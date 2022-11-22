import RecentWork from "../components/Home/recentwork";
import Nav from "../components/Nav/nav";
import { ScrollerMotion } from "scroller-motion";
import { motion, useTransform, useScroll } from "framer-motion";
import ScrollText from "../components/Home/scrolltext";
import Image from "next/image";
import Map from "../components/Home/map";
import onlyFace from "../public/james_only_face.png";

export default function Home() {
  const { scrollYProgress } = useScroll({
    offset: ["end end", "start start"],
  });

  const yUp = useTransform(scrollYProgress, [1, 0], [0, -300]);

  return (
    <ScrollerMotion
      scale={1}
      spring={{ stiffness: 600, damping: 100, mass: 1 }}
    >
      <Nav />

      <motion.section className="w-screen h-screen bg-herobg relative text-light overflow-clip">
        <Map />
        <Image
          alt="Nakarin Saisorn portrait"
          src={onlyFace}
          priority
          fill
          style={{
            objectFit: "contain",
            objectPosition: "bottom center",
            transform: "scale(0.9) translateY(6%)",
          }}
        />
        <motion.div
          className="w-screen h-screen z-10"
          initial={{ y: 0 }}
          style={{ y: yUp, zIndex: "10" }}
        >
          <ScrollText />
          <div className="font-switzer font-extralight text-4xl whitespace-pre absolute right-[10%] top-1/2 -translate-y-1/2">
            {`Freelance
Photographer
& Videographer`}
          </div>
        </motion.div>
      </motion.section>
      <motion.section
        className="z-50 bg-light"
        initial={{ y: 0 }}
        style={{ y: yUp }}
      >
        <RecentWork />
      </motion.section>
    </ScrollerMotion>
  );
}
