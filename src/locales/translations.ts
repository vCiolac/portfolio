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
    home_first_name: "Victor",
    home_middle_name: "Ciolac",
  },
  en: {
    greeting: "Victor Ciolac",
    description: "Full Stack Developer",
    hero_first_word: "FULL STACK",
    hero_second_word: "DEVELOPER",
    hero_third_word: "FREELANCER",
    home_additional_text_1: "Developing digital experiences",
    home_additional_text_2: "with excellence and passion",
    home_first_name: "Victor",
    home_middle_name: "Ciolac",
  },
};