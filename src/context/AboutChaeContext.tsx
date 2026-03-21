import { createContext, useContext, useState } from 'react';

interface AboutChaeContextType {
    isOpen: boolean;
    openAbout: () => void;
    closeAbout: () => void;
}

const AboutChaeContext = createContext<AboutChaeContextType | undefined>(undefined);

export const AboutChaeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openAbout = () => setIsOpen(true);
    const closeAbout = () => setIsOpen(false);

    return (
        <AboutChaeContext.Provider value={{ isOpen, openAbout, closeAbout }}>
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
