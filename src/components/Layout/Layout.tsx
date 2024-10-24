import { ChildrenInterface } from '@/interfaces/ChildrenInterface';
import Footer from '../Other/Footer/Footer';
import Header from '../Other/Header/Header';
import TransitionLayout from './TransitionLayout';
import { useState, useEffect } from 'react';
import IntroAnimation from '../Other/IntroAnimation/IntroAnimation';

const Layout = ({ children }: ChildrenInterface) => {
  const [showIntro, setShowIntro] = useState(true);
  const [introPlayed, setIntroPlayed] = useState(false);

  useEffect(() => {
    if (!introPlayed) {
      setShowIntro(true);
    } else {
      setShowIntro(false);
    }
  }, [introPlayed]);

  const handleIntroComplete = () => {
    setIntroPlayed(true);
    setShowIntro(false);
  };
  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      {!showIntro && (
        <TransitionLayout>
          <Header />
          {children}
          <Footer />
        </TransitionLayout>
      )}
    </>
  );
};

export default Layout;
