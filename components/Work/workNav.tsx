import Image from "next/image";
import { useRouter } from "next/router";
import arrowLeft from "../../public/graphics/arrow_left.svg";

function WorkNav() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/", "/", { scroll: false });
  };

  return (
    <div className="fixed top-8 px-8 flex justify-between w-full z-50">
      <button
        className="flex items-center space-x-4 cursor-pointer"
        onClick={handleBack}
      >
        <Image src={arrowLeft} alt="arrow left" />
        <p>Back</p>
      </button>
      <div>menu</div>
    </div>
  );
}

export default WorkNav;
