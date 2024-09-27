import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';
import HomeMoreAbout from './HomeMoreAbout';

gsap.registerPlugin(ScrollTrigger);

const HomeAbout = () => {
  const { t } = useLanguage();
  const aboutRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRef = useRef<HTMLDivElement | null>(null); // Ref para o "01"

  const animateText = (text: string) => {
    const words = text.split(' ').map((word, index) => {
      return (
        <span key={index} className="inline-block opacity-0 whitespace-nowrap">
          {word}
        </span>
      );
    });

    return (
      <>
        {words.reduce<JSX.Element | null>((prev, curr, index) => {
          return (
            <>
              {prev}
              {curr}
              {index < words.length - 1 && <span>&nbsp;</span>}
            </>
          );
        }, null)}
      </>
    );
  };

  const triggerAnimation = () => {
    aboutRefs.current.forEach((ref) => {
      if (ref) {
        const words = ref.querySelectorAll('span');

        gsap.fromTo(
          words,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 5.2,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: ref,
              start: 'top 85%',
              end: 'bottom 80%',
              markers: false,
              scrub: true,
            },
          }
        );
      }
    });

    if (numberRef.current) {
      gsap.fromTo(
        numberRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: numberRef.current,
            start: 'top 85%',
            end: 'bottom 75%',
            markers: false,
          },
        }
      );
    }
  };

  useEffect(() => {
    triggerAnimation();
  }, [t]);

  return (
    <section className='py-8 dark:bg-offwhite text-white dark:text-black flex flex-row'>
      <div
        ref={numberRef}
        className="text-xl font-bold text-center md:px-16 pl-4"
      >
        01
      </div>
      <div className='container mx-auto pl-4 pr-16 md:pr-40 md:pl-52'>
        <div
          ref={(el) => {
            aboutRefs.current[0] = el;
          }}
          className="text-3xl md:text-4xl font-medium text-left space-y-1 uppercase font-neue"
        >
          {animateText(t('home_about'))}
          <p className="text-3xl md:text-4xl font-medium pt-8 space-y-1">
            {animateText(t('home_about_1'))}
          </p>
        </div>
        <div
          ref={(el) => {
            aboutRefs.current[1] = el;
          }}
          className="text-3xl text-left md:text-4xl space-y-1 font-medium my-8 uppercase font-neue"
        >
          {animateText(t('home_about_2'))}
        </div>
        <HomeMoreAbout />
      </div>
    </section>
  );
};

export default HomeAbout;
