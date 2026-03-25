export type ProjectType = 'freelance' | 'animation' | 'illustration' | 'design' | 'storyboard' | 'resume';

export interface ProjectImage {
  image: string;
  col_span?: 1 | 2 | 3;
}

export interface Project {
  title?: string;
  order?: number;
  project_type: ProjectType;
  banner?: string;
  demo_type?: 'image' | 'youtube';
  demo_image?: string;
  demo_youtube_url?: string;
  description?: string;
  concept_illustrations?: ProjectImage[];
  storyboard?: ProjectImage[];
  resume_pdf?: string;
}

export type ProjectsByType = Record<ProjectType, Project[]>;
