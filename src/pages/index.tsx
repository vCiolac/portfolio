import { useState, useEffect } from 'react';
import Seo from "@/components/Other/SEO";
import Home from "@/components/Templates/Home/Home";
import IntroAnimation from '@/components/Other/IntroAnimation/IntroAnimation';
import { useLanguage } from '@/context/LanguageContext';
import { gsap } from 'gsap';

const HomePage = () => {
  const [showIntro, setShowIntro] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const introDuration = 1;
    const transitionOverlap = 0.01; 

    const timer = setTimeout(() => {
      gsap.to(".home-content", { opacity: 1, duration: 0.5 });
    }, (introDuration - transitionOverlap) * 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    setShowIntro(false);
  };

  return (
    <>
      <Seo title={t('greeting')} description={t('description')} />
      
      {showIntro && (
        <IntroAnimation onComplete={handleAnimationComplete} />
      )}

      <div className="home-content" style={{ opacity: 0 }}>
        <Home />
      </div>
    </>
  );
};

export default HomePage;
