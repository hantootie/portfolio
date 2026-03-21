import { useNavigate } from 'react-router-dom';
import chaeLogo from '../../../../assets/Chae_logo.png';
import { useAboutChae } from '../../../../context/AboutChaeContext';

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
    const { openAbout } = useAboutChae();

    return (
        <div className="flex w-1/5 mb-10">
            <div className="flex flex-col gap-15 rock-salt-text text-sm md:text-lg lg:text-xl xl:text-2xl flex-1">
                <div className="flex justify-center">
                    <img 
                        src={chaeLogo}
                        onClick={() => navigate('/')}
                        className=" w-3/4 mt-5 cursor-pointer hover:opacity-70 hover:-translate-y-0.25"
                    />
                </div>
                <NavButton onClick={() => navigate('/work')}>Work .</NavButton>
                <NavButton onClick={() => navigate('/contact')}>Contact</NavButton>
                <NavButton onClick={() => openAbout()}>About</NavButton>
            </div>
            <div className="mt-10 w-[2.5px] bg-black rounded-full self-stretch" />
        </div>
    )
}

export default SideNav;
