import { useElementAnimation } from '@/hooks/useElementAnimation';
import AnimatedText from '@/components/Other/AnimatedText/AnimatedText';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import { useEffect, useRef, useContext } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { TransitionContext } from '@/context/TransitionContext';

const HomeHero = () => {
  const { t } = useLanguage();
  const { timeline } = useContext(TransitionContext);
  const hrRef = useElementAnimation(true, 'hr', 0.05, 1.8);

  const imageRefSmall = useRef<HTMLDivElement | null>(null);
  const imageRefLarge = useRef<HTMLDivElement | null>(null);

  const firstWordRef = useRef<HTMLDivElement | null>(null);
  const secondWordRef = useRef<HTMLDivElement | null>(null);
  const thirdWordRef = useRef<HTMLDivElement | null>(null);
  const fullNameRef = useRef<HTMLDivElement | null>(null);
  const additionalText1Ref = useRef<HTMLDivElement | null>(null);
  const additionalText2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (imageRefSmall.current) {
      gsap.fromTo(
        imageRefSmall.current,
        { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
        {
          clipPath: 'inset(0% 0 0 0)',
          opacity: 1,
          duration: 2.8,
          ease: 'power3.out',
          delay: 0.5
        }
      );
    }

    if (imageRefLarge.current) {
      gsap.fromTo(
        imageRefLarge.current,
        { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
        {
          clipPath: 'inset(0% 0 0 0)',
          opacity: 1,
          duration: 2.0,
          ease: 'power3.out',
          delay: 0.5
        }
      );
    }

    [firstWordRef, secondWordRef, thirdWordRef, fullNameRef, additionalText1Ref, additionalText2Ref].forEach((ref, index) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power3.out',
            delay: 0 + index * 0.3
          }
        );
      }
    });

    timeline.add(
      gsap.to(imageRefSmall.current, {
        clipPath: 'inset(100% 0 0 0)',
        opacity: 0,
        duration: 1.5,
        ease: 'power3.in'
      }),
      0
    );

    timeline.add(
      gsap.to(imageRefLarge.current, {
        clipPath: 'inset(100% 0 0 0)',
        opacity: 0,
        duration: 1.5,
        ease: 'power3.in'
      }),
      0
    );

    [firstWordRef, secondWordRef, thirdWordRef, fullNameRef, additionalText1Ref, additionalText2Ref].forEach((ref) => {
      if (ref.current) {
        timeline.add(
          gsap.to(ref.current, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.in'
          }),
          0
        );
      }
    });

    timeline.add(
      gsap.to(hrRef.current, {
        opacity: 0,
        duration: 1.0,
        ease: 'power3.in',
      }),
      0
    );

  }, [hrRef, timeline]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className='relative lg:pt-28 pt-[4.6rem] pb-[1rem] bg-black dark:bg-offwhite text-white dark:text-black min-h-screen'>
      <div className='md:grid grid-cols-2 h-full'>
        <div className='col-span-1 relative md:px-16 px-4 flex flex-col justify-between'>
          <div ref={hrRef}>
            <div ref={firstWordRef}>
              <AnimatedText
                text={t('hero_first_word')}
                className="font-semibold md:text-7xl text-4xl"
                delay={1}
              />
            </div>
            <div ref={secondWordRef}>
              <AnimatedText
                text={t('hero_second_word')}
                className="font-semibold md:text-7xl text-4xl"
                delay={1}
              />
            </div>
            <hr className="my-1 md:my-4 w-3/4 border-t-2 border-white dark:border-gray-600 ml-[0.3rem]" />
            <div ref={thirdWordRef}>
              <AnimatedText
                text={t('hero_third_word')}
                className="font-medium md:text-3xl md:px-3 px-1 text-xl"
                delay={1}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center align-middle items-center md:hidden text-center profile-image pt-10">
            <div ref={imageRefSmall} className="profile-image overflow-hidden">
              <Image
                src="/profile-pic-avatar.jpg"
                alt="Profile Image"
                width={250}
                height={250}
                className="rounded-full"
              />
            </div>
            <div ref={fullNameRef}>
              <AnimatedText
                text={t('home_full_name')}
                className="font-medium md:text-7xl text-2xl mt-4 uppercase"
                delay={2.5}
              />
            </div>
          </div>
          <div className="md:absolute bottom-0 left-0 w-full md:px-16 mt-14">
            <div ref={additionalText1Ref}>
              <AnimatedText
                text={t('home_additional_text_1')}
                className="font-medium md:text-lg text-md uppercase"
                delay={1}
              />
            </div>
            <div ref={additionalText2Ref}>
              <AnimatedText
                text={t('home_additional_text_2')}
                className="font-medium md:text-lg text-md mt-2 uppercase"
                delay={1}
              />
            </div>
          </div>
        </div>

        <div className='hidden col-span-1 md:flex justify-end items-center md:px-16 px-4'>
          <div className="text-center profile-image">
            <div ref={imageRefLarge} className="profile-image overflow-hidden">
              <Image
                src="/profile-pic-avatar.jpg"
                alt="Profile Image"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
            <div ref={fullNameRef}>
              <AnimatedText
                text={t('home_first_name')}
                className="font-semibold md:text-7xl text-2xl mt-4 uppercase"
                delay={2.5}
              />
            </div>
            <div ref={fullNameRef}>
              <AnimatedText
                text={t('home_middle_name')}
                className="font-semibold md:text-7xl text-2xl mt-4 uppercase"
                delay={2.5}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeHero;
