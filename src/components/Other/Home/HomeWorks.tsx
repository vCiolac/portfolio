import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';
import { FiArrowUpRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const HomeWorks = () => {
  const { t } = useLanguage();
  const worksRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (worksRef.current) {
      gsap.fromTo(
        worksRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: worksRef.current,
            start: 'top 85%',
            end: 'bottom 60%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section className="py-16 dark:bg-offwhite text-white dark:text-black flex flex-col">
      <div className='flex flex-row mb-16'>
        <div className="text-xl font-bold text-center md:px-16 px-4">
          02
        </div>
        <div ref={worksRef} className="container mx-auto px-2 md:pr-40 md:pl-52">
          <h2 className="text-xl md:text-2xl font-medium uppercase font-neue mb-8">
            {t('home_works')}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-16 px-4">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-2xl md:text-7xl uppercase font-neue font-medium">{t('work_title')}</h3>
            <p className="text-lg md:text-2xl uppercase font-neue font-medium my-8">{t('work_description')}</p>
          </div>
          <Link
            target="blank"
            href="#"
            className="flex items-center text-lg md:text-xl font-neue hover:underline"
          >
            {t('view_project')} <FiArrowUpRight className="ml-2" />
          </Link>
        </div>

        <div className="relative">
          <Image
            src="/path-to-project-image.jpg"
            alt="Project Image"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeWorks;
