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

export type Translation = {
  nav: Record<NavKey, string>;
  hero: { subtitle: string; scroll: string };
  about: { title: string; bio1: string; bio2: string; skills: string };
  experience: { title: string; items: ExperienceItem[] };
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
  },
};