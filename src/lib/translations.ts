export type NavKey = "home" | "about" | "experience" | "projects" | "contact";

export type ExperienceItem = {
  period: string;
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
  link?: string;
};

export type Translation = {
  nav: Record<NavKey, string>;
  hero: { subtitle: string; scroll: string };
  about: { title: string; bio1: string; bio2: string; skills: string };
  experience: { title: string; items: ExperienceItem[] };
  projects: { title: string; items: ProjectItem[] };
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
      subtitle: "Desenvolvedor frontend apaixonado por experiências que ficam na memória.",
      scroll: "scroll",
    },
    about: {
      title: "Sobre mim",
      bio1: "Sou um desenvolvedor frontend com foco em criar interfaces que combinam performance e beleza. Acredito que boas animações não são enfeite — são comunicação.",
      bio2: "Tenho experiência construindo produtos digitais do zero, da arquitetura de componentes à entrega final com atenção obsessiva aos detalhes.",
      skills: "Tecnologias",
    },
    experience: {
      title: "Experiência",
      items: [
        {
          period: "2023 — Presente",
          role: "Frontend Developer",
          company: "Empresa Atual",
          description: "Desenvolvimento de interfaces modernas com foco em performance e acessibilidade.",
          longDescription: "Liderança técnica no desenvolvimento de um design system do zero, adotado por mais de 10 times internos. Responsável pela arquitetura frontend de produtos com mais de 500k usuários ativos.",
          responsibilities: [
            "Criação e manutenção de design system com mais de 80 componentes",
            "Liderança técnica de um time de 4 desenvolvedores frontend",
            "Implementação de pipeline de CI/CD para deploy automatizado",
            "Redução de 40% no tempo de carregamento das páginas principais",
          ],
          tags: ["React", "TypeScript", "GSAP", "Storybook"],
        },
        {
          period: "2021 — 2023",
          role: "UI Developer",
          company: "Empresa Anterior",
          description: "Criação de componentes reutilizáveis e manutenção de design system.",
          longDescription: "Atuação próxima ao time de produto e design na construção de interfaces consistentes. Responsável pela migração de uma aplicação legada em jQuery para React.",
          responsibilities: [
            "Migração de aplicação legada jQuery para React",
            "Desenvolvimento de biblioteca de componentes reutilizáveis",
            "Colaboração direta com designers no Figma",
            "Implementação de testes unitários com Jest e Testing Library",
          ],
          tags: ["Vue.js", "Tailwind", "Figma", "Jest"],
        },
        {
          period: "2019 — 2021",
          role: "Web Developer",
          company: "Primeira Empresa",
          description: "Desenvolvimento de landing pages e e-commerces.",
          longDescription: "Primeiro contato com desenvolvimento profissional, construindo sites institucionais e lojas virtuais para pequenas e médias empresas.",
          responsibilities: [
            "Desenvolvimento de landing pages responsivas",
            "Integração com plataformas de e-commerce",
            "Otimização de performance e SEO",
            "Manutenção e suporte de projetos em produção",
          ],
          tags: ["HTML", "CSS", "JavaScript", "WordPress"],
        },
      ],
    },
    projects: {
      title: "Projetos",
      items: [
        {
          title: "Design System",
          description: "Biblioteca de componentes escalável com mais de 80 componentes documentados.",
          longDescription: "Um design system completo construído do zero para atender múltiplos produtos. Inclui tokens de design, componentes acessíveis e documentação interativa no Storybook.",
          tags: ["React", "TypeScript", "Storybook", "Tailwind"],
          image: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          link: "https://google.com",
        },
        {
          title: "Portfolio v2",
          description: "Portfólio pessoal com animações avançadas e scroll storytelling.",
          longDescription: "Este próprio portfólio! Construído com Vite + React, GSAP para animações complexas e um sistema de temas e idiomas totalmente customizado.",
          tags: ["Vite", "React", "GSAP", "Tailwind"],
          image: "linear-gradient(135deg, #0a0a0a 0%, #1a0a00 50%, #2d1500 100%)",
          link: "https://facebook.com",
        },
        {
          title: "E-commerce UI",
          description: "Interface de loja virtual com experiência de compra otimizada.",
          longDescription: "Redesign completo da experiência de compra de um e-commerce, com foco em conversão e performance. Redução de 30% no tempo de checkout.",
          tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
          image: "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #1c2128 100%)",
          link: "https://instagram.com",
        },
        {
          title: "Dashboard Analytics",
          description: "Painel de análise de dados em tempo real com gráficos interativos.",
          longDescription: "Dashboard para visualização de métricas de negócio com atualização em tempo real via WebSocket, filtros avançados e exportação de relatórios.",
          tags: ["React", "D3.js", "WebSocket", "Node.js"],
          image: "linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #0a3352 100%)",
          link: "https://youtube.com",
        },
        {
          title: "App Mobile",
          description: "Aplicativo de produtividade com sincronização offline.",
          longDescription: "App de gerenciamento de tarefas com suporte offline, sincronização em background e notificações push. Disponível para iOS e Android.",
          tags: ["React Native", "Expo", "SQLite", "Redux"],
          image: "linear-gradient(135deg, #1a0a1e 0%, #2d1040 50%, #1a0a1e 100%)",
          link: "https://registro.br",
        },
      ],
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
      subtitle: "Frontend developer passionate about experiences that stick.",
      scroll: "scroll",
    },
    about: {
      title: "About me",
      bio1: "I'm a frontend developer focused on building interfaces that balance performance and beauty. I believe good animations aren't decoration — they're communication.",
      bio2: "I have experience building digital products from scratch, from component architecture to final delivery with obsessive attention to detail.",
      skills: "Technologies",
    },
    experience: {
      title: "Experience",
      items: [
        {
          period: "2023 — Present",
          role: "Frontend Developer",
          company: "Current Company",
          description: "Building modern interfaces focused on performance and accessibility.",
          longDescription: "Technical lead on a design system built from scratch, adopted by more than 10 internal teams. Responsible for the frontend architecture of products with over 500k active users.",
          responsibilities: [
            "Creation and maintenance of a design system with 80+ components",
            "Technical lead of a team of 4 frontend developers",
            "Implementation of CI/CD pipeline for automated deployments",
            "40% reduction in load time for main pages",
          ],
          tags: ["React", "TypeScript", "GSAP", "Storybook"],
        },
        {
          period: "2021 — 2023",
          role: "UI Developer",
          company: "Previous Company",
          description: "Creating reusable components and maintaining design system.",
          longDescription: "Worked closely with product and design teams to build consistent interfaces. Led the migration of a legacy jQuery application to React.",
          responsibilities: [
            "Migration of legacy jQuery app to React",
            "Development of reusable component library",
            "Direct collaboration with designers in Figma",
            "Unit test implementation with Jest and Testing Library",
          ],
          tags: ["Vue.js", "Tailwind", "Figma", "Jest"],
        },
        {
          period: "2019 — 2021",
          role: "Web Developer",
          company: "First Company",
          description: "Developing landing pages and e-commerce sites.",
          longDescription: "First professional development experience, building institutional websites and online stores for small and medium businesses.",
          responsibilities: [
            "Development of responsive landing pages",
            "Integration with e-commerce platforms",
            "Performance and SEO optimization",
            "Maintenance and support of production projects",
          ],
          tags: ["HTML", "CSS", "JavaScript", "WordPress"],
        },
      ],
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "Design System",
          description: "Scalable component library with 80+ documented components.",
          longDescription: "A complete design system built from scratch to serve multiple products. Includes design tokens, accessible components and interactive Storybook documentation.",
          tags: ["React", "TypeScript", "Storybook", "Tailwind"],
          image: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          link: "https://github.com",
        },
        {
          title: "Portfolio v2",
          description: "Personal portfolio with advanced animations and scroll storytelling.",
          longDescription: "This very portfolio! Built with Vite + React, GSAP for complex animations and a fully custom theme and language system.",
          tags: ["Vite", "React", "GSAP", "Tailwind"],
          image: "linear-gradient(135deg, #0a0a0a 0%, #1a0a00 50%, #2d1500 100%)",
          link: "https://github.com",
        },
        {
          title: "E-commerce UI",
          description: "Online store interface with optimized shopping experience.",
          longDescription: "Complete redesign of an e-commerce shopping experience, focused on conversion and performance. 30% reduction in checkout time.",
          tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
          image: "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #1c2128 100%)",
          link: "https://github.com",
        },
        {
          title: "Analytics Dashboard",
          description: "Real-time data analysis panel with interactive charts.",
          longDescription: "Business metrics visualization dashboard with real-time WebSocket updates, advanced filters and report exports.",
          tags: ["React", "D3.js", "WebSocket", "Node.js"],
          image: "linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #0a3352 100%)",
          link: "https://github.com",
        },
        {
          title: "Mobile App",
          description: "Productivity app with offline sync.",
          longDescription: "Task management app with offline support, background sync and push notifications. Available for iOS and Android.",
          tags: ["React Native", "Expo", "SQLite", "Redux"],
          image: "linear-gradient(135deg, #1a0a1e 0%, #2d1040 50%, #1a0a1e 100%)",
          link: "https://github.com",
        },
      ],
    },
  },
};