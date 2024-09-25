import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { MobileNav } from "../Nav/MobileNav";
import Nav from "../Nav/Nav";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import ThemeButton from "../ThemeButton/ThemeButton";

const Header = () => {
  return (
    <header
      className="bg-transparent fixed top-0 left-0 w-full z-30 pt-6 md:px-16 px-4 ">
      <div className="container mx-auto">
        <div className="md:grid md:grid-cols-3 items-center flex justify-between">
          <div className="flex flex-row">
            <h2 className="text-white dark:text-black text-2xl font-bold font-abril">Victor Ciolac</h2>
          </div>

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
    </header>
  )
}

export default Header
