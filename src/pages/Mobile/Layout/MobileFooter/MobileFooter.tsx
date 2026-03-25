import { useNavigate } from "react-router-dom";

const MobileFooter: React.FC = () => {
    const navigate = useNavigate();
    
    return (
        <div className="
            sticky bottom-0 
            bg-white 
            w-full px-20 py-3 
            flex flex-row justify-between 
            rock-salt-text"
        >
            <button onClick={() => navigate('/work')}>
                Work
            </button>
            <button onClick={() => navigate('/contact')}>
                Contact
            </button>
            <button onClick={() => navigate('/about')}>
                About
            </button>

        </div>
    )
}

export default MobileFooter;