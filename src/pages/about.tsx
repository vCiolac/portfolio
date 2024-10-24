import Seo from '@/components/Other/SEO';
import About from '@/components/Templates/About/About';
import { useLanguage } from '@/context/LanguageContext';
import React from 'react';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <>
      <Seo title={t('about_seo_title')} description={t('about_description')}/>
      <About />
    </>
  );
};

export default AboutPage;