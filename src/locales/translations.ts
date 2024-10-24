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
    copy: "Todos os direitos reservados",
    hero_first_word: "DESENVOLVEDOR",
    hero_second_word: "FULL STACK",
    hero_third_word: "FREELANCER",
    home_additional_text_1: "Criando experiências digitais",
    home_additional_text_2: "com excelência e paixão",
    home_full_name: "Victor Ciolac",
    home_first_name: "Victor",
    home_middle_name: "Ciolac",
    // Sobre Home
    home_about: "A tecnologia é uma das minhas grandes paixões. Como um artista, vejo o desenvolvimento web como uma forma de criar e inovar, transformando ideias em soluções que fazem a diferença.",
    home_about_1: "Com um forte apego pelo front-end e um grande fascínio pelo back-end, busco sempre aprimorar minhas habilidades e conhecimentos para entregar resultados com eficiência.",
    home_about_2: "Quando não estou programando, sou um pai dedicado, cuido da minha filha e do meu cachorro. Desenvolvo jogos na Godot como hobby, assisto séries e participo de projetos de reflorestamento e outras iniciativas ambientais.",
    home_about_3: "Em 2024, conclui minha formação em Desenvolvimento Web Full-Stack pela Trybe, onde me dediquei a mais de 1.500 horas de treinamento intensivo. Atualmente estou estudando Análise de Dados pela Google em parceria com a Coursera.",
    home_about_4: "Como freelancer, vejo cada projeto como uma oportunidade única de aprender e crescer. Estou sempre ansioso para colaborar em novos desafios e criar soluções que impactem positivamente.",
    home_more_about_me: "Saiba mais sobre mim",
    home_works: "Trabalho Mais Recente",
    view_website: "Ver Site",
    view_github: "Github",
    see_all_works: "Ver todos os trabalhos",
    projects: "Projetos",
    home_personal_project: "Projeto Pessoal Mais Recente",
    see_all_projects: "Ver todos os projetos",
    about_title: "Quem sou eu?",
    // Trabalhos
    works: "Trabalhos",
    work_title: "CMTraT",
    work_description: "Desenvolvido em TypeScript com Next e Node.js, o site da CMTrat utiliza MySQL para gestão de dados. O projeto inclui um painel administrativo robusto para gerenciar todo o conteúdo dinâmico do site, como projetos, galeria, notícias e clientes. A plataforma é otimizada para performance e segurança, refletindo as soluções biotecnológicas e sustentáveis da CMTrat no tratamento de efluentes e manutenção de sistemas hidráulicos.",
    work_title2: "IFWB",
    work_description2: "O site oficial da IFWB. Um evento que promove a moda como ferramenta de resistência e diversidade, destacando o trabalho criativo de estilistas indígenas. Em 2025, o IFWB vai celebrar a cultura indígena por meio de desfiles, debates e manifestações artísticas, projetando suas criações para o cenário nacional e internacional",

    // Projetos Pessoais
    personal_project_title: "Tora Wood",
    personal_project_description: "E-commerce oficial da minha marca de biojoias. Oferecendo uma experiência de compra intuitiva e segura. Com integração de pagamento via Pix, cartões de crédito, e funcionalidades como recomendações personalizadas e avaliações, ele une elegância e tecnologia para destacar a beleza das biojoias",
    personal_project_title2: "Portfolio VSCode",
    personal_project_description2: "Meu primeiro portfolio, inspirado no Visual Studio Code, com diversas funções de interação como navegação e movimento das abas, mudanças de temas, visualização em código e muito mais.",
    personal_project_title3: "Pigeon Adventure",
    personal_project_description3: "Pigeon Adventure é um jogo para desktop e mobile onde você controla um pombo, coletando moedas e desviando de obstáculos. Desenvolvido com Godot 4, o jogo oferece desafios em vários cenários com uma jogabilidade divertida e acessível para todas as idades.",
    personal_project_title4: "Hotel Airbnb",
    personal_project_description4: "Este projeto é um clone da página inicial do Airbnb, desenvolvido para interagir com minha API de reservas de hotel, 'HotelReservationSystem', que foi construída com ASP.NET.",
    personal_project_title5: "Choose Your Own",
    personal_project_description5: "Meu primeiro projeto de jogo, ele se baseia em uma aventura por texto desenvolvido exclusivamente em JavaScript. O jogo oferece aos jogadores a oportunidade de tomar decisões que influenciam diretamente o rumo da história. Cada escolha leva a diferentes desfechos, junto de novas imagens e sons tornando a experiência altamente interativa!.",
    personal_project_title6: "Lentes Fotografia",
    personal_project_description6: "Plataforma online para fotógrafos exibirem seus trabalhos, com recursos de avaliação e extração de metadados das imagens via EXIF. Administradores podem gerenciar fotos e conteúdo via painel. Desenvolvido em React com armazenamento em Firebase Cloud.",
    personal_project_title7: "Recipes App",
    personal_project_description7: "Aplicativo de receitas desenvolvido com React e Context API, permitindo login, favoritar, acompanhar, salvar e compartilhar receitas com base em critérios variados.",
    personal_project_title8: "Termo News",
    personal_project_description8: "Site de notícias desenvolvido em React que permite acessar, favoritar e filtrar notícias do IBGE, além de visualizar data de publicação e o tempo desde a postagem.",
    personal_project_title9: "Pixel Art",
    personal_project_description9: "Meu primeiro projeto em JavaScript, uma plataforma simples e divertida para criar e desenhar imagens com pixels.",

    // Contatos Home
    home_contact: "Entre em Contato",
    contact_title: "Fale Comigo",
    contact_description: "Estou sempre aberto a novos desafios e oportunidades. Entre em contato comigo para discutirmos como posso ajudar em seu projeto.",
    // SEO
    about_seo_title: "Sobre mim",
    about_description: "Descubra mais sobre Victor Ciolac, um desenvolvedor Full Stack apaixonado por tecnologia e inovação.",
    project_title: "Projetos | Victor Ciolac",
    projects_description: "Conheça alguns dos projetos que desenvolvi. Cada um deles é único e foi criado com dedicação e paixão.",
    // 
  },
  en: {
    greeting: "Victor Ciolac",
    description: "Full Stack Developer",
    copy: "All rights reserved",
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
    home_about_2: "When I'm not programming, I'm a dedicated father, taking care of my daughter and my dog. I develop games in Godot as a hobby, watch series, and participate in reforestation projects and other environmental initiatives.",
    home_about_3: "In 2024, I completed my training in Full-Stack Web Development by Trybe, where I dedicated myself to over 1,500 hours of intensive training. I am currently studying Data Analysis by Google in partnership with Coursera.",
    home_about_4: "As a freelancer, I see each project as a unique opportunity to learn and grow. I am always eager to collaborate on new challenges and create solutions that have a positive impact.",
    home_more_about_me: "Learn more about me",
    home_works: "Most Recent Work",
    view_website: "View Website",
    view_github: "Github",
    see_all_works: "See all works",
    home_personal_project: "Most Recent Personal Project",
    see_all_projects: "See all projects",
    about_title: "Who am I?",
    // Works
    works: "Works",
    work_title: "CMTraT",
    work_description: "Developed in TypeScript with Next and Node.js, the CMTrat website uses MySQL for data management. The project includes a robust administrative panel to manage all dynamic site content, such as projects, gallery, news, and clients. The platform is optimized for performance and security, reflecting CMTrat's biotechnological and sustainable solutions in wastewater treatment and hydraulic system maintenance.",
    work_title2: "IFWB",
    work_description2: "The official IFWB website. An event that promotes fashion as a tool for resistance and diversity, highlighting the creative work of indigenous stylists. In 2025, the IFWB will celebrate indigenous culture through fashion shows, debates, and artistic manifestations, projecting their creations to the national and international scene",

    // Projects
    projects: "Projects",
    personal_project_title: "Tora Wood",
    personal_project_description: "Official e-commerce of my biojewelry brand. Offering an intuitive and secure shopping experience. With payment integration via Pix, credit cards, and features such as personalized recommendations and reviews, it combines elegance and technology to highlight the beauty of biojewelry",
    personal_project_title2: "Portfolio VSCode",
    personal_project_description2: "My first portfolio, inspired by Visual Studio Code, with various interaction functions such as navigation and tab movement, theme changes, code viewing, and much more.",
    personal_project_title3: "Pigeon Adventure",
    personal_project_description3: "Pigeon Adventure is a desktop and mobile game where you control a pigeon, collecting coins and dodging obstacles. Developed with Godot 4, the game offers challenges in various scenarios with fun and accessible gameplay for all ages.",
    personal_project_title4: "Hotel Airbnb",
    personal_project_description4: "This project is a clone of the Airbnb homepage, developed to interact with my hotel booking API, 'HotelReservationSystem', which was built with ASP.NET.",
    personal_project_title5: "Choose Your Own",
    personal_project_description5: "My first game project, it is based on a text adventure developed exclusively in JavaScript. The game offers players the opportunity to make decisions that directly influence the course of the story. Each choice leads to different outcomes, along with new images and sounds making the experience highly interactive!.",
    personal_project_title6: "Lenses Photography",
    personal_project_description6: "Online platform for photographers to showcase their work, with image evaluation and metadata extraction features via EXIF. Administrators can manage photos and content via the panel. Developed in React with storage in Firebase Cloud.",
    personal_project_title7: "Recipes App",
    personal_project_description7: "Recipe app developed with React and Context API, allowing login, favoriting, tracking, saving, and sharing recipes based on various criteria.",
    personal_project_title8: "Termo News",
    personal_project_description8: "News site developed in React that allows you to access, favorite, and filter IBGE news, as well as view publication date and time since posting.",
    personal_project_title9: "Pixel Art",
    personal_project_description9: "My first project in JavaScript, a simple and fun platform to create and draw images with pixels.",

    // Contact
    home_contact: "Contact Me",
    contact_title: "Get in Touch",
    contact_description: "I'm always open to new challenges and opportunities. Get in touch with me to discuss how I can help with your project.",
    // SEO
    about_seo_title: "About me",
    about_description: "Discover more about Victor Ciolac, a Full Stack developer passionate about technology and innovation.",
    project_title: "Projects | Victor Ciolac",
    projects_description: "Get to know some of the projects I've developed. Each one of them is unique and was created with dedication and passion.",
  },
};