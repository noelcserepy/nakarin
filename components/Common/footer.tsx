import Button from "./button";
import Socials from "./socials";

function Footer() {
  return (
    <div className="h-full flex flex-col justify-center mx-auto max-w-full px-8 sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-[90rem]">
      <div className="h-[60%] flex items-end ">
        <h3 className="text-6xl md:text-8xl text-light mb-12 text-center md:text-start">
          {"Let's work together"}
        </h3>
      </div>

      <div className="border-b border-light h-0 " />

      <div className="h-[40%]">
        <div className="flex flex-col items-center md:flex-row justify-between mt-12 gap-4">
          <div className="flex flex-col md:flex-row gap-2">
            <Button text="saisorn@nakarin.ch" size="small" shade="light" />
            <Button text="+41 76  123  45 67" size="small" shade="light" />
          </div>
          <Socials />
        </div>
      </div>
    </div>
  );
}

export default Footer;
