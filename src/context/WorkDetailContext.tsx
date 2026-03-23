import { createContext, useContext, useState } from 'react';

interface WorkDetailContextType {
    projectTitles: string[];
    setProjectTitles: (titles: string[]) => void;
}

const WorkDetailContext = createContext<WorkDetailContextType | undefined>(undefined);

export const WorkDetailProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [projectTitles, setProjectTitles] = useState<string[]>([]);

    return (
        <WorkDetailContext.Provider value={{ projectTitles, setProjectTitles }}>
            {children}
        </WorkDetailContext.Provider>
    );
};

export const useWorkDetail = (): WorkDetailContextType => {
    const context = useContext(WorkDetailContext);
    if (!context) {
        throw new Error('useWorkDetail must be used within a WorkDetailProvider');
    }
    return context;
};

export function slugify(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}
