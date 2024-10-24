import { useEffect, useRef, useContext } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';
import HomeMoreAbout from '@/components/Other/Home/HomeMoreAbout';
import { TransitionContext } from '@/context/TransitionContext';
import AnimatedText from '@/components/Other/AnimatedText/AnimatedText';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const { t } = useLanguage();
  const { timeline } = useContext(TransitionContext);
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
    timeline.add(
      gsap.to(titleRef.current, {
        y: 650,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.in',
        stagger: 0.08,
      }),
      0
    );

    aboutRefs.current.forEach((ref) => {
      if (ref) {
        const words = ref.querySelectorAll('span');
        timeline.add(
          gsap.to(words, {
            y: 50,
            opacity: 0,
            duration: 0.5,
            ease: 'power3.in',
            stagger: 0.02,
          }),
          0
        );
      }
    });

    timeline.add(
      gsap.to(numberRef.current, {
        opacity: 0,
        y: 100,
        duration: 0.5,
        ease: 'power2.in',
      }),
      0
    );
  }, [t, timeline]);

  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.7 }}
     className='py-24 dark:bg-offwhite text-white dark:text-black flex flex-col items-center'>
      <div ref={titleRef} className="uppercase mb-8">
        <AnimatedText
          text={t('about_title')}
          className="font-semibold md:text-7xl text-4xl"
          delay={1}
        />
      </div>

      <div className='flex flex-row w-full'>
        <div ref={numberRef} className="text-xl font-bold text-center md:px-16 pl-4">
          01
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
            {animateText(t('home_about'))}
            <p className="text-xl md:text-2xl font-medium pt-8 space-y-1">
              {animateText(t('home_about_1'))}
            </p>
          </div>

          <div
            ref={(el) => { aboutRefs.current[1] = el; }}
            className="text-xl md:text-2xl text-left space-y-1 font-medium my-8 font-neue"
          >
            {animateText(t('home_about_2'))}
          </div>

          <HomeMoreAbout />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
