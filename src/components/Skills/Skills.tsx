import React, { useState, useEffect } from 'react';
import {
  Terminal, Storage, Code, DataObject,
  SettingsSuggest, Devices, IntegrationInstructions, BugReport,
  ExpandMore,
  Hub,
  Loop,
  AssignmentTurnedIn,
  AdsClick,
} from '@mui/icons-material';
import RouteIcon from '@mui/icons-material/Route';
import './Skills.css';

const skillCategories = [
  {
    title: "Backend",
    skills: [
      { name: "Java (Spring Boot)", icon: <SettingsSuggest /> },
      { name: "NodeJS (NestJS)", icon: <DataObject /> },
      { name: "Microsserviços", icon: <Hub /> },
      { name: "Python (Django)", icon: <Code /> },
      { name: "API RESTful", icon: <IntegrationInstructions /> }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "TypeScript", icon: <Terminal /> },
      { name: "ReactJS / Next.js", icon: <Devices /> },
      { name: "TanStack Router", icon: <RouteIcon /> },
      { name: "Angular", icon: <Code /> },
      { name: "MUI / CSS Moderno", icon: <Devices /> }
    ]
  },
  {
    title: "DevOps & Data",
    skills: [
      { name: "Docker", icon: <Storage /> },
      { name: "CI/CD (GitHub Actions)", icon: <SettingsSuggest /> },
      { name: "PostgreSQL / Oracle", icon: <Storage /> },
      { name: "RabbitMQ / Mensageria", icon: <SettingsSuggest /> },
      { name: "Testes Automatizados", icon: <BugReport /> }
    ]
  },
  {
    title: "Processos & Gestão",
    skills: [
      { name: "Metodologias Ágeis (Scrum/Kanban)", icon: <Loop /> },
      { name: "GitFlow / Versionamento", icon: <AssignmentTurnedIn /> },
      { name: "Documentação Técnica", icon: <AssignmentTurnedIn /> },
      { name: "Clean Code", icon: <AdsClick /> }
    ]
  }
];

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openCategories, setOpenCategories] = useState<number[]>([]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      // Se for desktop, mantém tudo aberto. Se for mobile, inicia fechado.
      if (!mobile) {
        setOpenCategories(skillCategories.map((_, i) => i));
      } else {
        setOpenCategories([]);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCategory = (index: number) => {
    if (!isMobile) return; // No desktop, não faz nada ao clicar

    setOpenCategories(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="skills-container">
      <h2 className="section-title">Habilidades Técnicas</h2>
      <div className="skills-grid">
        {skillCategories.map((category, idx) => {
          const isOpen = openCategories.includes(idx);
          return (
            <div key={idx} className={`skill-category ${isOpen ? 'active' : ''}`}>
              <div
                className="category-header"
                onClick={() => toggleCategory(idx)}
                style={{ cursor: isMobile ? 'pointer' : 'default' }}
              >
                <h3>{category.title}</h3>
                {isMobile && (
                  <ExpandMore className={`expand-icon ${isOpen ? 'rotate' : ''}`} />
                )}
              </div>

              <div className={`skills-collapse ${isOpen ? 'expanded' : 'collapsed'}`}>
                <div className="skill-list">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-item">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;