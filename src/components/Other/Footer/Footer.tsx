import Socials from "@/components/Other/Socials/Socials";
import FooterNav from "../Nav/FooterNav";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-2 text-center">
      <div className="flex flex-col items-center gap-4 mb-2">
        <Socials
          containerStyles="flex gap-x-6 mx-auto"
          iconsStyles="text-white/70 text-[20px] hover:text-primary transition-all"
        />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <FooterNav
            containerStyles="flex gap-x-8 items-center"
            linkStyles="relative hover:text-primary transition-all"
            underlineStyles=""
          />
        </div>
        <p className="text-xs">
          &copy; 2024 Frabrica de Sites. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
