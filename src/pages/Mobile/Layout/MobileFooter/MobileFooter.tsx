import { useNavigate } from "react-router-dom";

const NavButton: React.FC<{ onClick?: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
    <button
        onClick={onClick}
        className="hover:opacity-70 hover:-translate-y-0.25 transition-transform duration-200 cursor-pointer"
    >
        {children}
    </button>
);

const MobileFooter: React.FC = () => {
    const navigate = useNavigate();
    
    return (
        <div className="
            bg-white 
            w-full px-20 py-3 
            flex flex-row justify-between 
            rock-salt-text"
        >
            <NavButton onClick={() => navigate('/work')}>
                Work
            </NavButton>
            <NavButton onClick={() => navigate('/about')}>
                About
            </NavButton>
            <NavButton onClick={() => navigate('/contact')}>
                Contact
            </NavButton>
        </div>
    )
}

export default MobileFooter;