// Helper para disparar eventos no Google Analytics 4
declare function gtag(...args: unknown[]): void;

export const analytics = {
  // Projeto visualizado no carrossel
  viewProject: (title: string) => {
    gtag("event", "view_project", {
      project_title: title,
    });
  },

  // Modal de projeto aberto
  openProjectModal: (title: string) => {
    gtag("event", "open_project_modal", {
      project_title: title,
    });
  },

  // Link do projeto clicado
  clickProjectLink: (title: string) => {
    gtag("event", "click_project_link", {
      project_title: title,
    });
  },

  // Modal de experiência aberto
  openExperienceModal: (role: string, company: string) => {
    gtag("event", "open_experience_modal", {
      role,
      company,
    });
  },

  // Link de contato clicado
  clickContactLink: (type: string, label: string) => {
    gtag("event", "click_contact_link", {
      link_type: type,
      link_label: label,
    });
  },

  // Seção visitada (via IntersectionObserver)
  viewSection: (section: string) => {
    gtag("event", "view_section", {
      section_name: section,
    });
  },
};