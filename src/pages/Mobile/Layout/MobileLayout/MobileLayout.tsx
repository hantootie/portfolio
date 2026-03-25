import { Outlet } from "react-router-dom"
import MobileHeader from "../MobileHeader/MobileHeader";
import MobileFooter from "../MobileFooter/MobileFooter";

const MobileLayout: React.FC = () => {
    return (
        <>
            <MobileHeader />
            <div className="p-5 h-full">
                <Outlet />
            </div>
            <MobileFooter />
        </>
    )
}

export default MobileLayout;