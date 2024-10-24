import React, { useState, createContext } from "react";
import gsap from "gsap";
import { ReactNode } from "react";

interface TransitionContextType {
  timeline: gsap.core.Timeline;
  setTimeline: React.Dispatch<React.SetStateAction<gsap.core.Timeline>>;
}

const TransitionContext = createContext<TransitionContextType>({ timeline: gsap.timeline(), setTimeline: () => {} });

const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const [timeline, setTimeline] = useState(() => gsap.timeline({ paused: true }));

  return (
    <TransitionContext.Provider value={{ timeline, setTimeline }}>
      {children}
    </TransitionContext.Provider>
  );
};

export { TransitionContext, TransitionProvider };
