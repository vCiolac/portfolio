import Seo from "@/components/Other/SEO";
import Contact from "@/components/Templates/Contact/Contact";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const ContactPage = () => {
  const { t } = useLanguage();
  return (
    <>
      <Seo title={t('contact_title')} description={t('contact_description')} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
      <Contact />
      </motion.div>
    </>
  );
};

export default ContactPage;