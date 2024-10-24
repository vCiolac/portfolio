import Seo from "@/components/Other/SEO"
import WorksProjectsPage from "@/components/Templates/WorksProjectsPage/WorksProjectsPage";
import { useLanguage } from "@/context/LanguageContext";

const ProjectsPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Seo title={t('project_title')} description={t('projects_description')} />
      <WorksProjectsPage />
    </>
  )
}

export default ProjectsPage
