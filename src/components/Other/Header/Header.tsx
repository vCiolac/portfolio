import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { MobileNav } from "../Nav/MobileNav";
import Nav from "../Nav/Nav";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import ThemeButton from "../ThemeButton/ThemeButton";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const textRef = useRef<(HTMLSpanElement | null)[]>([]);
  const text = "Victor Ciolac";
  
  useEffect(() => {
    textRef.current.forEach((letter, index) => {
      if (letter) {
        letter.style.transition = `color 0.2s ease ${index * 0.01}s`;
      }
    });
  }, []);

  const handleMouseEnter = () => {
    textRef.current.forEach((letter, index) => {
      if (letter) {
        setTimeout(() => {
          letter.style.color = '#ec965b';
        }, index * 50);
      }
    });
  };

  const handleMouseLeave = () => {
    textRef.current.forEach((letter, index) => {
      if (letter) {
        setTimeout(() => {
          letter.style.color = 'white';
        }, index * 50);
      }
    });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 2.2 }}
      className="bg-transparent fixed top-0 left-0 w-full z-30 pt-6 md:px-16 px-4"
    >
      <div className="container mx-auto">
        <div className="md:grid md:grid-cols-3 items-center flex justify-between">
          <Link href="/">
            <div className="flex flex-row">
              <h2
                className="text-white dark:text-black text-2xl font-bold font-abril"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {text.split('').map((letter, index) => (
                  <span
                    key={index}
                    ref={(el) => {
                      textRef.current[index] = el;
                    }}
                    style={{ display: 'inline-block', transition: 'color 0.2s ease' }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </h2>
            </div>
          </Link>

          <div className="hidden xl:block">
            <Nav
              containerStyles="flex gap-x-6 items-center justify-center"
              linkStyles="relative hover:text-primary transition-all text-white text-xl font-abril dark:text-black"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <ThemeButton />
            <LanguageSwitcher />
          </div>

          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
