export interface WordRotatorProps {
  skills: string[];
  period?: number;
}

export interface ProjectImage {
  src: string;
  alt: string;
  title: string;
}

export interface ProjectSliderProps {
  images: ProjectImage[];
  autoPlayInterval?: number;
}