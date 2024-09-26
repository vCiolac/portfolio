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
    home_about: "A tecnologia é uma das minhas grandes paixões. Como um artista, vejo o desenvolvimento web como uma forma de criar e inovar, transformando ideias em soluções que fazem a diferença.",
    home_about_1: "Com um forte apego pelo front-end e um grande fascínio pelo back-end, busco sempre aprimorar minhas habilidades e conhecimentos para entregar resultados com eficiência.",
    home_about_2: "Quando não estou programando, sou um pai presente, cuidando da minha filha e do meu cachorro. Como hobby, sou desenvolvedor de jogos na Godot e sou voluntário em programas ambientais, participando de reflorestamentos e contribuindo para a preservação do meio ambiente.",
    home_about_3: "Em 2024, conclui minha formação em Desenvolvimento Web Full-Stack pela Trybe, onde me dediquei a mais de 1.500 horas de treinamento intensivo. Atualmente estou estudando Análise de Dados pela Google em parceria com a Coursera.",
    home_about_4: "Como freelancer, vejo cada projeto como uma oportunidade única de aprender e crescer. Estou sempre ansioso para colaborar em novos desafios e criar soluções que impactem positivamente.",
    home_works: "Trabalhos",
    work_title: "Título do Trabalho",
    work_description: "Descrição do Trabalho",
    view_project: "Ver Projeto",
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
    home_about: "Technology is one of my great passions. As an artist, I see web development as a way to create and innovate, turning ideas into solutions that make a difference. With a strong attachment to the front-end and a great interest in the back-end, I always seek to improve my skills and knowledge to deliver results efficiently.",
    home_about_1: "With a strong attachment to the front-end and a great fascination in the back-end, I always seek to improve my skills and knowledge to deliver results efficiently.",
    home_about_2: "When I'm not programming, I'm a present father, taking care of my daughter and my dog. As a hobby, I'm a game developer in Godot and I volunteer in environmental programs, participating in reforestation and contributing to the preservation of the environment.",
    home_about_3: "In 2024, I completed my training in Full-Stack Web Development by Trybe, where I dedicated myself to over 1,500 hours of intensive training. I am currently studying Data Analysis by Google in partnership with Coursera.",
    home_about_4: "As a freelancer, I see each project as a unique opportunity to learn and grow. I am always eager to collaborate on new challenges and create solutions that have a positive impact.",
    home_works: "Works",
    work_title: "Work Title",
    work_description: "Work Description",
    view_project: "View Project",
  },
};