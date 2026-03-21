import aboutChae from '../../../../assets/About_Chae.png';

interface AboutChaeProps {
    isOpen: boolean;
    onClose: () => void;
}

const AboutChae: React.FC<AboutChaeProps> = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={onClose}
        >
            <img src={aboutChae} className="w-3/4" />
        </div>
    );
}

export default AboutChae;
