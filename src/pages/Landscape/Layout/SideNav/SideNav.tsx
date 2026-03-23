import { useLocation, useNavigate } from 'react-router-dom';
import chaeLogo from '../../../../assets/Chae_logo.png';
import { useAboutChae } from '../../../../context/AboutChaeContext';
import { useWorkDetail, slugify } from '../../../../context/WorkDetailContext';
import FadeImage from '../../../../components/FadeImage/FadeImage';

const NavButton: React.FC<{ onClick?: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
    <button
        onClick={onClick}
        className="hover:opacity-70 hover:-translate-y-0.25 transition-transform duration-200 cursor-pointer"
    >
        {children}
    </button>
);

const SideNav: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { openAbout } = useAboutChae();
    const { projectTitles } = useWorkDetail();

    const isWorkDetail = /^\/work\/.+/.test(location.pathname);

    const scrollToProject = (title: string) => {
        const id = slugify(title);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex h-full">
            <div className="flex flex-col gap-15 rock-salt-text sm:text-2xl xl:text-4xl flex-1">
                <div className="flex justify-center">
                    <FadeImage
                        src={chaeLogo}
                        onClick={() => navigate('/')}
                        className=" w-3/4 mt-5 cursor-pointer hover:opacity-70 hover:-translate-y-0.25 aspect-[2974/1073]"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <NavButton onClick={() => navigate('/work')}>Work .</NavButton>
                    {isWorkDetail && projectTitles.length > 0 && (
                        <div className="flex flex-col gap-3 xl:text-xl sm:text-sm items-center">
                            {projectTitles.map((title) => (
                                <NavButton
                                    key={title}
                                    onClick={() => scrollToProject(title)}
                                >
                                    {title}
                                </NavButton>
                            ))}
                        </div>
                    )}
                </div>
                <NavButton onClick={() => navigate('/contact')}>Contact</NavButton>
                <NavButton onClick={() => openAbout()}>About</NavButton>
            </div>
            <div className="mt-10 mb-10 w-[2.5px] bg-black rounded-full self-stretch" />
        </div>
    )
}

export default SideNav;
