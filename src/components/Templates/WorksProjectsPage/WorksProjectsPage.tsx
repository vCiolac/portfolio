import { useState, useRef, useEffect } from "react";
import WorkCard from "@/components/Other/Work/WorkCard";
import { projectsData, worksData } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WorksProjectsPage = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("works");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const worksCount = worksData.length;
  const projectsCount = projectsData.length;
  const dataToDisplay = activeTab === "works" ? worksData : projectsData;

  return (
    <section className="py-24 bg-black dark:bg-offwhite text-white dark:text-black min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-start text-start mb-8">
          <button
            onClick={() => handleTabChange("works")}
            className={`text-4xl md:text-7xl uppercase font-neue font-medium ${activeTab === "works" ?  "text-white" : "text-gray-500"}`}
          >
            {t("works")}
            <span className={`text-4xl px-1`}>({worksCount})</span>
          </button>
          <button
            onClick={() => handleTabChange("projects")}
            className={`text-4xl md:text-7xl uppercase font-neue font-medium ${activeTab === "projects" ? "text-white" : "text-gray-500"}`}
          >
            {t("projects")}
            <span className={`text-4xl px-1`}>({projectsCount})</span>
          </button>
        </div>
        {dataToDisplay.map((item, index) => (
          <WorkCard
            key={index}
            title={t(item.title)}
            description={t(item.description)}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
};

export default WorksProjectsPage;
