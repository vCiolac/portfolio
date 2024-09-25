import Seo from "@/components/Other/SEO";
import Home from "@/components/Templates/Home/Home";
import { useLanguage } from '@/context/LanguageContext';

const HomePage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Seo title={t('greeting')} description={t('description')} />
      <Home />
    </>
  );
};

export default HomePage;
