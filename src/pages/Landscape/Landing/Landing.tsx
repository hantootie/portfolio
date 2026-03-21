import { useEffect, useState } from 'react';
import touchMaBallOff from '../../../assets/touch_ma_ball_off.png';
import touchMaBallOn from '../../../assets/touch_ma_ball_on.png';
import { useAboutChae } from '../../../context/AboutChaeContext';
import FadeImage from '../../../components/FadeImage/FadeImage';

const Landing: React.FC = () => {
    const [ballSrc, setBallSrc] = useState(touchMaBallOff);
    const { openAbout } = useAboutChae();

    useEffect(() => {
        let intervalId = setInterval(() => {
            setBallSrc(prev => prev === touchMaBallOff ? touchMaBallOn : touchMaBallOff)
        }, 500)

        return () => clearInterval(intervalId);
    }, [])

    const handleClick = () => {
        openAbout();
    }

    return (
        <div className="flex flex-col justify-between h-full">
            <div className="ml-15 mt-15 h-30 flex flex-col justify-between rock-salt-text text-3xl">
                <div>
                    {"Hello :)"}
                </div>
                <div>
                    Welcome to my portfolio.
                </div>
            </div>

            <div className="relative inline-block">
                <FadeImage src={ballSrc} className="block w-full" />
                <button
                    onClick={handleClick}
                    className="absolute left-[82%] top-[27%] w-[14%] aspect-square -translate-x-1/2 -translate-y-1/2 bg-transparent border-none rounded-full cursor-pointer"
                    aria-label="Touch the ball"
                />
            </div>
        </div>
    )
}

export default Landing;