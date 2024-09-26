import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const HomeAbout = () => {
  const { t } = useLanguage();
  const aboutRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  useEffect(() => {
    aboutRefs.current.forEach((ref) => {
      if (ref) {
        const words = ref.querySelectorAll('span');

        gsap.fromTo(
          words,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.2,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: ref,
              start: 'top 85%',
              end: 'bottom 80%',
              markers: false,
            },
          }
        );
      }
    });
  }, []);

  return (
    <section className='md:py-16 h-[190vh] md:h-[110vh] lg:h-[85vh] dark:bg-offwhite text-white dark:text-black'>
      <div className='container mx-auto px-4 md:px-20'>
        <div ref={(el) => {
          aboutRefs.current[0] = el;
        }}
          className="text-3xl text-left mb-8 uppercase font-neue">
          {animateText(t('home_about'))}
          <p className="text-3xl mt-8">
            {animateText(t('home_about_1'))}
          </p>
        </div>
        <div ref={(el) => {
          aboutRefs.current[1] = el;
        }}
          className="text-3xl text-left mb-8 uppercase font-neue">
          {animateText(t('home_about_2'))}
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
