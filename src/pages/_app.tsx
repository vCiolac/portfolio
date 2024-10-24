import Layout from "@/components/Layout/Layout";
import { LanguageProvider } from "@/context/LanguageContext";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from 'next/app';
import { Toaster } from "sonner";
import { TransitionProvider } from "@/context/TransitionContext";

function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <TransitionProvider>
        <AnimatePresence mode='wait'>
          <Layout>
            <Component {...pageProps} />
            <Toaster />
          </Layout>
        </AnimatePresence>
      </TransitionProvider>
    </LanguageProvider>
  );
}

export default App;
