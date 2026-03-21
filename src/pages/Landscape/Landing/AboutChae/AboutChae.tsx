import aboutChae from '../../../../assets/About_Chae.png';
import { useAboutChae } from '../../../../context/AboutChaeContext';

const AboutChae: React.FC = () => {
    const { isOpen, closeAbout } = useAboutChae();

    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={closeAbout}
        >
            <img src={aboutChae} className="w-3/4" />
        </div>
    );
}

export default AboutChae;
