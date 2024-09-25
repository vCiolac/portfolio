import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import AnimatedText from '@/components/Other/AnimatedText/AnimatedText';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const HomeAbout = () => {
  const { t } = useLanguage();
  const aboutRef = useRef(null);

  useEffect(() => {
    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: aboutRef.current,
            markers: true,
            start: 'top 75%',
            end: 'bottom 25%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section ref={aboutRef} className='py-28 dark:bg-gray-100 text-white dark:text-black'>
      <div className='container mx-auto px-4'>
        <AnimatedText
          text={t('about_me')}
          className="font-semibold lg:text-6xl text-3xl text-center mb-8"
        />
        <p className='text-lg lg:text-2xl text-center'>
          {t('about_description')}
        </p>
      </div>
    </section>
  );
};

export default HomeAbout;
