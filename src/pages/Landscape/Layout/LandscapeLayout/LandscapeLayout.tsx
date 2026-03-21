import { Outlet, useLocation } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';
import AboutChae from '../../Landing/AboutChae/AboutChae';

interface LandscapePageProps {
    children: React.ReactNode;
}

const LandscapePage: React.FC<LandscapePageProps> = ({ children }) => {
    return (
        <div className="w-full p-15">
            {children}
        </div>
    );
};

const LandscapeLayout: React.FC = () => {
    const location = useLocation();

    return (
        <div className="flex flex-row h-full">
            <AboutChae />
            <SideNav />
            <LandscapePage>
                <div key={location.pathname} className="animate-slide-up-fade h-full">
                    <Outlet />
                </div>
            </LandscapePage>
        </div>
    );
};

export default LandscapeLayout;
