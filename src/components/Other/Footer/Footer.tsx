// components/Footer.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Socials from "../Socials/Socials";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto space-y-4 flex md:flex-row flex-col justify-between md:items-center md:px-16 px-4 font-neue">
        <div className="text-left font-medium">
          <p className="text-xl">
            {t("home_full_name")}
          </p>
          <p className="text-xl">
            {t("description")}
          </p>
        </div>

        <div className="self-center md:self-end py-1">
          <Socials
            containerStyles="flex gap-x-6 mx-auto"
            iconsStyles="text-white/70 text-[20px] hover:text-primary transition-all"
          />
        </div>

        <div className="md:text-right font-medium">
          <p className="text-md md:text-xl">
            © {new Date().getFullYear()}
          </p>
          <p className="text-md md:text-xl">
            Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
