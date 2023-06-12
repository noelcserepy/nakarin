import {useEffect, useState} from "react";

const twQueries = {
  "xs": "(max-width: 639px)",
  "sm": "(min-width: 640px)",
  "md": "(min-width: 768px)",
  "lg": "(min-width: 1024px)",
  "xl": "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
} as const;

type TwQueries = keyof typeof twQueries
type MediaQueries = `(min-width: ${number}px)` | `(max-width: ${number}px)`

type Breakpoint = TwQueries | MediaQueries

export function useMediaQuery(breakpoint: Breakpoint) {
  const [matches, setMatches] = useState(false);

  let query = breakpoint;
  if (Object.keys(twQueries).find((key) => key === breakpoint)) {
    query = twQueries[breakpoint as TwQueries]
  }

  const matchMedia = () => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    return media;
  };

  useEffect(() => {
    const media = matchMedia();
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return [matches, setMatches];
}
