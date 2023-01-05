import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import NavClosed from "./navClosed";
import NavOpen from "./navOpen";

function Nav({
  back = true,
  expanded = false,
  dark = false,
  backRoute,
}: {
  back?: boolean;
  expanded?: boolean;
  dark?: boolean;
  backRoute?: string;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleBack = () => {
    if (backRoute) {
      router.push(backRoute);
    } else {
      router.back();
    }
  };

  const navProps = {
    back: back,
    expanded: expanded,
    dark: dark,
    handleBack: handleBack,
    setOpen: setOpen,
  };

  return (
    <AnimatePresence>
      {open ? (
        <NavOpen {...navProps} key="open" />
      ) : (
        <NavClosed {...navProps} key="closed" />
      )}
    </AnimatePresence>
  );
}

export default Nav;
