export type NavKey = "home" | "about" | "experience" | "projects" | "contact";

export type ExperienceItem = {
  period: { start: string; end: string };
  role: string;
  company: string;
  description: string;
  longDescription: string;
  responsibilities: string[];
  tags: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string; // URL ou cor de placeholder
  video?: string;
  link?: string;
};

export type Translation = {
  nav: Record<NavKey, string>;
  hero: { subtitle: string; scroll: string };
  about: { title: string; bio1: string; bio2: string; skills: string };
  experience: { title: string; items: ExperienceItem[] };
  projects: { title: string; items: ProjectItem[] };
  contact: {
    title: string;
    subtitle: string;
    tagline: string;
    links: { label: string; href: string; type: "github" | "linkedin" | "email" | "cv" }[];
    footer: string;
  };
};

export const translations: Record<"pt" | "en", Translation> = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      subtitle: "Desenvolvedor Fullstack focado em transformar problemas complexos em soluções eficientes com interfaces intuitivas.",
      scroll: "scroll",
    },
    about: {
      title: "Sobre mim",
      bio1: "Bacharel em Ciência da Computação com sólida base em engenharia de software e pós graduando em Engenharia de Software em IA Aplicada . Ao longo da minha carreira, atuei desde a manutenção de sistemas legados até a arquitetura de aplicações modernas em nuvem utilizando diversas tecnologias Docker e RabbitMQ.",
      bio2: "Sou movido pelo desafio de transformar requisitos complexos em sistemas eficientes, intuitivos e prontos para escala. Como entusiasta de software livre, busco sempre o equilíbrio entre performance técnica no back-end e interfaces que comunicam valor no front-end.",
      skills: "Tecnologias",
    },
    experience: {
      title: "Experiência",
      items: [
        {
          period: { start: "12/2025", end: "presente" },
          role: "Analista de TI Júnior",
          company: "De Paulo Pães",
          description: "Analista de TI com foco em suporte de usuário e infraestrtura.",
          longDescription: "Atuo na modernização de processos internos através da digitalização de setores e na implementação de soluções estratégicas para garantir a resiliência e a escalabilidade da infraestrutura tecnológica.",
          responsibilities: [
            "Apoio na implantação do Microsoft 365",
            "Suporte interno ao sistema ERP",
            "Contratação de domínio e hospedagem",
            "Criação e configuração de emails corporativos",
          ],
          tags: ["Microsoft 365", "Domínio", "Hospedagem", "Hardware"],
        },
        {
          period: { start: "01/2024", end: "06/2025" },
          role: "Estagiário em análise e desenvolvimento de sistemas",
          company: "BNDES",
          description: "Estagiário na gerência de portais e conteúdos do BNDES.",
          longDescription: "Atuação no time de supervisão e desenvolvimento novas features para gerenciadores de contúdos internos e externos do banco.",
          responsibilities: [
            `
              Aumento da eficiência do sistema interno do BNDES por meio do desenvolvimento da nova
              intranet em SharePoint, integrada ao Microsoft 365, SAP e sistemas corporativos, utilizando React
              no frontend e Java no backend.
            `,
            `
              Implementação de novas funcionalidades em gerenciadores de conteúdos baseados em JSP(Java
              Server pages), resultando em novas features e redução de tempo de carregamento das páginas.
            `,
            `
              Redução no tempo de execução de queries SQL através da simplificação de código legado em
              sistemas internos, promovendo a otimização da visualização de dados e melhoria na performance geral.
            `,
            `
              Automação da geração de planilhas com dados do Data Lake utilizando scripts Bash, resultando
              em um aumento na produtividade da equipe ao eliminar tarefas manuais e repetitivas.
            `
          ],
          tags: ["React", "Java", "TypeScript", "Angular", "API Rest", "Bash", "Microsoft365", "SQLServer", "Oracle", "Data Lake", "DeepTrack"],
        },
      ],
    },
    projects: {
      title: "Projetos",
      items: [
        {
          title: "SyncFlow",
          description: "Gerenciador de tasks(Trello-like)",
          longDescription: "Solução full-stack para gestão de fluxos de trabalho. A aplicação destaca-se pela separação de responsabilidades em microsserviços desenvolvidos em Nest, permitindo que cada módulo evolua de forma independente. Implementa autenticação segura e comunicação entre serviços, unindo o poder de processamento do ecossistema Java à agilidade do front-end em React. Também possui serviço de mensageria com RabbitMQ.",
          tags: ["Nest.js", "TypeScript", "React", "Microserviços", "API Rest", "RabbitMQ", "PostgreSQL"],
          image: "/syncflow.gif",
          link: "https://github.com/JoaoMaganin/syncflow",
        },
        {
          title: "Maganin Automecânica",
          description: "Sistema de gestão interno",
          longDescription: "Desenvolvimento de um sistema de gestão para a Maganin Automecânica, responsável por automatizar e integrar os processos de estoque, finanças e vendas da empresa. Atualmente, está sendo construído uma nova versão da plataforma, com melhorias na arquitetura e estrutura do projeto, visando escalabilidade, maior qualidade de código e facilidade de manutenção. O sistema é desenvolvido utilizando Spring Boot no backend e Angular no frontend.",
          tags: ["Spring Boot", "Angular", "SQLite", "API Rest", "Backup"],
          image: "/project1.png",
          link: "https://github.com/JoaoMaganin/ERP-Maganin-Automecanica",
        },
        {
          title: "Employee Management",
          description: "Gerenciamento de recursos humanos",
          longDescription: "Sistema de gestão de recursos humanos desenvolvido para otimizar o controle de registros de colaboradores. A solução utiliza Spring Boot para uma API REST robusta e React para uma interface administrativa intuitiva, implementando operações CRUD completas com foco em integridade de dados e eficiência operacional.",
          tags: ["Java", "Spring Boot", "React", "PostgreSQL", "API Rest"],
          image: "/project2.jpg",
          link: "https://github.com/JoaoMaganin/employee_management_system",
        },
        {
          title: "Amazon web scrapping",
          description: "Scrapping de produtos na Amazon",
          longDescription: "Desenvolvido como tech challenge este projeto é um Web Scraping focado na simplicidade e eficiência para extrair listagens de produtos da Amazon. A ferramenta automatiza a coleta de dados que seriam buscados manualmente, refletindo competências em lógica de programação e análise de estruturas de páginas web para conversão em formatos organizados.",
          tags: ["TypeScript", "Express", "Bun", "Axios", "HTML/CSS"],
          image: "/amazon.png",
          video: "/videos/amazon-project.mp4",
          link: "https://github.com/JoaoMaganin/trainee-amazon-list/tree/master",
        },
        {
          title: "Itaú Tech Challenge",
          description: "API Financeira",
          longDescription: "Construção de uma API de back-end inspirada em sistemas bancários reais, focada em processamento transacional e segurança. O projeto utiliza Java com Spring Boot para implementar uma arquitetura resiliente, demonstrando domínio em persistência de dados, tratamento de exceções e padrões RESTful para operações financeiras.",
          tags: ["Java", "SpringBoot", "Swagger", "Docker", "Testes automatizados"],
          image: "/itau.png",
          link: "https://github.com/JoaoMaganin/itau-backend",
        },
        {
          title: "Guerra Viking",
          description: "Barbearia Vikings",
          longDescription: `Construção de uma plataforma de ranqueamento ("Guerra Viking") projetada para estimular o engajamento e a fidelização de clientes. O projeto implementa uma interface dinâmica que processa e exibe pontuações em tempo real, demonstrando proficiência em manipulação de estado, integração assíncrona com back-end e design de UI limpo e de alta performance. O projeto foi feito com React para construir uma experiência visual imersiva, destacando habilidades em estruturação de componentes, requisições dinâmicas e design responsivo.`,
          tags: ["React", "HTML", "CSS", "Google Apps Script"],
          image: "/vikings.png",
          link: "https://barbeariavikings.online/Guerra-Viking",
        }
      ]
    },
    contact: {
      title: "Contato",
      subtitle: "Vamos trabalhar juntos?",
      tagline: "Estou disponível para projetos freelance, oportunidades full-time ou só para trocar uma ideia.",
      links: [
        { label: "GitHub", href: "https://github.com/JoaoMaganin", type: "github" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/joaomontemor/", type: "linkedin" },
        { label: "joaovitormontemor138@email.com", href: "mailto:joaovitormontemor138@email.com", type: "email" },
        { label: "Baixar currículo", href: "/cv-pt.pdf", type: "cv" },
      ],
      footer: "Feito com React e GSAP",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      subtitle: "Fullstack developer focused on transforming complex problems into efficient solutions with memorable interfaces.",
      scroll: "scroll",
    },
    about: {
      title: "About me",
      bio1: "Bachelor of Science in Computer Science and with a strong background in software engineering and postgraduate student in Software Engineering with a focus on Applied AI. Throughout my career, I have worked in areas ranging from maintaining legacy systems to architecting modern cloud applications using various Docker and RabbitMQ technologies.",
      bio2: "I'm driven by the challenge of transforming complex requirements into efficient, intuitive, and scalable systems. As an open-source software enthusiast, I always seek a balance between technical performance on the back-end and interfaces that communicate value on the front-end.",
      skills: "Technologies",
    },
    experience: {
      title: "Work Experience",
      items: [
        {
          period: { start: "12/2025", end: "present" },
          role: "Junior IT Analyst",
          company: "De Paulo Pães",
          description: "IT analyst focused on user support and infrastructure.",
          longDescription: "I work on modernizing internal processes through the digitization of departments and implementing strategic solutions to ensure the resilience and scalability of the technological infrastructure.",
          responsibilities: [
            "Support in the implementation of Microsoft 365",
            "Internal support for the ERP system.",
            "Domain and hosting contract",
            "Creating and configuring corporate emails.",
          ],
          tags: ["Microsoft 365", "Domínio", "Hospedagem", "Hardware"],
        },
        {
          period: { start: "01/2024", end: "06/2025" },
          role: "Intern in systems analysis and development",
          company: "BNDES",
          description: "Intern in the portals and content management department at BNDES.",
          longDescription: "Working within the supervision and development team for new features for the bank's internal and external content management systems.",
          responsibilities: [
            "Development of the frontend for the new intranet in SharePoint, with integration to REST APIs (Microsoft Graph) and web parts using ReactJS and TypeScript.",
            "Vulnerability fixes and security improvements with DepTrack.",
            "Maintenance and development of legacy code with CMS frameworks using Java Server Pages.",
            "Automating the generation of spreadsheets with data from the Data Lake using a Bash script.",
            "Development and updating of views in distributed databases.",
          ],
          tags: ["React", "Java", "TypeScript", "Angular", "API Rest", "Bash", "Microsoft365", "SQLServer", "Oracle", "Data Lake", "DeepTrack"],
        },
      ],
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "SyncFlow",
          description: "Task manager (Trello-like)",
          longDescription: "Full-stack solution for workflow management. The application stands out for its separation of responsibilities into microservices developed in Nest, allowing each module to evolve independently. It implements secure authentication and communication between services, combining the processing power of the Java ecosystem with the agility of the React front-end. It also features a messaging service with RabbitMQ.",
          tags: ["Nest.js", "TypeScript", "React", "Microsservices", "API Rest", "RabbitMQ", "PostgreSQL"],
          image: "/syncflow.gif",
          link: "https://github.com/JoaoMaganin/syncflow",
        },
        {
          title: "Maganin Automecânica",
          description: "Internal management system",
          longDescription: "This system is focused on the Maganin Automecânica automotive workshop, aiming to deliver integrated management of inventory, finances, and sales. To date, only the first version, containing the inventory module, has been released. It was built using Spring Boot on the back-end and Next.js on the front-end to ensure performance and SEO.",
          tags: ["Spring Boot", "Next.js", "SQLite", "API Rest", "Backup"],
          image: "/project1.png",
          link: "https://github.com/JoaoMaganin/ERP-Maganin-Automecanica",
        },
        {
          title: "Employee Management",
          description: "Human resource management",
          longDescription: "Human resources management system developed to optimize the control of employee records. The solution uses Spring Boot for a robust REST API and React for an intuitive administrative interface, implementing complete CRUD operations with a focus on data integrity and operational efficiency.",
          tags: ["Java", "Spring Boot", "React", "PostgreSQL", "API Rest"],
          image: "/project2.jpg",
          link: "https://github.com/JoaoMaganin/employee_management_system",
        },
        {
          title: "Amazon web scrapping",
          description: "Scrapping products on Amazon",
          longDescription: "Developed as a tech challenge, this project is a web scraping tool focused on simplicity and efficiency for extracting product listings from Amazon. The tool automates the collection of data that would otherwise be done manually, demonstrating expertise in programming logic and analysis of web page structures for conversion into organized formats.",
          tags: ["TypeScript", "Express", "Bun", "Axios", "HTML/CSS"],
          image: "/amazon.png",
          video: "/videos/amazon-project.mp4",
          link: "https://github.com/JoaoMaganin/trainee-amazon-list",
        },
        {
          title: "Itaú Tech Challenge",
          description: "Financial API",
          longDescription: "Building a back-end API inspired by real banking systems, focused on transactional processing and security. The project uses Java with Spring Boot to implement a resilient architecture, demonstrating expertise in data persistence, exception handling, and RESTful patterns for financial operations.",
          tags: ["Java", "SpringBoot", "Swagger", "Docker", "Testes automatizados"],
          image: "/itau.png",
          link: "https://github.com/JoaoMaganin/itau-backend",
        },
        {
          title: "Guerra Viking",
          description: "Viking Barbershop",
          longDescription: `Construction of a ranking platform ("Guerra Viking") designed to stimulate customer engagement and loyalty. The project implements a dynamic interface that processes and displays scores in real time, demonstrating proficiency in state manipulation, asynchronous back-end integration, and clean, high-performance UI design. The project was built using React to create an immersive visual experience, highlighting skills in component structuring, dynamic requests, and responsive design.`,
          tags: ["React", "HTML", "CSS", "Google Apps Script"],
          image: "/vikings.png",
          link: "https://barbeariavikings.online/Guerra-Viking",
        }
      ]
    },
    contact: {
      title: "Contact",
      subtitle: "Let's work together?",
      tagline: "Available for freelance projects, full-time opportunities, or just to have a chat.",
      links: [
        { label: "GitHub", href: "https://github.com/JoaoMaganin", type: "github" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/joaomontemor/", type: "linkedin" },
        { label: "joaovitormontemor138@email.com", href: "mailto:joaovitormontemor138@email.com", type: "email" },
        { label: "Download resume", href: "/cv-en.pdf", type: "cv" },
      ],
      footer: "Built with React, GSAP and coffee ☕",
    },
  },
};