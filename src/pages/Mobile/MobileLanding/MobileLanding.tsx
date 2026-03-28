import FadeImage from "../../../components/FadeImage/FadeImage";
import mobileLanding1 from '../../../assets/Mobile_Landing_1.png';
import mobileLanding2 from '../../../assets/Mobile_Landing_2.png';
import mobileLanding3 from '../../../assets/Mobile_Landing_3.png';
import mobileLanding4 from '../../../assets/Mobile_Landing_4.png';
import mobileLanding5 from '../../../assets/Mobile_Landing_5.png';
import { useNavigate } from "react-router-dom";
import { NavButton } from "../../Landscape/Layout/SideNav/SideNav";

const MobileLanding: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex flex-col gap-3">
                <div className="relative">
                    <FadeImage src={mobileLanding2} className="absolute -right-3 -bottom-1/4 w-2/5 z-1" />
                    <FadeImage src={mobileLanding1} />
                </div>
                <div className="relative">
                    <div className="absolute -bottom-1/3 left-4 w-1/2 z-2">
                    <div className="
                        absolute 
                        h-4/5
                        w-2/5
                        right-1/12
                        top-1/5
                        flex
                        justify-center
                        items-center
                        "
                    >
                        <NavButton onClick={() => navigate('/about')} className="rock-salt-text text-red text-xl">
                            {"About\n Chae"}
                        </NavButton>

                    </div>
                        <FadeImage src={mobileLanding4} />

                    </div>
                    <FadeImage src={mobileLanding3} />
                    <div className="
                        z-2
                        h-1/3
                        w-2/9
                        absolute 
                        top-4/11 
                        left-1/10
                        flex justify-center items-center"
                    >
                        <NavButton
                            onClick={() => navigate('/work')}
                            className="z-2 rock-salt-text absolute text-xl text-red"
                        >
                            Work
                        </NavButton>
                    </div>
                    <div className="
                        z-2
                        h-1/3
                        w-2/9
                        absolute 
                        top-4/11 
                        right-1/18
                         flex justify-center items-center"
                    >
                        <NavButton
                            onClick={() => navigate('/contact')}
                            className="rock-salt-text text-xl text-red"
                        >
                            Contact
                        </NavButton>
                    </div>
                    
                </div>
                <div className="flex flex-row justify-end">
                    <FadeImage src={mobileLanding5} className="w-1/3" />
                </div>
            </div>
        </div>

    )
}

export default MobileLanding;