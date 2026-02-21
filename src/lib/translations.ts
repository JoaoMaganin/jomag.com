export type NavKey = "home" | "about" | "experience" | "projects" | "contact";

export type Translation = {
  nav: Record<NavKey, string>;
  hero: { subtitle: string; scroll: string };
  about: { title: string; bio1: string; bio2: string; skills: string };
  experience: {
    title: string;
    items: {
      period: string;
      role: string;
      company: string;
      description: string;
      tags: string[];
    }[];
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
          description: "Desenvolvimento de interfaces modernas com foco em performance e acessibilidade. Liderança técnica de projetos de design system.",
          tags: ["React", "TypeScript", "GSAP"],
        },
        {
          period: "2021 — 2023",
          role: "UI Developer",
          company: "Empresa Anterior",
          description: "Criação de componentes reutilizáveis e manutenção de design system. Colaboração próxima com time de design.",
          tags: ["Vue.js", "Tailwind", "Figma"],
        },
        {
          period: "2019 — 2021",
          role: "Web Developer",
          company: "Primeira Empresa",
          description: "Desenvolvimento de landing pages e e-commerces. Primeiros passos com animações e experiências interativas.",
          tags: ["HTML", "CSS", "JavaScript"],
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
          description: "Building modern interfaces focused on performance and accessibility. Technical lead on design system projects.",
          tags: ["React", "TypeScript", "GSAP"],
        },
        {
          period: "2021 — 2023",
          role: "UI Developer",
          company: "Previous Company",
          description: "Creating reusable components and maintaining design system. Close collaboration with the design team.",
          tags: ["Vue.js", "Tailwind", "Figma"],
        },
        {
          period: "2019 — 2021",
          role: "Web Developer",
          company: "First Company",
          description: "Developing landing pages and e-commerce sites. First steps with animations and interactive experiences.",
          tags: ["HTML", "CSS", "JavaScript"],
        },
      ],
    },
  },
};