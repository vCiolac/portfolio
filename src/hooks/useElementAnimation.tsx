import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useElementAnimation = (
  trigger: boolean,
  selector: string,
  stagger = 0.05,
  delay = 0.5
) => {
  const ref = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    if (trigger && ref.current) {
      const elements = ref.current.querySelectorAll(selector);
      gsap.fromTo(
        elements,
        { y: 50, opacity: 0 },
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
  }, [trigger, selector, stagger, delay]);

  return ref;
};
