import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { motion } from "framer-motion";
import MenuItems from "./menuItems";
import Socials from "../Common/socials";

const modalVariants = {
  hidden: {
    x: "100%",
    transition: {
      ease: "easeIn",
    },
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.3,
      ease: "easeOut",
      duration: 0.4,
    },
  },
};
const bgVariants = {
  hidden: {
    opacity: 0,
    transition: {
      ease: "easeIn",
    },
  },
  visible: {
    opacity: 0.5,
    transition: {
      delay: 0.3,
      ease: "easeOut",
      duration: 0.4,
    },
  },
};

function NavOpen({
  back = true,
  expanded = false,
  dark = false,
  handleBack,
  setOpen,
}: {
  back?: boolean;
  expanded?: boolean;
  dark?: boolean;
  handleBack: MouseEventHandler<HTMLButtonElement>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <motion.div
        className="w-screen h-screen fixed top-0 left-0 bottom-0 right-0 z-40 overflow-hidden bg-dark"
        variants={bgVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        key="bg"
        onClick={() => setOpen(false)}
      />

      <motion.div
        className="h-full w-full sm:w-[400px] bg-light flex flex-col justify-evenly fixed right-0 top-0 z-50 rounded-l px-16 py-16 overflow-hidden"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div
          className="top-10 right-10 absolute cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <svg
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-0.07500076293945312 95.92500305175781 320.1499938964844 320.14996337890625"
            fill="none"
          >
            <path
              fill={`${dark ? "#ECEEEF" : "#090B0C"}`}
              d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
            ></path>
          </svg>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-paragraph text-dark">Navigation</div>
          <div className="border-t-[1px] border-dark mb-8" />
          <MenuItems />
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-paragraph text-dark">Socials</div>
          <div className="border-t-[1px] border-dark" />
          <Socials dark />
        </div>
      </motion.div>
    </>
  );
}

export default NavOpen;
