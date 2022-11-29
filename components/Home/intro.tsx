import { motion, MotionValue, useTransform } from "framer-motion";
import birrfeld from "../../public/nakarin_saisorn_takeoff_birrfeld_1.jpg";
import Image from "next/image";
import Button from "../Common/button";
import dosenbachLogo from "public/dosenbach_logo.svg";
import elmerLogo from "public/elmer_citro_logo.svg";
import oppoLogo from "public/oppo_logo.svg";
import weltklasseLogo from "public/weltklasse_zh_logo.svg";
import arrowDown from "public/arrow_down.svg";

const h4Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delay: 0.3,
      staggerChildren: 0.02,
      ease: "easeOut",
    },
  },
};

const headerSpanVariants = {
  initial: {
    y: 40,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const learnVariants = {
  initial: {
    y: 40,
    background: "none",
    color: "#090B0C",
  },
  animate: {
    y: 0,
    background: "none",
    color: "#090B0C",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  hover: {
    background: "#090B0C",
    color: "#ECEEEF",
    paddingRight: "0.5rem",
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
    <div className="flex flex-col px-32 w-full h-screen justify-between">
      <div className="flex w-full justify-between mt-72 h-[50%]">
        <div className="flex flex-col justify-between items-start w-1/2 h-full">
          <div className="flex flex-col space-y-16 items-start">
            <motion.h4
              className="font-switzer font-light text-4xl w-full overflow-hidden flex flex-wrap leading-tight "
              variants={h4Variants}
              initial="initial"
              whileInView="animate"
              viewport={{ amount: "some" }}
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
            <Button text="Get in touch" shade="darkBorder" />
          </div>

          <div className="flex justify-between items-center w-full max-h-12 space-x-4">
            <div className="">
              <Image alt="Dosenbach logo" src={dosenbachLogo} />
            </div>
            <div>
              <Image alt="Elmer Citro logo" src={elmerLogo} />
            </div>

            <div>
              <Image alt="Weltklasse Zürich logo" src={weltklasseLogo} />
            </div>
            <div>
              <Image alt="Oppo logo" src={oppoLogo} />
            </div>
          </div>
        </div>

        <motion.div className="flex justify-end items-start w-5/12 h-min relative">
          <Image
            alt="Dashboard of an airplane at Takeoff Birrfeld"
            src={birrfeld}
          />
          <motion.div
            className="w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-dark"
            style={{ opacity: overlayOpacity }}
          />
        </motion.div>
      </div>
      <div className="mx-auto flex flex-col justify-end items-center">
        <p>Scroll to see my work</p>
        <Image alt="arrow down" src={arrowDown} className="h-12" />
      </div>
    </div>
  );
}
