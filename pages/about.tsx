import Image from "next/image";
import Button from "../components/Common/button";
import Socials from "../components/Common/socials";
import Nav from "../components/Nav/nav";
import aboutImg from "../public/misc/about_img.png";
import { motion } from "framer-motion";
import Curtain from "../components/Common/curtain";

const textVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
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
      delay: 0.3,
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

function About() {
  return (
    <div className="h-screen w-screen bg-dark p-8 flex items-center justify-center ">
      <Curtain />
      <Nav />
      <div className=" h-1/2 w-full flex items-center justify-between max-w-[1440px]">
        <motion.div
          className="flex flex-col h-full w-1/3 justify-between"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col space-y-8">
            <h1 className="text-title">About</h1>
            <p className="text-subtitle">
              Lorem ipsum dolor sit amet consectetur. Cras quisque et eget ut a.
              Malesuada mi integer eget pellentesque ut vestibulum scelerisque
              dictumst.
            </p>
          </div>
          <div className="flex gap-x-8 gap-y-2 gap flex-wrap">
            <Button shade="lightFull" size="small" text="nakarin@nakarin.ch" />
            <Button shade="lightBorder" size="small" text="+41 76 123 45 67" />
          </div>
          <Socials />
        </motion.div>
        <motion.div
          className="h-full w-1/2 relative"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src={aboutImg}
            alt="about"
            fill
            style={{ objectFit: "contain", objectPosition: "right" }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
