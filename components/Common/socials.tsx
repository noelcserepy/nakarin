import { useRouter } from "next/router";
import Image from "next/image";
import insta from "../../public/logos/instagram_logo.svg";
import linkedin from "../../public/logos/linkedin_logo.svg";

function Socials() {
  const router = useRouter();

  return (
    <div className="flex space-x-4">
      <div
        className="h-5 w-5 relative cursor-pointer"
        onClick={() =>
          router.push("https://www.linkedin.com/in/nakarin-saisorn-445408167/")
        }
      >
        <Image
          alt="LinkedIn Logo Icon"
          src={linkedin}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div
        className="h-5 w-5 relative cursor-pointer"
        onClick={() => router.push("https://www.instagram.com/nakarinjames/")}
      >
        <Image
          alt="Instagram Logo Icon"
          src={insta}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
export default Socials;
