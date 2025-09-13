// src/components/ProjectSlider/ProjectSlider.tsx

import React, { useState, useEffect } from 'react';
import './ProjectSlider.css';

// Opcional: interface para o objeto de projeto se estiver usando TypeScript
interface ProjectImage {
  src: string;
  alt: string;
}

// Coloque suas imagens aqui
const PROJECT_IMAGES: ProjectImage[] = [
    { src: `${process.env.PUBLIC_URL}/assets/images/project1.png`, alt: 'ERP Maganin Automecânica' },
    { src: `${process.env.PUBLIC_URL}/assets/images/project2.jpg`, alt: 'Employee Management System' },
    // { src: `${process.env.PUBLIC_URL}/assets/images/avatar.jpg`, alt: 'Aplicativo de Tarefas Mobile' },
    // { src: `${process.env.PUBLIC_URL}/logo512.png`, alt: 'Website Corporativo Moderno' },
];

const ProjectSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hook para controlar a troca automática de imagens
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % PROJECT_IMAGES.length);
    }, 2500);

    // Função de limpeza: é MUITO importante limpar o intervalo
    // quando o componente for "desmontado" (sair da tela) para evitar vazamento de memória.
    return () => clearInterval(slideInterval);
  }, []); // O array de dependências vazio `[]` faz com que este useEffect rode apenas uma vez, quando o componente é montado.

  if (!PROJECT_IMAGES || PROJECT_IMAGES.length === 0) {
    return <div className="project-slider-empty">Nenhum projeto para exibir.</div>;
  }

  return (
    <div className="project-slider-container">
      <div
        className="project-slider-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {PROJECT_IMAGES.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="project-image"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;