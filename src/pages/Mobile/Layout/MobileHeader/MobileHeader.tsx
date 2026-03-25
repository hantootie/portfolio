import { useNavigate } from 'react-router-dom';
import logo from '../../../../assets/Chae_logo.png';
import FadeImage from '../../../../components/FadeImage/FadeImage';

const MobileHeader: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="z-1 sticky top-0 ml-5 mr-5 border-b-1 border-solid bg-white opacity-100">
            <FadeImage src={logo} className='w-30' onClick={() => navigate('/')}/>
        </div>
    )
}

export default MobileHeader;