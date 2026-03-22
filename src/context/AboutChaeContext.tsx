import { createContext, useContext, useEffect, useState } from 'react';
import aboutChae from '../assets/About_Chae.png';

interface AboutChaeContextType {
    isOpen: boolean;
    imageReady: boolean;
    openAbout: () => void;
    closeAbout: () => void;
}

const AboutChaeContext = createContext<AboutChaeContextType | undefined>(undefined);

export const AboutChaeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [imageReady, setImageReady] = useState(false);

    // Eagerly preload the image so it's cached before the modal first opens
    useEffect(() => {
        const img = new Image();
        img.onload = () => setImageReady(true);
        img.src = aboutChae;
    }, []);

    const openAbout = () => setIsOpen(true);
    const closeAbout = () => setIsOpen(false);

    return (
        <AboutChaeContext.Provider value={{ isOpen, imageReady, openAbout, closeAbout }}>
            {children}
        </AboutChaeContext.Provider>
    );
};

export const useAboutChae = (): AboutChaeContextType => {
    const context = useContext(AboutChaeContext);
    if (!context) {
        throw new Error('useAboutChae must be used within an AboutChaeProvider');
    }
    return context;
};
