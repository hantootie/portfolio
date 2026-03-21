

import freelanceIcon from '../../assets/Freelance_Icon.png';
import animationIcon from '../../assets/Animation_Icon.png';
import illustrationIcon from '../../assets/Illustration_Icon.png';

interface WorkIconProps {
    imagePath: string
}

const WorkIcon: React.FC<WorkIconProps> = ({ imagePath }) => {
    return (
        <div className="flex-1 min-w-0">
            <img 
                src={imagePath} 
                className="w-full h-auto"
            />
        </div>
    )
}

const workConfigs: WorkIconProps[] = [
    { imagePath: freelanceIcon },
    { imagePath: animationIcon },
    { imagePath: illustrationIcon },
]

const Work: React.FC = () => {
    return (
        <>
            <div className='rock-salt-text text-5xl mb-10'>
                Chae's work .
            </div>
            <div className="flex flex-row gap-10">
                {
                    workConfigs.map(({ imagePath }) => (
                        <WorkIcon imagePath={imagePath} />
                    ))
                }
            </div>
        </>
    )
}

export default Work;