import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import AnimatedText from '../AnimatedText/AnimatedText';

gsap.registerPlugin(ScrollTrigger);

const SessionFour = () => {
  const { t } = useLanguage();
  const aboutRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);

  const animateText = (text: string) => {
    const words = text.split(' ').map((word, index) => (
      <span key={index} className="inline-block opacity-0 whitespace-nowrap">
        {word}
      </span>
    ));
    return words.reduce<JSX.Element | null>((prev, curr, index) => (
      <>
        {prev}
        {curr}
        {index < words.length - 1 && <span>&nbsp;</span>}
      </>
    ), null);
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

    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: 'power3.out',
        }
      );
    }
  };

  useEffect(() => {
    triggerAnimation();
  }, [t]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.7 }}
      className='py-24 dark:bg-offwhite text-white dark:text-black flex flex-col max-w-full'>
      <div ref={titleRef} className="uppercase mb-8 px-4">
        <AnimatedText
          text={t('about_fourth')}
          className="font-semibold md:text-5xl text-2xl"
          delay={1}
        />
        <AnimatedText
          text={t('about_fourth2')}
          className="font-semibold md:text-5xl text-2xl"
          delay={1}
        />
      </div>
      <div className='flex flex-row w-full'>
      <div
          ref={numberRef}
          className="text-xl font-bold text-center md:px-16 pl-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/jogos.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'black',
            borderRadius: '10px',
          }}
        >
          04
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className='container mx-auto pl-4 pr-14 md:pr-40 md:pl-52'
        >
          <div
            ref={(el) => { aboutRefs.current[0] = el; }}
            className="text-xl md:text-2xl font-medium text-left space-y-1 font-neue"
          >
            {animateText(t('about_text6'))}
            <p className="text-xl md:text-2xl font-medium pt-8 space-y-1">
              {animateText(t('about_text7'))}
            </p>
            <p className="text-xl md:text-2xl font-medium pt-8 space-y-1">
              {animateText(t('about_text8'))}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SessionFour;
