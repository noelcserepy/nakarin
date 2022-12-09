import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Button from "../Common/button";
import arrowLeft from "../../public/graphics/arrow_left.svg";
import menuIcon from "../../public/graphics/menu_icon.svg";

function Nav() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/", undefined, { scroll: true });
  };
  return (
    <div className="fixed top-8 px-8 flex justify-between w-full z-50">
      <button
        className="flex items-center space-x-4 cursor-pointer"
        onClick={handleBack}
      >
        <Image src={arrowLeft} alt="arrow left" />
        <p className="text-paragraph">Back</p>
      </button>
      <div className="bg-light flex items-center justify-center p-2 rounded aspect-square">
        <Image src={menuIcon} alt="menu icon" />
      </div>
    </div>
  );
}

export default Nav;
