import { Outlet } from 'react-router-dom';
import SideNav from './SideNav/SideNav';

const LandscapeLayout: React.FC = () => {
    return (
        <div className="flex flex-row h-full">
            <SideNav />
            <Outlet />
        </div>
    );
};

export default LandscapeLayout;
