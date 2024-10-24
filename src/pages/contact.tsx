import Seo from "@/components/Other/SEO";
import Contact from "@/components/Templates/Contact/Contact";
import { useLanguage } from "@/context/LanguageContext";

const ContactPage = () => {
  const { t } = useLanguage();
  return (
    <>
      <Seo title={t('contact_title')} description={t('contact_description')} />
      <Contact />
    </>
  );
};

export default ContactPage;