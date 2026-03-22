import { useState, useEffect } from 'react';
import type { Project, ProjectType, ProjectsByType } from '../types/project';

const PROJECT_TYPES: ProjectType[] = ['freelance', 'animation', 'illustration'];

function emptyProjectsByType(): ProjectsByType {
  return {
    freelance: [],
    animation: [],
    illustration: [],
  };
}

export function useProjects() {
  const [projectsByType, setProjectsByType] = useState<ProjectsByType>(emptyProjectsByType());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchProjects() {
      try {
        // Fetch the manifest of project files
        const manifestRes = await fetch('/content/projects/index.json');
        if (!manifestRes.ok) {
          // No projects yet — that's fine
          if (!cancelled) {
            setProjectsByType(emptyProjectsByType());
            setLoading(false);
          }
          return;
        }

        const filenames: string[] = await manifestRes.json();

        // Fetch each project JSON file
        const projectPromises = filenames.map(async (filename) => {
          const res = await fetch(`/content/projects/${filename}`);
          if (!res.ok) return null;
          const data: Project = await res.json();
          return data;
        });

        const projects = (await Promise.all(projectPromises)).filter(
          (p): p is Project => p !== null
        );

        // Group by type
        const grouped = emptyProjectsByType();
        for (const type of PROJECT_TYPES) {
          grouped[type] = projects.filter((p) => p.project_type === type);
        }

        if (!cancelled) {
          setProjectsByType(grouped);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load projects');
          setLoading(false);
        }
      }
    }

    fetchProjects();

    return () => {
      cancelled = true;
    };
  }, []);

  return { projectsByType, loading, error };
}
