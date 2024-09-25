import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [hovered, setHovered] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-8 h-6 rounded-full flex items-center justify-center text-white font-bold cursor-pointer overflow-hidden"
      whileTap={{ scale: 0.9 }}
    >
      <span className={`absolute inset-0 bg-cover bg-center transition-all duration-300
        ${hovered ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: `url(/flags/${language === 'pt' ? 'us' : 'br'}.png)`,
        }}
      ></span>
      <span className="relative z-10">
        {language === 'pt' ? 'PT' : 'EN'}
      </span>
    </motion.button>
  );
};

export default LanguageSwitcher;
