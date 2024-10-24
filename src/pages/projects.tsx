import { motion } from 'framer-motion';
import Seo from "@/components/Other/SEO";
import WorksProjectsPage from "@/components/Templates/WorksProjectsPage/WorksProjectsPage";
import { useLanguage } from "@/context/LanguageContext";

const ProjectsPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Seo title={t('project_title')} description={t('projects_description')} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <WorksProjectsPage />
      </motion.div>
    </>
  );
};

export default ProjectsPage;
