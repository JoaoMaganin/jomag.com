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

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techs: string[];
  link?: string;
}

export interface ProjectGalleryProps {
  projects: Project[];
}