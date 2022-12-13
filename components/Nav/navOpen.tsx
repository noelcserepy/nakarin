import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { motion } from "framer-motion";
import MenuItems from "./menuItems";

const modalVariants = {
  open: {
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
  closed: {
    x: "100%",
    transition: {
      ease: "easeIn",
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
    <motion.div
      className="h-full min-w-[400px] bg-light flex flex-col justify-start fixed right-0 top-0 z-50"
      initial="closed"
      animate="open"
      exit="closed"
      variants={modalVariants}
    >
      <div
        className="top-8 right-8 absolute cursor-pointer"
        onClick={() => setOpen(false)}
      >
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.600098 1.79985C0.600098 1.1361 1.15311 0.599854 1.8376 0.599854H16.6876C17.3721 0.599854 17.9251 1.1361 17.9251 1.79985C17.9251 2.4636 17.3721 2.99985 16.6876 2.99985H1.8376C1.15311 2.99985 0.600098 2.4636 0.600098 1.79985ZM3.0751 7.79985C3.0751 7.1361 3.62811 6.59985 4.3126 6.59985H19.1626C19.8471 6.59985 20.4001 7.1361 20.4001 7.79985C20.4001 8.4636 19.8471 8.99985 19.1626 8.99985H4.3126C3.62811 8.99985 3.0751 8.4636 3.0751 7.79985ZM17.9251 13.7999C17.9251 14.4636 17.3721 14.9999 16.6876 14.9999H1.8376C1.15311 14.9999 0.600098 14.4636 0.600098 13.7999C0.600098 13.1361 1.15311 12.5999 1.8376 12.5999H16.6876C17.3721 12.5999 17.9251 13.1361 17.9251 13.7999Z"
            fill={`${dark ? "#ECEEEF" : "#090B0C"}`}
          />
        </svg>
      </div>
      <MenuItems />
    </motion.div>
  );
}

export default NavOpen;
