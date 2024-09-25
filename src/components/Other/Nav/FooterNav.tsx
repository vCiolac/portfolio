import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { NavInterface } from "@/interfaces/NavInterface";

const FooterNav = ({ containerStyles, linkStyles, underlineStyles }: NavInterface) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      Linkedin
    </nav>
  );
};

export default FooterNav;
