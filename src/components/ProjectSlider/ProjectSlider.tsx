import React, { useState, useEffect } from 'react';
import './ProjectSlider.css';
import { ProjectImage } from '../../types';

interface ProjectSliderProps {
  images: ProjectImage[];
  autoPlayInterval?: number;
}

const ProjectSlider: React.FC<ProjectSliderProps> = (
  {
    images = [],
    autoPlayInterval = 2500
  }
) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(slideInterval);
  }, [images.length, autoPlayInterval]);

  if (images.length === 0) {
    return (
      <div className="project-slider-empty" role="alert">
        Nenhum projeto para exibir no momento.
      </div>
    );
  }

  return (
    <div className="project-slider-container" aria-roledescription="carousel">
      <div
        className="project-slider-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
            <img
              src={image.src}
              alt={image.alt}
              className="project-image"
              loading="lazy"
            />
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;