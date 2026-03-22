import { useEffect, useState } from 'react';
import aboutChae from '../../../../assets/About_Chae.png';
import { useAboutChae } from '../../../../context/AboutChaeContext';

const CLOSE_DURATION_MS = 280;

type Phase = 'hidden' | 'open' | 'closing';

const AboutChae: React.FC = () => {
    const { isOpen, imageReady, closeAbout } = useAboutChae();
    const [phase, setPhase] = useState<Phase>('hidden');

    useEffect(() => {
        if (isOpen) {
            setPhase('open');
        }
    }, [isOpen]);

    const handleClose = () => {
        setPhase('closing');
        setTimeout(() => {
            setPhase('hidden');
            closeAbout();
        }, CLOSE_DURATION_MS);
    };

    if (phase === 'hidden') {
        return null;
    }

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 ${phase === 'closing' ? 'animate-backdrop-out' : 'animate-backdrop-in'}`}
            onClick={handleClose}
        >
            {imageReady && (
                <img
                    src={aboutChae}
                    className={`w-3/4 ${phase === 'closing' ? 'animate-shrink-to-br' : 'animate-grow-from-br'}`}
                    style={{ transformOrigin: 'bottom right' }}
                />
            )}
        </div>
    );
}

export default AboutChae;
