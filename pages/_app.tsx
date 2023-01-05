import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import { AnimatePresence, motion } from "framer-motion";
import { NextFontWithVariable } from "@next/font/dist/types";
import { useEffect, useState } from "react";
import PhotoIndexContext from "../components/Common/photoIndexContext";
import { useRouter } from "next/router";
import SEO from "../components/Common/SEO";
import VideoIndexContext from "../components/Common/videoIndexContext";
import { useMediaQuery } from "../hooks/useMediaQuery";
import IsMobileContext from "../components/Common/IsMobileContext";

const switzer: NextFontWithVariable = localFont({
  src: "./Switzer-Variable.woff2",
  style: "normal",
  variable: "--font-switzer",
  display: "swap",
  weight: "100 900",
});
const switzerItalic: NextFontWithVariable = localFont({
  src: "./Switzer-VariableItalic.woff2",
  style: "italic",
  variable: "--font-switzer-italic",
  display: "swap",
  weight: "100 900",
});
const bespokeSlab: NextFontWithVariable = localFont({
  src: "./BespokeSlab-Variable.woff2",
  style: "normal",
  variable: "--font-bespokeSlab",
  display: "swap",
  weight: "100 900",
});
const bespokeSlabItalic: NextFontWithVariable = localFont({
  src: "./BespokeSlab-VariableItalic.woff2",
  style: "italic",
  variable: "--font-bespokeSlab-italic",
  display: "swap",
  weight: "100 900",
});
const technor: NextFontWithVariable = localFont({
  src: "./Technor-Variable.woff2",
  style: "normal",
  variable: "--font-technor",
  display: "swap",
  weight: "100 900",
});

export default function App({ Component, pageProps }: AppProps) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const [isMobile, setIsMobile] = useMediaQuery("(max-width: 768px)");

  const router = useRouter();
  const url = `https://www.nakarin.ch${router.route}`;

  return (
    <PhotoIndexContext.Provider value={{ photoIndex, setPhotoIndex }}>
      <VideoIndexContext.Provider value={{ videoIndex, setVideoIndex }}>
        <IsMobileContext.Provider value={{ isMobile, setIsMobile }}>
          <SEO url={url} />
          <motion.main
            className={`
          ${switzer.variable} 
          ${switzerItalic.variable} 
          ${bespokeSlab.variable} 
          ${bespokeSlabItalic.variable} 
          ${technor.variable}  
          h-full w-full font-sans bg-light text-dark overflow-x-hidden overflow-y-auto`}
          >
            <AnimatePresence>
              <Component {...pageProps} key={url} />
            </AnimatePresence>
          </motion.main>
        </IsMobileContext.Provider>
      </VideoIndexContext.Provider>
    </PhotoIndexContext.Provider>
  );
}
