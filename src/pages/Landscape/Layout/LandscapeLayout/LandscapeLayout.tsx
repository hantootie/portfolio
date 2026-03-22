import { Outlet, useLocation, useNavigation } from 'react-router-dom';
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
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    return (
        <div className="flex flex-row h-full">
            <AboutChae />
            <div className="fixed left-0 top-0 h-full w-1/5 z-10">
                <SideNav />
            </div>
            {/* Global loading bar */}
            {isLoading && (
                <div className="fixed top-0 left-0 w-full h-0.5 z-50 bg-white/10">
                    <div className="h-full bg-white/60 animate-[loading-bar_1s_ease-in-out_infinite]" />
                </div>
            )}
            <div className="ml-[20%] flex-1 h-full overflow-y-auto">
                <LandscapePage>
                    <div
                        key={location.pathname}
                        className={`animate-slide-up-fade h-full transition-opacity duration-200 ${isLoading ? 'opacity-50' : 'opacity-100'}`}
                    >
                        <Outlet />
                    </div>
                </LandscapePage>
            </div>
        </div>
    );
};

export default LandscapeLayout;
