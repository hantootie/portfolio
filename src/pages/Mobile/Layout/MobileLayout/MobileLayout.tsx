import { Outlet } from "react-router-dom"
import MobileHeader from "../MobileHeader/MobileHeader";
import MobileFooter from "../MobileFooter/MobileFooter";

const MobileLayout: React.FC = () => {
    return (
        <div className="flex flex-col h-full">
            <MobileHeader />
            <div className="p-5 flex-1 overflow-y-auto">
                <Outlet />
            </div>
            <MobileFooter />
        </div>
    )
}

export default MobileLayout;