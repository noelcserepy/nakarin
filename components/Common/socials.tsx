import Image from "next/image";
import insta from "../../public/logos/instagram_logo.svg";
import linkedin from "../../public/logos/linkedin_logo.svg";

function Socials() {
  return (
    <div className="flex space-x-4">
      <div className="h-5 w-5 relative">
        <Image
          alt="LinkedIn Logo Icon"
          src={linkedin}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="h-5 w-5 relative">
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
