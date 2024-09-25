import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { NavInterface } from "@/interfaces/NavInterface";
import { links } from "@/data/nav";

const Nav = ({ containerStyles, linkStyles, underlineStyles, onLinkClick }: NavInterface) => {
  const path = usePathname();
  const { language } = useLanguage();

  const currentLinks = links[language];

  return (
    <nav className={`${containerStyles}`}>
      {currentLinks.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${linkStyles}`}
          aria-label={link.name}
          onClick={onLinkClick}
        >
          {link.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underlineStyles}`}
            />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
