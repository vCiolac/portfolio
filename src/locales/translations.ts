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
    about_intro: "Introdução",
    about_second: "Primeiros Passos",
    about_second2: "na Programação",
    about_third: "Marcenaria e Transição",
    about_third2: "para a Programação",
    about_fourth: "Jogos e",
    about_fourth2: "Projetos Pessoais",
    about_fifth: "Vida Pessoal e",
    about_fifth2: "Filosofia de Trabalho",
    about_text: "Desde pequeno, sempre fui aquela criança curiosa que adorava desmontar brinquedos só para descobrir como funcionavam. Eu imaginava as histórias mais malucas e sempre tentava entender o que estava por trás de cada mecanismo.",
    about_text1: "Tive o privilégio de crescer com a tecnologia ao meu redor, lá em casa tínhamos um computador com Windows 95, na época da internet discada. Foi amor à primeira vista. Sempre que podia, eu estava lá, explorando cada canto da máquina e tentando entender como aqueles '0s' e '1s' podiam criar coisas tão incríveis na tela.",
    about_text2: "Na adolescência, veio meu primeiro contato real com a programação. Eu não queria mais apenas jogar, queria criar. Decidi montar meu próprio servidor de Tibia, e com a ajuda de uma comunidade online e muitos tutoriais, me aventurei em linguagens como C++, Lua e PHP. Até criei um site para o servidor usando o Adobe Dreamweaver. Eu ainda era um iniciante, mas aquela experiência abriu meus olhos para o poder da tecnologia em personalizar e criar experiências únicas, algo que nunca mais me deixou.",
    about_text3: "Durante esta época também comecei a trabalhar como freelancer de design gráfico. Aprendi Photoshop sozinho e oferecia serviços de criação de cartões de visita, banners, logotipos e outras peças gráficas. Esse impulso para aprender e trabalhar desde cedo me tornou autodidata, sempre buscando expandir minhas habilidades. Hoje, essa mesma proatividade reflete diretamente no meu trabalho com front-end, UI e UX, quando crio layouts e experiências visuais para os projetos em que atuo.",
    about_text4: "Quando chegou a hora de escolher uma carreira, acabei me dedicando à marcenaria, na ideia de criar objetos com madeira. Durante quatro anos, trabalhei no desenvolvimento de móveis planejados, e mais uma vez meu lado autodidata se destacou. Aprendi a projetar em 3D usando AutoCAD e Promob, e passei a criar ambientes inteiros para casas e apartamentos. Ao mesmo tempo, em casa, nas horas vagas, mantinha vivo meu lado criativo com a 'Tora Wood', uma marca que criei para produzir biojoias e peças de decoração feitas com sobras de madeira. Misturando resina epóxi, fazia colares, anéis, brincos e outros adornos, transformando o que seria descartado em arte.",
    about_text5: "Com o tempo, percebi que a marcenaria não estava me oferecendo o que eu realmente buscava. Eu queria construir, sim, mas de uma maneira diferente, e a tecnologia continuava me chamando de volta. Foi em 2022 que resolvi mergulhar de vez na programação. Escolhi estudar na Trybe, uma escola que me proporcionou mais de 1.500 horas de aprendizado intensivo em Desenvolvimento Web Full-Stack. Esse período foi transformador. Aprendi tanto sobre front-end quanto back-end, e pude explorar ao máximo minha criatividade enquanto resolvia problemas complexos através do código.",
    about_text6: "O que mais me fascina na programação é a união perfeita entre arte e tecnologia. Como desenvolvedor, posso ser tanto artista quanto técnico, transformando ideias em realidade através do código.",
    about_text7: "E isso também se reflete nos meus hobbies: sou apaixonado por jogos e, atualmente, estou desenvolvendo um projeto na Godot junto com dois amigos. Enquanto um cuida da parte visual e outro da trilha sonora, eu sou responsável por toda a lógica e codificação do jogo.",
    about_text8: "Esse projeto, que já dura mais de seis meses, me ensinou muito, inclusive como lidar com servidores na AWS para manter nosso servidor do jogo online, agregando ainda mais ao meu conhecimento técnico.",
    about_text9: "Fora do trabalho, sou um pai dedicado, sempre buscando equilibrar minha vida profissional com momentos preciosos em família. E, quando posso, também contribuo com iniciativas de reflorestamento, unindo minha paixão pela natureza com o desejo de causar um impacto positivo.",
    about_text10: "Cada projeto, seja profissional ou pessoal, é uma nova oportunidade de criar algo significativo e inovador. Estou sempre em busca de novos desafios e de maneiras de aplicar meu conhecimento enquanto continuo aprendendo. Se você está procurando um desenvolvedor para transformar suas ideias em realidade, eu adoraria colaborar com você.",
    // Trabalhos
    works: "Trabalhos",
    work_title: "CMTraT",
    work_description: "Desenvolvido em TypeScript com Next e Node.js, o site da CMTrat utiliza MySQL para gestão de dados. O projeto inclui um painel administrativo robusto para gerenciar todo o conteúdo dinâmico do site, como projetos, galeria, notícias e clientes. A plataforma é otimizada para performance e segurança, refletindo as soluções biotecnológicas e sustentáveis da CMTrat no tratamento de efluentes e manutenção de sistemas hidráulicos.",
    work_title2: "IFWB",
    work_description2: "O site oficial da IFWB. Um evento que promove a moda como ferramenta de resistência e diversidade, destacando o trabalho criativo de estilistas indígenas. Em 2025, o IFWB vai celebrar a cultura indígena por meio de desfiles, debates e manifestações artísticas, projetando suas criações para o cenário nacional e internacional",
    work_title3: "E-loc Motos",
    work_description3: "Landing page desenvolvida para a E-loc Motos, uma locadora de motos por assinatura. Esta página apresenta a empresa e os planos disponíveis, destacando os benefícios e integrando um formulário de contato que facilita a comunicação com os visitantes. Com design moderno e navegação otimizada, o site oferece uma experiência fluida e centrada na conversão de novos clientes.",
        
    // Projetos Pessoais
    personal_project_title: "Tora Wood",
    personal_project_description: "E-commerce oficial da minha marca de biojoias. Oferecendo uma experiência de compra intuitiva e segura. Com integração de pagamento via Pix, cartões de crédito, e funcionalidades como recomendações personalizadas e avaliações, ele une elegância e tecnologia para destacar a beleza das biojoias",
    personal_project_title2: "Portfolio VSCode",
    personal_project_description2: "Meu primeiro portfolio, inspirado no Visual Studio Code, com diversas funções de interação como navegação e movimento das abas, mudanças de temas, visualização em código e muito mais.",
    personal_project_title3: "Pigeon Adventure",
    personal_project_description3: "Pigeon Adventure é um jogo para desktop e mobile onde você controla um pombo, coletando moedas e desviando de obstáculos. Desenvolvido com Godot 4, o jogo oferece desafios em vários cenários com uma jogabilidade divertida e acessível para todas as idades.",
    personal_project_title4: "Hotel Airbnb",
    personal_project_description4: "Este projeto é um clone da página inicial do Airbnb, desenvolvido para interagir com minha API de reservas de hotel, 'Hotel Reservation System', que foi construída com ASP.NET.",
    personal_project_title5: "Choose Your Own",
    personal_project_description5: "Meu primeiro projeto de jogo, ele se baseia em uma aventura por texto desenvolvido exclusivamente em JavaScript. O jogo oferece aos jogadores a oportunidade de tomar decisões que influenciam diretamente o rumo da história. Cada escolha leva a diferentes desfechos, junto de novas imagens e sons tornando a experiência altamente interativa!",
    personal_project_title6: "Lentes Fotografia",
    personal_project_description6: "Plataforma online para fotógrafos exibirem seus trabalhos, com recursos de avaliação e extração de metadados das imagens via EXIF. Administradores podem gerenciar fotos e conteúdo via painel. Desenvolvido em React com armazenamento em Firebase Cloud.",
    personal_project_title7: "Recipes App",
    personal_project_description7: "Aplicativo de receitas desenvolvido com React e Context API, permitindo login, favoritar, acompanhar, salvar e compartilhar receitas com base em critérios variados.",
    personal_project_title8: "Termo News",
    personal_project_description8: "Site de notícias desenvolvido em React que permite acessar, favoritar e filtrar notícias do IBGE, além de visualizar data de publicação e o tempo desde a postagem.",
    personal_project_title9: "Pixel Art",
    personal_project_description9: "Meu primeiro projeto em JavaScript, uma plataforma simples e divertida para criar e desenhar imagens com pixels.",

    // Contatos Home
    name: 'Nome',
    message: 'Mensagem',
    send_message: 'Enviar Mensagem',
    name_required: 'Nome é obrigatório',
    message_required: 'Mensagem é obrigatória',
    email_required: 'Email é obrigatório',
    contact_phrase: 'Você tem um projeto ou ideia em mente que precisa de assistência? Se você está procurando uma colaboração profissional, tem uma tarefa específica ou precisa de expertise técnica, sinta-se à vontade para me contatar a qualquer momento. Vamos trabalhar juntos para dar vida à sua visão!',
    home_contact: "Entre em Contato",
    contact_title: "Fale Comigo",
    contact_description: "Estou sempre aberto a novos desafios e oportunidades. Entre em contato comigo para discutirmos como posso ajudar em seu projeto.",
    sending: "Enviando...",
    send_success: "Mensagem enviada com sucesso!",
    send_error: "Erro ao enviar a mensagem. Tente novamente.",
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
    about_intro: "Introduction",
    about_second: "First Steps",
    about_second2: "in Programming",
    about_third: "Carpentry and Transition",
    about_third2: "to Programming",
    about_fourth: "Games and",
    about_fourth2: "Personal Projects",
    about_fifth: "Personal Life and",
    about_fifth2: "Work Philosophy",
    about_text: "Since I was young, I was always the curious kid who loved to take apart toys just to figure out how they worked. I imagined the craziest stories and always tried to understand what was behind each mechanism.",
    about_text1: "I had the privilege of growing up surrounded by technology. We had a Windows 95 computer at home, back in the dial-up internet days. It was love at first sight. Whenever I could, I was there, exploring every corner of the machine and trying to understand how those '0s' and '1s' could create such incredible things on the screen.",
    about_text2: "In my teenage years, I had my first real contact with programming. I no longer just wanted to play, I wanted to create. I decided to set up my own Tibia server, and with the help of an online community and many tutorials, I ventured into languages like C++, Lua, and PHP. I even created a website for the server using Adobe Dreamweaver. I was still a beginner, but that experience opened my eyes to the power of technology in customizing and creating unique experiences, something that has stayed with me ever since.",
    about_text3: "During this time, I also started working as a freelance graphic designer. I learned Photoshop on my own and offered services creating business cards, banners, logos, and other graphic pieces. This drive to learn and work from an early age made me self-taught, always seeking to expand my skills. Today, that same proactivity directly reflects in my work with front-end, UI, and UX, as I create layouts and visual experiences for the projects I work on.",
    about_text4: "When the time came to choose a career, I ended up dedicating myself to carpentry, with the idea of creating objects out of wood. For four years, I worked on developing custom furniture, and once again, my self-taught side stood out. I learned to design in 3D using AutoCAD and Promob, and I started creating entire environments for homes and apartments. At the same time, in my free time at home, I kept my creative side alive with 'Tora Wood', a brand I created to produce biojewelry and decorative pieces made from wood scraps. Mixing in epoxy resin, I made necklaces, rings, earrings, and other ornaments, turning what would be discarded into art.",
    about_text5: "Over time, I realized that carpentry wasn’t offering me what I was truly seeking. I wanted to build, yes, but in a different way, and technology kept calling me back. In 2022, I decided to fully immerse myself in programming. I chose to study at Trybe, a school that provided me with over 1,500 hours of intensive Full-Stack Web Development training. This period was transformative. I learned both front-end and back-end, and I was able to fully explore my creativity while solving complex problems through code.",
    about_text6: "What fascinates me most about programming is the perfect union between art and technology. As a developer, I can be both artist and technician, turning ideas into reality through code.",
    about_text7: "And this also reflects in my hobbies: I am passionate about games and, currently, I am developing a project in Godot with two friends. While one takes care of the visual aspect and the other handles the soundtrack, I am responsible for all the logic and coding of the game.",
    about_text8: "This project, which has been going on for over six months, has taught me a lot, including how to handle AWS servers to keep our game server online, adding even more to my technical knowledge.",
    about_text9: "Outside of work, I am a dedicated father, always striving to balance my professional life with precious family moments. And whenever I can, I also contribute to reforestation initiatives, combining my passion for nature with the desire to make a positive impact.",
    about_text10: "Every project, whether professional or personal, is a new opportunity to create something meaningful and innovative. I am always seeking new challenges and ways to apply my knowledge while continuing to learn. If you are looking for a developer to bring your ideas to life, I would love to collaborate with you.",
    // Works
    works: "Works",
    work_title: "CMTraT",
    work_description: "Developed in TypeScript with Next and Node.js, the CMTrat website uses MySQL for data management. The project includes a robust administrative panel to manage all dynamic site content, such as projects, gallery, news, and clients. The platform is optimized for performance and security, reflecting CMTrat's biotechnological and sustainable solutions in wastewater treatment and hydraulic system maintenance.",
    work_title2: "IFWB",
    work_description2: "The official IFWB website. An event that promotes fashion as a tool for resistance and diversity, highlighting the creative work of indigenous stylists. In 2025, the IFWB will celebrate indigenous culture through fashion shows, debates, and artistic manifestations, projecting their creations to the national and international scene",
    work_title3: "E-loc Motos",
    work_description3: "Landing page developed for E-loc Motos, a motorcycle rental company with a subscription model. This page introduces the company and available plans, highlighting the benefits and integrating a contact form that facilitates communication with visitors. With a modern design and optimized navigation, the site offers a smooth experience focused on converting new customers.",
    
    // Projects
    projects: "Projects",
    personal_project_title: "Tora Wood",
    personal_project_description: "Official e-commerce of my biojewelry brand. Offering an intuitive and secure shopping experience. With payment integration via Pix, credit cards, and features such as personalized recommendations and reviews, it combines elegance and technology to highlight the beauty of biojewelry",
    personal_project_title2: "Portfolio VSCode",
    personal_project_description2: "My first portfolio, inspired by Visual Studio Code, with various interaction functions such as navigation and tab movement, theme changes, code viewing, and much more.",
    personal_project_title3: "Pigeon Adventure",
    personal_project_description3: "Pigeon Adventure is a desktop and mobile game where you control a pigeon, collecting coins and dodging obstacles. Developed with Godot 4, the game offers challenges in various scenarios with fun and accessible gameplay for all ages.",
    personal_project_title4: "Hotel Airbnb",
    personal_project_description4: "This project is a clone of the Airbnb homepage, developed to interact with my hotel booking API, 'Hotel Reservation System', which was built with ASP.NET.",
    personal_project_title5: "Choose Your Own",
    personal_project_description5: "My first game project, it is based on a text adventure developed exclusively in JavaScript. The game offers players the opportunity to make decisions that directly influence the course of the story. Each choice leads to different outcomes, along with new images and sounds making the experience highly interactive!",
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
    name: 'Name',
    message: 'Message',
    send_message: 'Send Message',
    name_required: 'Name is required',
    message_required: 'Message is required',
    email_required: 'Email is required',
    contact_phrase: "Do you have a project or idea in mind that you need assistance with? Whether you're looking for professional collaboration, have a specific task in mind, or need technical expertise, feel free to contact me anytime. Let's work together to bring your vision to life!",
    sending: "Sending...",
    send_success: "Message sent successfully!",
    send_error: "Error sending message. Try again.",
    about_seo_title: "About me",
    about_description: "Discover more about Victor Ciolac, a Full Stack developer passionate about technology and innovation.",
    project_title: "Projects | Victor Ciolac",
    projects_description: "Get to know some of the projects I've developed. Each one of them is unique and was created with dedication and passion.",
  },
};