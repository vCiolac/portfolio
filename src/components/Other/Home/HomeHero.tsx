import { useElementAnimation } from '@/hooks/useElementAnimation';
import AnimatedText from '@/components/Other/AnimatedText/AnimatedText';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

const HomeHero = () => {
  const { t } = useLanguage();
  const hrRef = useElementAnimation(true, 'hr', 0.05, 1.8);

  const imageRefSmall = useRef(null);
  const imageRefLarge = useRef(null);

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
          delay: 2.2
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
          duration: 2.8,
          ease: 'power3.out',
          delay: 2.2
        }
      );
    }
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className='relative lg:pt-28 pt-[4.6rem] pb-[1rem] bg-black dark:bg-offwhite text-white dark:text-black min-h-screen'>
      <div className='md:grid grid-cols-2 h-full'>
        <div className='col-span-1 relative md:px-16 px-4 flex flex-col justify-between'>
          <div ref={hrRef}>
            <AnimatedText
              text={t('hero_first_word')}
              className="font-semibold md:text-7xl text-4xl"
              delay={1}
            />
            <AnimatedText
              text={t('hero_second_word')}
              className="font-semibold md:text-7xl text-4xl"
              delay={1}
            />
            <hr className="my-1 md:my-4 w-3/4 border-t-2 border-white dark:border-gray-600 ml-[0.3rem]" />
            <AnimatedText
              text={t('hero_third_word')}
              className="font-medium md:text-3xl md:px-3 px-1 text-xl"
              delay={1}
            />
          </div>
          <div className="flex flex-col justify-center align-middle items-center md:hidden text-center profile-image pt-10">
            <div ref={imageRefSmall} className="profile-image overflow-hidden">
              <Image
                src="/profile-pic.png"
                alt="Profile Image"
                width={250}
                height={250}
                className="rounded-full"
              />
            </div>
            <AnimatedText
              text={t('home_full_name')}
              className="font-medium md:text-7xl text-2xl mt-4 uppercase"
              delay={2.5}
            />
          </div>
          <div className="md:absolute bottom-0 left-0 w-full md:px-16 mt-14">
            <AnimatedText
              text={t('home_additional_text_1')}
              className="font-medium md:text-lg text-md uppercase"
              delay={1}
            />
            <AnimatedText
              text={t('home_additional_text_2')}
              className="font-medium md:text-lg text-md mt-2 uppercase"
              delay={1}
            />
          </div>
        </div>

        <div className='hidden col-span-1 md:flex justify-end items-center md:px-16 px-4'>
          <div className="text-center profile-image">
            <div ref={imageRefLarge} className="profile-image overflow-hidden">
              <Image
                src="/profile-pic.png"
                alt="Profile Image"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
            <AnimatedText
              text={t('home_first_name')}
              className="font-semibold md:text-7xl text-2xl mt-4 uppercase"
              delay={2.5}
            />
            <AnimatedText
              text={t('home_middle_name')}
              className="font-semibold md:text-7xl text-2xl mt-4 uppercase"
              delay={2.5}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeHero;
