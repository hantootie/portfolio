

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
    {
        imagePath: "Freelance_Icon.png"
    },
    {
        imagePath: "Animation_Icon.png"
    },
    {
        imagePath: "Illustration_Icon.png"
    }
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
                        <WorkIcon imagePath={`src/assets/${imagePath}`} />
                    ))
                }
            </div>
        </>
    )
}

export default Work;