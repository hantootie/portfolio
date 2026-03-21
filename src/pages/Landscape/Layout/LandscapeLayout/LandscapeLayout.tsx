import { Outlet } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';

interface LandscapePageProps {
    children: React.ReactNode
}

const LandscapePage: React.FC<LandscapePageProps> = ({ children }) => {
    return (
        <div className="w-full p-15">
            {children}
        </div>
    )
}

const LandscapeLayout: React.FC = () => {
    return (
        <div className="flex flex-row h-full">
            <SideNav />
            <LandscapePage>
                <Outlet />
            </LandscapePage>
        </div>
    );
};

export default LandscapeLayout;
