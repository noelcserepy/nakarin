import Image from "next/image";
import onlyFace from "../../public/james_only_face.png";
import Map from "./map";
import ScrollText from "./scrolltext";

function Hero() {
  return (
    <div className="w-screen h-screen bg-herobg relative text-light">
      <Map />
      <Image
        alt="Nakarin Saisorn portrait"
        src={onlyFace}
        priority
        fill
        style={{ objectFit: "contain", objectPosition: "bottom center" }}
        className="bottom-0 left-1/2 "
      />

      <ScrollText />
      <div className="font-switzer font-extralight text-4xl whitespace-pre absolute right-[10%] top-1/2 -translate-y-1/2">
        {`Freelance
Photographer
& Videographer`}
      </div>
    </div>
  );
}

export default Hero;
