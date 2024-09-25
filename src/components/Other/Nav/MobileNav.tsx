import { useState } from "react";
import { RiAlignJustify } from "react-icons/ri";
import Link from "next/link";
import Nav from "@/components/Other/Nav/Nav";
import Socials from "@/components/Other/Socials/Socials";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/Other/UI/sheet";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <RiAlignJustify className="cursor-pointer text-3xl text-white" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-10">
            <Link
              href="budget"
              className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded-md mt-8 hover:scale-105 transition-all"
              onClick={handleLinkClick}
            >
              Solicitar Orçamento
            </Link>
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
              onLinkClick={handleLinkClick}
            />
          </div>
          <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
};
