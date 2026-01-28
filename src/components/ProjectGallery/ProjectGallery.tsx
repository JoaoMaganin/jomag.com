import React, { useState } from 'react';
import './ProjectGallery.css';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techs: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "ERP Maganin Automecânica",
    description: "Sistema de gestão completo para oficinas.",
    longDescription: "Desenvolvido como freelancer, este ERP gerencia desde o estoque até a emissão de ordens de serviço. Utilizei Spring Boot no back-end e Next.js no front-end para garantir performance e SEO.",
    image: `${process.env.PUBLIC_URL}/assets/images/project1.png`,
    techs: ["Spring Boot", "Next.js", "SQLite"],
    link: "https://github.com/JoaoMaganin/mecajato"
  },
  {
    id: 2,
    title: "SyncFlow",
    description: "Gestão de tarefas com microserviços.",
    longDescription: "O SyncFlow é um sistema colaborativo focado em produtividade. A arquitetura foi pensada em microserviços para permitir escalabilidade independente de cada módulo do sistema.",
    image: `${process.env.PUBLIC_URL}/assets/images/project2.jpg`,
    techs: ["Java", "Microserviços", "React"],
  }
];

const ProjectGallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="gallery-container">
      <h2 className="section-title">Meus Projetos</h2>
      
      <div className="grid-gallery">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="project-item"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>Ver detalhes</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Detalhes */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>&times;</button>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <div className="modal-text">
              <h2>{selectedProject.title}</h2>
              <p className="long-description">{selectedProject.longDescription}</p>
              <div className="modal-techs">
                {selectedProject.techs.map(tech => <span key={tech} className="tech-tag">{tech}</span>)}
              </div>
              {selectedProject.link && (
                <a href={selectedProject.link} target="_blank" rel="noreferrer" className="project-link">
                  Ver no GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectGallery;