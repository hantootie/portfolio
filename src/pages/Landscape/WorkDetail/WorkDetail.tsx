import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const WorkDetail: React.FC = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [hash]);

    return (
        <div className="flex flex-col gap-20">
            <section id="freelance" className="min-h-screen">
                <h2 className="rock-salt-text text-4xl mb-10">Chae's Freelance</h2>
                <p>Freelance work content goes here.</p>
            </section>

            <section id="animation" className="min-h-screen">
                <h2 className="rock-salt-text text-4xl mb-10">Chae's Animations</h2>
                <p>Animation work content goes here.</p>
            </section>

            <section id="illustration" className="min-h-screen">
                <h2 className="rock-salt-text text-4xl mb-10">Chae's Illustrations</h2>
                <p>Illustration work content goes here.</p>
            </section>
        </div>
    );
};

export default WorkDetail;
