import { motion, MotionValue, useTransform } from "framer-motion";
import panthera from "../../public/projects/panthera_onca/Panthera_Onca_Web_Nakarin_Fotografie_07.jpg";
import Image from "next/image";
import Button from "../Common/button";
import dosenbachLogo from "public/logos/dosenbach_logo.svg";
import elmerLogo from "public/logos/elmer_citro_logo.svg";
import oppoLogo from "public/logos/oppo_logo.svg";
import weltklasseLogo from "public/logos/weltklasse_zh_logo.svg";
import Parallax from "../Common/parallax";

const containerVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
};

const h4Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.02,
      ease: "easeOut",
    },
  },
};

const headerSpanVariants = {
  initial: {
    y: 50,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const brandVariants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  initial: {
    y: 20,
    opacity: 0,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

export default function Intro({
  darkenProgress,
}: {
  darkenProgress: MotionValue;
}) {
  const overlayOpacity = useTransform(darkenProgress, [0, 1], [0, 1]);

  const headerText = `I help brands and individuals find their unique look, using both video and photography.`;
  const spanTexts = headerText.split(" ");

  return (
    <div className="flex flex-col h-full justify-between mx-auto max-w-full px-8 sm:px-0 sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-[75rem]">
      <motion.div
        className="flex w-full justify-between h-full"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ amount: 0.4 }}
      >
        <div className="flex flex-col justify-center space-y-16 items-start w-1/2 h-full">
          <motion.h4
            className="font-switzer font-light text-5xl w-full  flex flex-wrap leading-tight "
            variants={h4Variants}
          >
            {spanTexts.map((t, i) => (
              <motion.span
                key={i}
                className="overflow-hidden mr-3 inline-flex relative"
              >
                <motion.span
                  variants={headerSpanVariants}
                  className="block relative"
                >
                  {t + " "}
                </motion.span>
              </motion.span>
            ))}
          </motion.h4>

          <motion.div
            className="flex justify-start items-center w-full h-12"
            variants={brandVariants}
          >
            <div className="flex justify-center w-full">
              <Image alt="Oppo logo" src={oppoLogo} className="h-12" />
            </div>
            <div className="flex justify-center w-full">
              <Image
                alt="Dosenbach logo"
                src={dosenbachLogo}
                className="h-12"
              />
            </div>
            <div className="flex justify-center w-full">
              <Image
                alt="Weltklasse Zürich logo"
                src={weltklasseLogo}
                className="h-12"
              />
            </div>
            <div className="flex justify-center w-full">
              <Image alt="Elmer Citro logo" src={elmerLogo} className="h-12" />
            </div>
          </motion.div>

          <motion.div variants={buttonVariants}>
            <Button text="Get in touch" shade="darkBorder" size="big" />
          </motion.div>
        </div>

        <div className="flex justify-end items-start w-5/12 h-full relative">
          <Parallax twClass="h-full w-full flex justify-center items-center">
            <div className="h-full w-full">
              <Image
                alt="Hand opening car door."
                src={panthera}
                fill
                style={{ objectPosition: "start start", objectFit: "cover" }}
              />
              <motion.div
                className="w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-dark"
                style={{ opacity: overlayOpacity }}
              />
            </div>
          </Parallax>
        </div>
      </motion.div>

      {/* <div className="mx-auto flex flex-col justify-end items-center">
        <p>Scroll to see my work</p>
        <Image alt="arrow down" src={arrowDown} className="h-12" />
      </div> */}
    </div>
  );
}
