import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useProjects } from '../../../hooks/useProjects';
import type { Project, ProjectType } from '../../../types/project';
import FadeImage from '../../../components/FadeImage/FadeImage';

function extractYouTubeId(url: string): string | null {
    try {
        const parsed = new URL(url);
        if (parsed.hostname.includes('youtube.com')) {
            return parsed.searchParams.get('v');
        }
        if (parsed.hostname === 'youtu.be') {
            return parsed.pathname.slice(1);
        }
    } catch {
        // ignore invalid URLs
    }
    return null;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const youtubeId = project.demo_type === 'youtube' && project.demo_youtube_url
        ? extractYouTubeId(project.demo_youtube_url)
        : null;

    return (
        <div className="mb-16 p-6 rounded-2xl bg-white/5 border border-white/10">
            {/* Banner */}
            <FadeImage
                src={project.banner}
                alt={`${project.title} banner`}
                className="w-full h-64 object-cover rounded-xl mb-6"
            />

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

            {/* Description */}
            <p className="mb-6 text-gray-300 whitespace-pre-line">{project.description}</p>

            {/* Demo */}
            <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3 text-gray-200">Project Demo</h4>
                {project.demo_type === 'image' && project.demo_image ? (
                    <FadeImage
                        src={project.demo_image}
                        alt={`${project.title} demo`}
                        className="w-full max-h-[500px] object-contain rounded-lg"
                    />
                ) : youtubeId ? (
                    <div className="relative w-full aspect-video">
                        <iframe
                            src={`https://www.youtube.com/embed/${youtubeId}`}
                            title={`${project.title} demo`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded-lg"
                        />
                    </div>
                ) : null}
            </div>

            {/* Concept Illustrations */}
            {project.concept_illustrations && project.concept_illustrations.length > 0 && (
                <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3 text-gray-200">Concept Illustrations</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {project.concept_illustrations.map((item, i) => (
                            <div key={i} className="flex flex-col">
                                <FadeImage
                                    src={item.image}
                                    alt={item.caption || `Concept ${i + 1}`}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                                {item.caption && (
                                    <span className="text-sm text-gray-400 mt-1 text-center">{item.caption}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Storyboard */}
            {project.storyboard && project.storyboard.length > 0 && (
                <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-3 text-gray-200">Storyboard</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {project.storyboard.map((item, i) => (
                            <div key={i} className="flex flex-col">
                                <FadeImage
                                    src={item.image}
                                    alt={item.caption || `Storyboard ${i + 1}`}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                                {item.caption && (
                                    <span className="text-sm text-gray-400 mt-1 text-center">{item.caption}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const SECTION_CONFIG: { type: ProjectType; title: string }[] = [
    { type: 'freelance', title: "Chae's Freelance" },
    { type: 'animation', title: "Chae's Animations" },
    { type: 'illustration', title: "Chae's Illustrations" },
];

const WorkDetail: React.FC = () => {
    const { hash } = useLocation();
    const { projectsByType, loading, error } = useProjects();

    useEffect(() => {
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [hash, loading]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-xl text-gray-400">Loading projects...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-xl text-red-400">Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-20">
            {SECTION_CONFIG.map(({ type, title }) => (
                <section key={type} id={type} className="min-h-screen scroll-mt-15">
                    <h2 className="rock-salt-text text-4xl mb-10">{title}</h2>
                    {projectsByType[type].length === 0 ? (
                        <p className="text-gray-500 italic">No projects yet.</p>
                    ) : (
                        projectsByType[type].map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))
                    )}
                </section>
            ))}
        </div>
    );
};

export default WorkDetail;
