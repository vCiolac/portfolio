import Layout from "@/components/Layout/Layout";
import { LanguageProvider } from "@/context/LanguageContext";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from 'next/app'
import { Toaster } from "sonner";

function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <AnimatePresence mode='wait'>
        <Layout>
          <Component {...pageProps} />
          <Toaster />
        </Layout>
      </AnimatePresence>
    </LanguageProvider>
  );
};

export default App
