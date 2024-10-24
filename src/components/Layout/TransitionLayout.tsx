import { useState, useContext, useRef } from "react";
import { TransitionContext } from "@/context/TransitionContext";
import { ReactNode } from "react";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import gsap from "gsap";

const TransitionLayout = ({ children }: { children: ReactNode }) => {
  const { timeline } = useContext(TransitionContext);
  const [displayChildren, setDisplayChildren] = useState(children);
  const el = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (children !== displayChildren) {
      if (timeline.duration() === 0) {
        gsap.to(el.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            setDisplayChildren(children);
            gsap.to(el.current, { opacity: 1, duration: 0.5 });
          },
        });
      } else {
        timeline.play().then(() => {
          gsap.to(el.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              setDisplayChildren(children);
              gsap.to(el.current, { opacity: 1, duration: 0.5 });
              timeline.seek(0).pause().clear();
            },
          });
        });
      }
    }
  }, [children, displayChildren, timeline]);

  return (
    <div ref={el} style={{ opacity: 1 }}>
      {displayChildren}
    </div>
  );
};

export default TransitionLayout;
