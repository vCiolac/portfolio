import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const HomeMoreAbout = () => {
  const { t } = useLanguage();
  const moreAboutRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    moreAboutRefs.current.forEach((ref) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref,
              start: 'top 85%',
              end: 'bottom 60%',
              markers: false,
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="container mx-auto py-8 md:px-20 text-white">
      <div ref={(el) => { moreAboutRefs.current[0] = el; }} className="text-xl text-left mb-8 font-medium font-neue">
        {t('home_about_3')}
      </div>
      <div ref={(el) => { moreAboutRefs.current[1] = el; }} className="text-xl text-left mb-8 font-medium font-neue">
        {t('home_about_4')}
      </div>
      <div ref={(el) => {
        moreAboutRefs.current[2] = el;
      }}
        className="text-xl text-left mb-8 font-medium font-neue">
        <Link href="/about" className="underline">
          Saiba mais sobre mim
        </Link>
      </div>
    </div>
  );
};

export default HomeMoreAbout;
