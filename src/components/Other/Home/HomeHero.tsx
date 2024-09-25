import { useElementAnimation } from '@/hooks/useElementAnimation';
import AnimatedText from '@/components/Other/AnimatedText/AnimatedText';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HomeHero = () => {
  const { t } = useLanguage();
  const hrRef = useElementAnimation(true, 'hr', 0.05, 1.8);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
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
    <section className='relative pt-28 pb-[1rem] bg-black dark:bg-white text-white h-screen'>
      <div className='grid grid-cols-2 h-full'>
        <div className='col-span-1 relative lg:px-14 px-4 flex flex-col justify-between'>
          <div ref={hrRef}>
            <AnimatedText
              text={t('hero_first_word')}
              className="font-semibold lg:text-7xl text-4xl"
            />
            <AnimatedText
              text={t('hero_second_word')}
              className="font-semibold lg:text-7xl text-4xl"
            />
            <hr className="my-4 w-3/4 border-t-2 border-white ml-[0.3rem]" />
            <AnimatedText
              text={t('hero_third_word')}
              className="font-semibold lg:text-3xl lg:px-3 px-1 text-xl"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full lg:px-14 px-4">
            <AnimatedText
              text={t('home_additional_text_1')}
              className="font-semibold lg:text-lg text-md uppercase"
            />
            <AnimatedText
              text={t('home_additional_text_2')}
              className="font-semibold lg:text-lg text-md mt-2 uppercase"
            />
          </div>
        </div>

        <div className='col-span-1 flex justify-end items-center lg:px-14 px-4'>
          <div className="text-center profile-image">
            <div ref={imageRef} className="profile-image overflow-hidden">
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
              className="font-semibold lg:text-7xl text-2xl mt-4 uppercase"
              delay={2.5}
            />
            <AnimatedText
              text={t('home_middle_name')}
              className="font-semibold lg:text-7xl text-2xl mt-4 uppercase"
              delay={2.5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
