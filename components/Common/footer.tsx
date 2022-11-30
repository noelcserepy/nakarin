import Button from "./button";
import insta from "../../public/instagram_logo.svg";
import linkedin from "../../public/linkedin_logo.svg";
import Image from "next/image";

function Footer() {
  return (
    <div className="h-full flex flex-col justify-center mx-auto max-w-full px-8 sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-[90rem]">
      <div className="h-[60%] flex items-end">
        <h3 className="text-8xl text-light mb-12">Let's work together</h3>
      </div>

      <div className="border-b border-light h-0" />

      <div className="h-[40%]">
        <div className="flex justify-between mt-12">
          <div className="flex space-x-8">
            <Button text="nakarin@nakarin.ch" size="big" shade="light" />
            <Button text="+41 76  123  45 67" size="big" shade="light" />
          </div>
          <div className="flex justify-end space-x-4">
            <Image alt="LinkedIn Logo Icon" src={linkedin} />
            <Image alt="Instagram Logo Icon" src={insta} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
