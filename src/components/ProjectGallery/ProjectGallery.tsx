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
    longDescription: "Sistema focado na oficina automotiva Maganin Automecânica, visando entregar uma gestão integrada de estoque, finanças, vendas. Até o momento, somente a primeira versão contendo o módulo de estoque foi entregue.. Utilizei Spring Boot no back-end e Next.js no front-end para garantir performance e SEO.",
    image: `${process.env.PUBLIC_URL}/assets/images/project1.png`,
    techs: ["Spring Boot", "Next.js", "SQLite", "API Rest"],
    link: "https://github.com/JoaoMaganin/ERP-Maganin-Automecanica"
  },
  {
    id: 2,
    title: "SyncFlow",
    description: "Gestão de tarefas(Trello-like).",
    longDescription: "O SyncFlow é uma solução full-stack para gestão de fluxos de trabalho. A aplicação destaca-se pela separação de responsabilidades em microsserviços desenvolvidos em Nest, permitindo que cada módulo evolua de forma independente. Implementa autenticação segura e comunicação entre serviços, unindo o poder de processamento do ecossistema Java à agilidade do front-end em React. Também possui serviço de mensageria com RabbitMQ.",
    image: `${process.env.PUBLIC_URL}/assets/gifs/syncflow.gif`,
    techs: ["Nest", "Microserviços", "React", "PostgreSQL", "API Rest", "RabbitMQ"],
    link: "https://github.com/JoaoMaganin/syncflow"
  },
  {
    id: 3,
    title: "Employee Management",
    description: "Sistema de gestão de recursos humanos",
    longDescription: "Sistema de gestão de recursos humanos desenvolvido para otimizar o controle de registros de colaboradores. A solução utiliza Spring Boot para uma API REST robusta e React para uma interface administrativa intuitiva, implementando operações CRUD completas com foco em integridade de dados e eficiência operacional.",
    image: `${process.env.PUBLIC_URL}/assets/images/project2.jpg`,
    techs: ["Java", "SpringBoot", "React", "PostgreSQL", "API Rest"],
    link: "https://github.com/JoaoMaganin/employee_management_system"
  },
  {
    id: 4,
    title: "Amazon Web Scraping",
    description: "Extração de informações da Amazon",
    longDescription: "Desenvolvido como tech challenge este projeto é um Web Scraping focado na simplicidade e eficiência para extrair listagens de produtos da Amazon. A ferramenta automatiza a coleta de dados que seriam buscados manualmente, refletindo competências em lógica de programação e análise de estruturas de páginas web para conversão em formatos organizados.",
    image: `${process.env.PUBLIC_URL}/assets/images/amazon.png`,
    techs: ["Java", "SpringBoot", "React", "PostgreSQL", "API Rest"],
    link: "https://github.com/JoaoMaganin/trainee-amazon-list/tree/master"
  },
  {
    id: 5,
    title: "Itaú Tech Challenge",
    description: "Desafio técnico Itaú",
    longDescription: "Desenvolvimento de uma API de back-end inspirada em sistemas bancários reais, focada em processamento transacional e segurança. O projeto utiliza Java com Spring Boot para implementar uma arquitetura resiliente, demonstrando domínio em persistência de dados, tratamento de exceções e padrões RESTful para operações financeiras.",
    image: `${process.env.PUBLIC_URL}/assets/images/itau.png`,
    techs: ["Java", "SpringBoot", "API Rest", "Docker", "Swagger", "Testes automatizados"],
    link: "https://github.com/JoaoMaganin/itau-backend"
  },
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