import type { LoaderFunctionArgs } from 'react-router-dom';
import type { Project, ProjectType } from '../types/project';

const VALID_TYPES: ProjectType[] = ['freelance', 'animation', 'illustration'];

export async function projectsLoader({ params }: LoaderFunctionArgs): Promise<Project[]> {
  const type = params.type as ProjectType;

  if (!VALID_TYPES.includes(type)) {
    return [];
  }

  const manifestRes = await fetch('/content/projects/index.json');
  if (!manifestRes.ok) {
    return [];
  }

  const filenames: string[] = await manifestRes.json();

  const projectPromises = filenames.map(async (filename) => {
    const res = await fetch(`/content/projects/${filename}`);
    if (!res.ok) return null;
    const data: Project = await res.json();
    return data;
  });

  const projects = (await Promise.all(projectPromises)).filter(
    (p): p is Project => p !== null
  );

  return projects.filter((p) => p.project_type === type);
}
