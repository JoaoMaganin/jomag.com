export const TECHS = ["React", "Java", "TypeScript", "Python", "Node.js", "SpringBoot", "Django", "Nest.js", "Next.js", "SQL"];

export const skills = [ "TypeScript", "Java", "Python", "JavaScript", "HTML", "CSS", "Angular", "React", "Spring Boot", "Django", "Nest.js", "SQL", "Docker", "RabbitMQ", "Sharepoint"];

// ── Feature Flags ────────────────────────────────────────────────────────────
 
// Ativa o banner "Projeto em destaque" abaixo da navbar
export const SHOW_FEATURED_BANNER = true;
 
// Configuração do projeto em destaque
export const FEATURED_PROJECT = {
  // Índice do projeto no array translations[lang].projects.items
  // FIX: AO ADICIONAR UM INDICE EXISTENTE E SHOW_FEATURED_FALSE, O PROJETO
  // APRESENTA UMA BORDA MAL POSICIONADA
  index: 1, 
};
 