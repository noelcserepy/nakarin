import { useRouter } from "next/router";
import Image from "next/image";
import insta from "../../public/logos/instagram_logo.svg";
import instaDark from "../../public/logos/instagram_logo_dark.svg";
import linkedin from "../../public/logos/linkedin_logo.svg";
import linkedinDark from "../../public/logos/linkedin_logo_dark.svg";

function Socials({ dark = false }: { dark?: boolean }) {
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
          src={dark ? linkedinDark : linkedin}
          fill
          style={{ objectFit: "contain" }}
          sizes="10vw"
        />
      </div>
      <div
        className="h-5 w-5 relative cursor-pointer"
        onClick={() => router.push("https://www.instagram.com/nakarinjames/")}
      >
        <Image
          alt="Instagram Logo Icon"
          src={dark ? instaDark : insta}
          fill
          style={{ objectFit: "contain" }}
          sizes="10vw"
        />
      </div>
    </div>
  );
}
export default Socials;
