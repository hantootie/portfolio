import { Link } from 'react-router-dom';
import freelanceIcon from '../../../assets/Freelance_Icon.png';
import animationIcon from '../../../assets/Animation_Icon.png';
import illustrationIcon from '../../../assets/Illustration_Icon.png';
import FadeImage from '../../../components/FadeImage/FadeImage';

interface WorkIconProps {
    imagePath: string;
    section: string;
}

const WorkIcon: React.FC<WorkIconProps> = ({ imagePath, section }) => {
    return (
        <Link to={`/work/${section}`} className="flex-1 min-w-0">
            <FadeImage
                src={imagePath}
                className="w-full h-auto cursor-pointer hover:opacity-70 hover:-translate-y-0.25 transition-all duration-200"
            />
        </Link>
    );
};

const workConfigs = [
    { imagePath: freelanceIcon, section: 'freelance' },
    { imagePath: animationIcon, section: 'animation' },
    { imagePath: illustrationIcon, section: 'illustration' },
];

const Work: React.FC = () => {
    return (
        <>
            <div className='rock-salt-text text-5xl mb-10 opacity-0 animate-slide-up-fade'>
                Chae's work .
            </div>
            <div className="flex flex-row gap-10">
                {workConfigs.map(({ imagePath, section }) => (
                    <WorkIcon key={imagePath} imagePath={imagePath} section={section} />
                ))}
            </div>
        </>
    );
};

export default Work;
