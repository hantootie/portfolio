import FadeImage from "../../../components/FadeImage/FadeImage";
import mobileAboutImage from "../../../assets/Mobile_About.png";
import { NavButton } from "../../Landscape/Layout/SideNav/SideNav";
import { useNavigate } from "react-router-dom";

const MobileAbout: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative">
            <div className="absolute h-1/4 w-3/8 bottom-1/8 left-1/45 flex justify-center items-center">
                <NavButton onClick={() => navigate('/work/resume')} className="rock-salt-text text-3xl text-red">
                    Resume
                    <br/>
                    +
                    <br/>
                    CV
                </NavButton>

            </div>
            <FadeImage src={mobileAboutImage} />
        </div>
    )
}

export default MobileAbout;