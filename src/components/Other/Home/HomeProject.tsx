import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';
import { FiArrowUpRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/data/projects';

gsap.registerPlugin(ScrollTrigger);

const HomeProject = () => {
  const { t } = useLanguage();
  const projectRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (projectRef.current) {
      gsap.fromTo(
        projectRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: projectRef.current,
            start: 'top 85%',
            end: 'bottom 60%',
            scrub: true,
          },
        }
      );
    }

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
            end: 'bottom 75%',
            scrub: true,
          },
        }
      );
    }

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 95%',
            end: 'bottom 85%',
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
          03
        </div>
        <div ref={projectRef} className="container mx-auto px-2 md:pr-40 md:pl-52">
          <h2 className="text-xl md:text-2xl font-medium uppercase font-neue md:mb-8">
            {t('home_personal_project')}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-16 px-4">
        <div ref={textRef} className="flex flex-col justify-between">
          <div>
            <h3 className="text-4xl md:text-7xl uppercase font-neue font-medium">{t('personal_project_title')}</h3>
            <p className="text-lg md:text-xl uppercase font-neue font-medium my-8">{t('personal_project_description')}</p>
          </div>
          <div className='flex flex-row gap-x-8'>
            <Link
              target="_blank"
              href={projectsData[0].link}
              className="flex items-center text-lg md:text-xl font-neue animate-underline dark:dark-animate-underline"
            >
              {t('view_website')} <FiArrowUpRight className="ml-2" />
            </Link>
            {/* <Link
              target="_blank"
              href="#"
              className="flex items-center text-lg md:text-xl font-neue animate-underline dark:dark-animate-underline"
            >
              {t('view_github')} <FiArrowUpRight className="ml-2" />
            </Link> */}
          </div>
        </div>

        <div ref={imageRef} className="relative justify-self-center">
          <Image
            src={projectsData[0].image}
            alt="Project Image"
            width={560}
            height={560}
            className=""
          />
        </div>
        <div className="mt-16 ">
          <Link
            href="/projects"
            className="text-lg md:text-xl font-neue animate-border dark:dark-animate-border"
          >
            {t('see_all_projects')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProject;
