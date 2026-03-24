export type ProjectType = 'freelance' | 'animation' | 'illustration';

export interface ProjectImage {
  image: string;
  col_span?: 1 | 2 | 3;
}

export interface Project {
  title: string;
  project_type: ProjectType;
  banner: string;
  demo_type: 'image' | 'youtube';
  demo_image?: string;
  demo_youtube_url?: string;
  description: string;
  concept_illustrations?: ProjectImage[];
  storyboard?: ProjectImage[];
}

export type ProjectsByType = Record<ProjectType, Project[]>;
