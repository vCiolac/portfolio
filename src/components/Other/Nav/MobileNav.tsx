import { useState } from "react";
import { RiAlignJustify } from "react-icons/ri";
import { Sheet, SheetContent, SheetTrigger } from "@/components/Other/UI/sheet";
import AnimatedText from "../AnimatedText/AnimatedText";
import Nav from "@/components/Other/Nav/Nav";
import Socials from "@/components/Other/Socials/Socials";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import ThemeButton from "../ThemeButton/ThemeButton";
import Link from "next/link";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <RiAlignJustify className="cursor-pointer text-3xl text-white" />
      </SheetTrigger>
      <SheetContent side="bottom" className="h-screen p-0 dark:text-white">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-row items-center align-middle px-4 pt-6 space-x-12">
          <Link href="/" onClick={handleLinkClick}>
            <AnimatedText
              text={t('home_full_name')}
              className="font-semibold text-xl"
              delay={0.6}
            />
          </Link>
          <ThemeButton isMobile />
          <LanguageSwitcher isMobile />
        </motion.div>
        <div className="flex flex-col justify-end h-full text-start pb-8 px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-start gap-y-10"
          >
            <Nav
              containerStyles="flex flex-col items-start gap-y-6"
              linkStyles="text-5xl font-bold uppercase"
              onLinkClick={handleLinkClick}
            />
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-start gap-y-6 my-16"
          >
            <Socials containerStyles="flex gap-x-4" iconsStyles="text-3xl" />
          </motion.div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
