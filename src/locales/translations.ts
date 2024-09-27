export type Language = 'pt' | 'en';

interface Translations {
  [key: string]: string;
}

interface TranslationsByLanguage {
  [lang: string]: Translations;
}

export const translations: TranslationsByLanguage = {
  pt: {
    greeting: "Victor Ciolac",
    description: "Desenvolvedor Full Stack",
    hero_first_word: "DESENVOLVEDOR",
    hero_second_word: "FULL STACK",
    hero_third_word: "FREELANCER",
    home_additional_text_1: "Criando experiências digitais",
    home_additional_text_2: "com excelência e paixão",
    home_full_name: "Victor Ciolac",
    home_first_name: "Victor",
    home_middle_name: "Ciolac",
    home_about: "A tecnologia é uma das minhas grandes paixões. Como um artista, vejo o desenvolvimento web como uma forma de criar e inovar, transformando ideias em soluções que fazem a diferença.",
    home_about_1: "Com um forte apego pelo front-end e um grande fascínio pelo back-end, busco sempre aprimorar minhas habilidades e conhecimentos para entregar resultados com eficiência.",
    home_about_2: "Quando não estou programando, sou um pai presente, cuidando da minha filha e do meu cachorro. Como hobby, sou desenvolvedor de jogos na Godot e sou voluntário em programas ambientais, participando de reflorestamentos e contribuindo para a preservação do meio ambiente.",
    home_about_3: "Em 2024, conclui minha formação em Desenvolvimento Web Full-Stack pela Trybe, onde me dediquei a mais de 1.500 horas de treinamento intensivo. Atualmente estou estudando Análise de Dados pela Google em parceria com a Coursera.",
    home_about_4: "Como freelancer, vejo cada projeto como uma oportunidade única de aprender e crescer. Estou sempre ansioso para colaborar em novos desafios e criar soluções que impactem positivamente.",
    home_works: "Trabalho Mais Recente",
    work_title: "IFWB",
    work_description: "O site oficial da IFWB. Um evento que promove a moda como ferramenta de resistência e diversidade, destacando o trabalho criativo de estilistas indígenas. Em 2025, o IFWB vai celebrar a cultura indígena por meio de desfiles, debates e manifestações artísticas, projetando suas criações para o cenário nacional e internacional",
    view_website: "Ver Site",
    view_github: "Github",
    see_all_works: "Ver todos os trabalhos",
    home_personal_project: "Projeto Pessoal Mais Recente",
    personal_project_title: "Tora Wood",
    personal_project_description: "E-commerce oficial da minha marca de biojoias. Oferecendo uma experiência de compra intuitiva e segura. Com integração de pagamento via Pix, cartões de crédito, e funcionalidades como recomendações personalizadas e avaliações, ele une elegância e tecnologia para destacar a beleza das biojoias",
    see_all_projects: "Ver todos os projetos",
    home_contact: "Entre em Contato",
    contact_title: "Fale Comigo",
    contact_description: "Estou sempre aberto a novos desafios e oportunidades. Entre em contato comigo para discutirmos como posso ajudar em seu projeto.",
  },
  en: {
    greeting: "Victor Ciolac",
    description: "Full Stack Developer",
    hero_first_word: "FULL STACK",
    hero_second_word: "DEVELOPER",
    hero_third_word: "FREELANCER",
    home_additional_text_1: "Creating digital experiences",
    home_additional_text_2: "with excellence and passion",
    home_full_name: "Victor Ciolac",
    home_first_name: "Victor",
    home_middle_name: "Ciolac",
    home_about: "Technology is one of my great passions. As an artist, I see web development as a way to create and innovate, turning ideas into solutions that make a difference. With a strong attachment to the front-end and a great interest in the back-end, I always seek to improve my skills and knowledge to deliver results efficiently.",
    home_about_1: "With a strong attachment to the front-end and a great fascination in the back-end, I always seek to improve my skills and knowledge to deliver results efficiently.",
    home_about_2: "When I'm not programming, I'm a present father, taking care of my daughter and my dog. As a hobby, I'm a game developer in Godot and I volunteer in environmental programs, participating in reforestation and contributing to the preservation of the environment.",
    home_about_3: "In 2024, I completed my training in Full-Stack Web Development by Trybe, where I dedicated myself to over 1,500 hours of intensive training. I am currently studying Data Analysis by Google in partnership with Coursera.",
    home_about_4: "As a freelancer, I see each project as a unique opportunity to learn and grow. I am always eager to collaborate on new challenges and create solutions that have a positive impact.",
    home_works: "Most Recent Work",
    work_title: "IFWB",
    work_description: "The official IFWB website. An event that promotes fashion as a tool for resistance and diversity, highlighting the creative work of indigenous stylists. In 2025, the IFWB will celebrate indigenous culture through fashion shows, debates, and artistic manifestations, projecting their creations to the national and international scene",
    view_website: "View Website",
    view_github: "Github",
    see_all_works: "See all works",
    home_personal_project: "Most Recent Personal Project",
    personal_project_title: "Tora Wood",
    personal_project_description: "Official e-commerce of my biojewelry brand. Offering an intuitive and secure shopping experience. With payment integration via Pix, credit cards, and features such as personalized recommendations and reviews, it combines elegance and technology to highlight the beauty of biojewelry",
    see_all_projects: "See all projects",
    home_contact: "Contact Me",
    contact_title: "Get in Touch",
    contact_description: "I'm always open to new challenges and opportunities. Get in touch with me to discuss how I can help with your project.",
  },
};