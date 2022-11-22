import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import { motion } from "framer-motion";
import { ScrollerMotion } from "scroller-motion";

const switzer = localFont({
  src: "./Switzer-Variable.woff2",
  style: "normal",
  variable: "--font-switzer",
  display: "swap",
  weight: "100 900",
});
const switzerItalic = localFont({
  src: "./Switzer-VariableItalic.woff2",
  style: "italic",
  variable: "--font-switzer-italic",
  display: "swap",
  weight: "100 900",
});
const bespokeSlab = localFont({
  src: "./BespokeSlab-Variable.woff2",
  style: "normal",
  variable: "--font-bespokeSlab",
  display: "swap",
  weight: "100 900",
});
const bespokeSlabItalic = localFont({
  src: "./BespokeSlab-VariableItalic.woff2",
  style: "italic",
  variable: "--font-bespokeSlab-italic",
  display: "swap",
  weight: "100 900",
});
const technor = localFont({
  src: "./Technor-Variable.woff2",
  style: "normal",
  variable: "--font-technor",
  display: "swap",
  weight: "100 900",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <motion.main
      className={`
      ${switzer.variable} 
      ${switzerItalic.variable} 
      ${bespokeSlab.variable} 
      ${bespokeSlabItalic.variable} 
      ${technor.variable}  
      h-full w-screen overflow-x-hidden text-switzer bg-light`}
    >
      <Component {...pageProps} />
    </motion.main>
  );
}
