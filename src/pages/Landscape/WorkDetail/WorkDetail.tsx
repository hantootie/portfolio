import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
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
        <div className="mb-16 rounded-2xl bg-white/5 border border-white/10">
            {/* Banner */}
            <FadeImage
                src={project.banner}
                alt={`${project.title} banner`}
                className="w-full h-64 object-cover rounded-lg mb-6"
            />

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4 rock-salt-text">{project.title}</h3>

            {/* Demo */}
            <div className="mb-8 flex flex-row gap-10">
                {project.demo_type === 'image' && project.demo_image ? (
                    <FadeImage
                        src={project.demo_image}
                        alt={`${project.title} demo`}
                        className="w-full max-h-[500px] object-contain rounded-lg"
                    />
                ) : youtubeId ? (
                    <div className="relative w-3/5 aspect-video">
                        <iframe
                            src={`https://www.youtube.com/embed/${youtubeId}`}
                            title={`${project.title} demo`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded-lg"
                        />
                    </div>
                ) : null}

                {/* Description */}
                <p className="w-2/5 mb-6 whitespace-pre-line schoolbell-text text-xl">{project.description}</p>
            </div>

            {/* Concept Illustrations */}
            {project.concept_illustrations && project.concept_illustrations.length > 0 && (
                <div className="mb-8">
                    <h4 className="text-lg rock-salt-text pb-2">Concept Art</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {project.concept_illustrations.map((item, i) => (
                            <div key={i} className="flex flex-col">
                                <FadeImage
                                    src={item.image}
                                    alt={item.caption || `Concept ${i + 1}`}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Storyboard */}
            {project.storyboard && project.storyboard.length > 0 && (
                <div className="mb-4">
                    <h4 className="text-lg rock-salt-text pb-2">Storyboard</h4>
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

const SECTION_TITLES: Record<ProjectType, string> = {
    freelance: "Chae's Freelance",
    animation: "Chae's Animations",
    illustration: "Chae's Illustrations",
};

const WorkDetail: React.FC = () => {
    const { type } = useParams<{ type: ProjectType }>();
    const projects = useLoaderData() as Project[];

    const title = type ? SECTION_TITLES[type] : '';

    return (
        <div className="flex flex-col gap-20">
            <section className="min-h-screen">
                <h2 className="rock-salt-text text-4xl mb-10">{title}</h2>
                {projects.length === 0 ? (
                    <p className="text-gray-500 italic">No projects yet.</p>
                ) : (
                    projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))
                )}
            </section>
        </div>
    );
};

export default WorkDetail;
