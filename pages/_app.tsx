import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

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
const technor = localFont({
  src: "./Technor-Variable.woff2",
  style: "normal",
  variable: "--font-technor",
  display: "swap",
  weight: "100 900",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${switzer.variable} ${switzerItalic.variable} ${technor.variable} text-switzer`}
    >
      <Component {...pageProps} />
    </main>
  );
}
