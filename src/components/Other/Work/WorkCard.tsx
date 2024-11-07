import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FiArrowUpRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import TypeWriter from '@/hooks/TypeWriter';

gsap.registerPlugin(ScrollTrigger);

interface WorkCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ title, description, image, link }) => {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const [resetTitle, setResetTitle] = useState(false);
  const [resetDescription, setResetDescription] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 90%',
            end: 'bottom 70%',
            scrub: true,
            onEnter: () => {
              setResetTitle(true);
              setResetDescription(true);
            },
            onLeaveBack: () => {
              setResetTitle(false);
              setResetDescription(false);
            },
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
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 95%',
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
            end: 'bottom 75%',
            scrub: false,
          },
        }
      );
    }
    ScrollTrigger.refresh();
  }, []);

  return (
    <div
      ref={cardRef}
      className="py-8 grid grid-cols-1 md:grid-cols-2 gap-8 px-1 min-h-[30rem]"
    >
      <div ref={textRef} className="flex flex-col justify-between">
        <div>
          <h3 className="text-4xl md:text-7xl uppercase font-neue font-medium">
            {title}
          </h3>
          <p className="text-lg md:text-xl font-neue font-medium my-8">
            <TypeWriter text={description || ''} speed={8} reset={resetDescription} />
          </p>
        </div>
        <div className="flex flex-row gap-x-8">
          <Link
            target="_blank"
            href={link}
            className="flex items-center text-lg md:text-xl font-neue animate-underline dark:dark-animate-underline"
          >
            {t('view_website')} <FiArrowUpRight className="ml-2" />
          </Link>
        </div>
      </div>

      <div ref={imageRef} className="relative justify-self-center">
        <Image
          src={image}
          alt={title}
          width={560}
          height={560}
          className="max-h-96 object-cover"
        />
      </div>
    </div>
  );
};

export default WorkCard;
