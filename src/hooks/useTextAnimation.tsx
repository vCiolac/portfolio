import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useTextAnimation = (trigger: boolean, stagger = 0.05, delay = 1.5) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trigger && ref.current) {
      const elements = ref.current.querySelectorAll('.flow-char');
      gsap.fromTo(
        elements,
        { y: '115%', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger,
          duration: 2,
          ease: 'power3.out',
          delay,
        }
      );
    }
  }, [trigger, stagger, delay]);

  return ref;
};
