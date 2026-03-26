import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import type { Project, ProjectType } from '../../../types/project';
import FadeImage from '../../../components/FadeImage/FadeImage';
import { useWorkDetail, slugify } from '../../../context/WorkDetailContext';

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

    const hasDemo = (project.demo_type === 'image' && project.demo_image) || youtubeId;

    return (
        <div id={project.title ? slugify(project.title) : undefined} className="mb-16 rounded-2xl bg-white/5 border border-white/10 scroll-mt-10">
            {/* Banner */}
            { project.banner && 
                <FadeImage
                    src={project.banner}
                    alt={`${project.title ?? ''} banner`}
                    className="w-full h-full object-cover rounded-md mb-6"
                />
            }
            
            {/* Title */}
            {project.title && (
                <h3 className="text-xl md:text-2xl font-bold mb-4 rock-salt-text">{project.title}</h3>
            )}

            {/* Demo + Description */}
            {(hasDemo || project.description) && (
                <div className="mb-8 flex flex-col md:flex-row gap-10 items-center">
                    {project.demo_type === 'image' && project.demo_image ? (
                        <FadeImage
                            src={project.demo_image}
                            alt={`${project.title ?? ''} demo`}
                            className="w-full md:w-3/5 object-contain rounded-md"
                        />
                    ) : youtubeId ? (
                        <div className="relative w-full md:w-3/5 aspect-video">
                            <iframe
                                src={`https://www.youtube.com/embed/${youtubeId}`}
                                title={`${project.title ?? ''} demo`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full rounded-lg"
                            />
                        </div>
                    ) : null}

                    {/* Description */}
                    {project.description && (
                        <p className="w-full md:w-2/5 mb-6 whitespace-pre-line schoolbell-text text-xl">{project.description}</p>
                    )}
                </div>
            )}

            {/* Storyboard */}
            {project.storyboard && project.storyboard.length > 0 && (
                <div className="mb-4">
                    <h4 className="text-lg rock-salt-text pb-2">Storyboard</h4>
                    <div className="grid grid-cols-3 gap-1">
                        {project.storyboard.map((item, i) => (
                            <FadeImage
                                key={i}
                                src={item.image}
                                alt={`Storyboard ${i + 1}`}
                                className={`w-full h-full object-cover ${
                                    item.col_span === 3 ? 'col-span-3' :
                                    item.col_span === 2 ? 'col-span-2' :
                                    'col-span-1'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Resume PDF */}
            {project.resume_pdf && (
                <div>
                    <iframe
                        src={`${project.resume_pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                        title="Resume"
                        className="w-full object-contain rounded-md mb-5"
                        style={{ aspectRatio: '8.5 / 11' }}
                    />

                    <div className="flex items-center justify-between pb-2">
                        <a
                            href={project.resume_pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="schoolbell-text text-sm underline opacity-70 hover:opacity-100 transition-opacity"
                        >
                            Download PDF
                        </a>
                    </div>
                </div>
            )}

            {/* Concept Illustrations */}
            {project.concept_illustrations && project.concept_illustrations.length > 0 && (
                <div className="mb-8">
                    <h4 className="text-lg rock-salt-text pb-2">Illustrations</h4>
                    <div className="grid grid-cols-3 gap-1">
                        {project.concept_illustrations.map((item, i) => (
                            <FadeImage
                                key={i}
                                src={item.image}
                                alt={`Concept ${i + 1}`}
                                className={`w-full h-full object-cover ${
                                    item.col_span === 3 ? 'col-span-3' :
                                    item.col_span === 2 ? 'col-span-2' :
                                    'col-span-1'
                                }`}
                            />
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
    design: "Chae's Design",
    storyboard: "Chae's Storyboards",
    resume: "Chae's Resume",
};

const WorkDetail: React.FC = () => {
    const { type } = useParams<{ type: ProjectType }>();
    const projects = useLoaderData() as Project[];
    const { setProjectTitles } = useWorkDetail();

    const title = type ? SECTION_TITLES[type] : '';

    useEffect(() => {
        setProjectTitles(projects.map((p) => p.title).filter((t): t is string => !!t));
        return () => setProjectTitles([]);
    }, [projects]);

    return (
        <div className="flex flex-col gap-20">
            <section className="min-h-screen">
                <h2 className="rock-salt-text text-2xl md:text-4xl mb-5 md:mb-10">{title}</h2>
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
