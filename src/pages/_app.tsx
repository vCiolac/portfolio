import Layout from "@/components/Layout/Layout";
import { LanguageProvider } from "@/context/LanguageContext";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from 'react';
import IntroAnimation from '@/components/Other/IntroAnimation/IntroAnimation';
import type { AppProps } from 'next/app';
import { Toaster } from "sonner";

function App({ Component, pageProps }: AppProps) {
  const [showIntroAnimation, setShowIntroAnimation] = useState(false);

  useEffect(() => {
    const isInitialVisit = sessionStorage.getItem('hasVisited');
    
    if (!isInitialVisit) {
      setShowIntroAnimation(true);
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleAnimationComplete = () => {
    setShowIntroAnimation(false);
  };

  return (
    <LanguageProvider>
      <AnimatePresence mode='wait'>
        <Layout>
          {showIntroAnimation && (
            <IntroAnimation onComplete={handleAnimationComplete} />
          )}
          <Component {...pageProps} />
          <Toaster />
        </Layout>
      </AnimatePresence>
    </LanguageProvider>
  );
}

export default App;
