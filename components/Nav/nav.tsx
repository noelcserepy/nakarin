import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Button from "../Common/button";
import arrowLeft from "../../public/graphics/arrow_left.svg";
import menuIcon from "../../public/graphics/menu_icon.svg";

function Nav({
  back = true,
  expanded = false,
  dark = false,
}: {
  back?: boolean;
  expanded?: boolean;
  dark?: boolean;
}) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div className={`fixed top-8 px-8 flex justify-between w-full z-50 `}>
      {back ? (
        <button
          className="flex items-center space-x-4 cursor-pointer"
          onClick={handleBack}
        >
          <svg
            width="22"
            height="8"
            viewBox="0 0 22 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659729 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM1 4.5L22 4.5L22 3.5L1 3.5L1 4.5Z"
              fill={`${dark ? "#090B0C" : "#ECEEEF"}`}
            />
          </svg>

          <p className={`text-paragraph ${dark ? "text-dark" : "text-light"}`}>
            Back
          </p>
        </button>
      ) : (
        <div className="w-16" />
      )}
      {expanded ? (
        <div className="flex justify-end items-center gap-x-8">
          <Button shade="light" size="small" text="Work" />
          <Button shade="light" size="small" text="About" />
          <Button shade="lightBorder" size="small" text="Contact" />
        </div>
      ) : (
        <div
          className={`${
            dark ? "bg-dark" : "bg-light"
          } flex items-center justify-center p-2 rounded aspect-square`}
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
      )}
    </div>
  );
}

export default Nav;
