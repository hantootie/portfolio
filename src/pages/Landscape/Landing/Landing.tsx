import Hero from "./Hero/Hero";
import SideNav from "./SideNav/SideNav";

const Landing: React.FC = () => {
    return (
        <div className="flex flex-row h-full">
            <SideNav />
            <Hero />
        </div>
    )
}

export default Landing;