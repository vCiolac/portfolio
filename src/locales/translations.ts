export type Language = 'pt' | 'en';

interface Translations {
  [key: string]: string;
}

interface TranslationsByLanguage {
  [lang: string]: Translations;
}

export const translations:  TranslationsByLanguage = {
  pt: {
    greeting: "Victor Ciolac",
    description: "Desenvolvedor Full Stack",
    hero_first_word: "DESENVOLVEDOR",
    hero_second_word: "FULL STACK",
    hero_third_word: "FREELANCER",
    home_additional_text_1: "Desenvolvendo experiências digitais",
    home_additional_text_2: "com excelência e paixão",
    home_full_name: "Victor Ciolac",
    home_first_name: "Victor",
    home_middle_name: "Ciolac",
    home_about_1: "Apaixonado por tecnologia e computação,",
    home_about_2: "sempre fiquei fascinado com a possibilidade de criar coisas novas e inovadoras.",
    home_about_3: "Com apego ao front end e fascínio pelo back end, busco sempre aprimorar minhas",
    home_about_4: "habilidades e conhecimentos para entregar o melhor resultado possível.",
  },
  en: {
    greeting: "Victor Ciolac",
    description: "Full Stack Developer",
    hero_first_word: "FULL STACK",
    hero_second_word: "DEVELOPER",
    hero_third_word: "FREELANCER",
    home_additional_text_1: "Developing digital experiences",
    home_additional_text_2: "with excellence and passion",
    home_full_name: "Victor Ciolac",
    home_first_name: "Victor",
    home_middle_name: "Ciolac",
    home_about_1: "Passionate about technology and computing,",
    home_about_2: "I have always been fascinated by the possibility of creating new and innovative things.",
    home_about_3: "With attachment to the front end and fascination with the back end, I always seek to improve my",
    home_about_4: "skills and knowledge to deliver the best possible result.",
  },
};