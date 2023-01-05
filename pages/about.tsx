import Image from "next/image";
import Button from "../components/Common/button";
import Socials from "../components/Common/socials";
import Nav from "../components/Nav/nav";
import aboutImg from "../public/misc/about_img.png";
import { motion } from "framer-motion";
import Curtain from "../components/Common/curtain";
import { useContext } from "react";
import IsMobileContext from "../components/Common/IsMobileContext";

const textVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.8,
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.8,
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

function About() {
  const { isMobile, setIsMobile } = useContext(IsMobileContext);

  return (
    <div className="h-full md:h-screen w-screen bg-dark p-8 flex items-start md:items-center justify-center ">
      <Curtain />
      <Nav />
      <div className="h-full md:h-3/4 w-full flex flex-col md:flex-row items-center justify-between max-w-[1440px] pt-12 md:pt-0 gap-8">
        <motion.div
          className="flex flex-col h-full w-full md:w-1/3 justify-between gap-8"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-title text-6xl md:text-8xl">About</h1>
            <p className="text-subtitle text-xl">
              {`Hi, I'm Nakarin Saisorn, a freelance photographer based in
              Switzerland. I specialize in architectural, editorial, event, and
              landscape photography and have worked with clients including
              architectural firms, local businesses, and cultural foundations. I
              am passionate about traveling and capturing unique images around
              Switzerland. Let me bring your vision to life through my lens.`}
            </p>
          </div>
          <div className="flex gap-x-8 gap-y-2 gap flex-wrap">
            <Button shade="lightFull" size="small" text="nakarin@nakarin.ch" />
            <Button shade="lightBorder" size="small" text="+41 76 123 45 67" />
          </div>
          <Socials />
        </motion.div>

        <motion.div
          className="w-full relative aspect-3/2 md:aspect-auto md:h-full md:w-1/2 "
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src={aboutImg}
            alt="about"
            fill
            style={{
              objectFit: "contain",
              objectPosition: isMobile ? "left" : "right",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
