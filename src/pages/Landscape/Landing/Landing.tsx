import { useEffect, useState } from 'react';
import touchMaBallOff from '../../../assets/touch_ma_ball_off.png';
import touchMaBallOn from '../../../assets/touch_ma_ball_on.png';
import { useAboutChae } from '../../../context/AboutChaeContext';

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

            <div style={{ position: 'relative', display: 'inline-block' }}>
                <img src={ballSrc} style={{ display: 'block', width: '100%' }} />
                <button
                    onClick={handleClick}
                    style={{
                        position: 'absolute',
                        left: '82%',       // horizontal center of ball
                        top: '27%',        // vertical center of ball
                        width: '14%',       // ball diameter as % of image width
                        aspectRatio: '1',  // keep it circular
                        transform: 'translate(-50%, -50%)',
                        background: 'transparent',
                        border: 'none',
                        borderRadius: '50%',
                        cursor: 'pointer',
                    }}
                    aria-label="Touch the ball"
                />
            </div>
        </div>
    )
}

export default Landing;