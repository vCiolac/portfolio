import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const IntroAnimation: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isClient, setIsClient] = useState(false);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && introRef.current) {
      gsap.fromTo(
        '.intro-item',
        { y: 0 },
        {
          y: '-100%',
          duration: 1,
          stagger: 0.1,
          ease: 'power3.inOut',
          onComplete: onComplete,
        }
      );
    }
  }, [isClient, introRef, onComplete]);

  return (
    <>
      {isClient && (
        <div
          ref={introRef}
          className="fixed left-0 top-0 z-50 h-screen w-screen overflow-hidden bg-transparent"
        >
          <div className="intro-item fixed left-0 top-0 z-50 h-full w-full bg-black" />
          <div className="intro-item fixed left-0 top-0 z-40 h-full w-full bg-[#4c2207]" />
          <div className="intro-item fixed left-0 top-0 z-30 h-full w-full bg-[#98430e]" />
          <div className="intro-item fixed left-0 top-0 z-20 h-full w-full bg-[#e36414]" />
          <div className="intro-item fixed left-0 top-0 z-10 h-full w-full bg-[#ec965b]" />
          <div className="intro-item fixed left-0 top-0 h-full w-full bg-[#f5c89c]" />
        </div>
      )}
    </>
  );
};

export default IntroAnimation;
