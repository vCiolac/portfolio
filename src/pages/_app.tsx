import Layout from "@/components/Layout/Layout";
import { LanguageProvider } from "@/context/LanguageContext";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from 'react';
import IntroAnimation from '@/components/Other/IntroAnimation/IntroAnimation';
import type { AppProps } from 'next/app';
import { Toaster } from "sonner";
import { useRouter } from 'next/router';

function App({ Component, pageProps }: AppProps) {
  const [showIntroAnimation, setShowIntroAnimation] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const isInitialVisit = sessionStorage.getItem('hasVisited');

    if (!isInitialVisit) {
      setShowIntroAnimation(true);
      sessionStorage.setItem('hasVisited', 'true');
    } else {
      const navigationEntries = performance.getEntriesByType('navigation');
      if (navigationEntries.length > 0 && (navigationEntries[0] as PerformanceNavigationTiming).type === 'reload') {
        setShowIntroAnimation(true);
      }
    }

    const handleRouteChangeStart = () => {
      setIsInitialLoad(false);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
    };
  }, [router]);

  const handleAnimationComplete = () => {
    setShowIntroAnimation(false);
  };

  return (
    <LanguageProvider>
      <AnimatePresence mode='wait'>
        <Layout>
          {showIntroAnimation && isInitialLoad && (
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