import { useNavigate } from 'react-router-dom';

const NavButton: React.FC<{ onClick?: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
    <button
        onClick={onClick}
        className=" hover:opacity-70 hover:-translate-y-0.25 transition-transform duration-200 cursor-pointer"
    >
        {children}
    </button>
);

const SideNav: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex w-1/5 mt-10 mb-10">
            <div className="flex flex-col gap-15 rock-salt-text text-2xl flex-1">
                <NavButton onClick={() => navigate('/')}>Logo</NavButton>
                <NavButton onClick={() => navigate('/work')}>Work .</NavButton>
                <NavButton onClick={() => navigate('/contact')}>Contact</NavButton>
                <NavButton>About</NavButton>
            </div>
            <div className="w-[3px] bg-black rounded-full self-stretch" />
        </div>
    )
}

export default SideNav;
