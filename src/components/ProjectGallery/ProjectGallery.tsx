import React, { useState } from 'react';
import './ProjectGallery.css';
import { Project, ProjectGalleryProps } from '../../types';

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ projects = [] }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (!projects || projects.length === 0) {
    return (
      <section className="gallery-container">
        <h2 className="section-title">Meus Projetos</h2>
        <p className="no-projects">Nenhum projeto encontrado.</p>
      </section>
    );
  }

  return (
    <section className="gallery-container">
      <h2 className="section-title">Meus Projetos</h2>

      <div className="grid-gallery">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-item"
            onClick={() => setSelectedProject(project)}
            data-testid={`project-item-${project.id}`}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>Ver detalhes</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)} data-testid="modal-overlay">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)} aria-label="Fechar modal">&times;</button>
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