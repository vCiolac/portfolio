import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const HomeContact = () => {
  const { t } = useLanguage();
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contactRef.current) {
      gsap.fromTo(
        contactRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contactRef.current,
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
          04
        </div>
        <div ref={contactRef} className="container mx-auto px-2 md:pr-40 md:pl-52">
          <h2 className="text-xl md:text-2xl font-medium uppercase font-neue mb-8">
            {t('home_contact')}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-16 px-4">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-2xl md:text-7xl uppercase font-neue font-medium">{t('contact_title')}</h3>
            <p className="text-lg md:text-2xl uppercase font-neue font-medium my-8">{t('contact_description')}</p>
          </div>
          <div className="mt-4">
            <Link
              href="#"
              className="text-lg md:text-xl font-neue animate-border dark:dark-animate-border"
            >
              {t('home_contact')}
            </Link>
          </div>
        </div>
        <div className="relative justify-self-center">
          <Image
            src="/contact.jpg"
            alt="Project Image"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
