import { useState } from 'react';

interface FadeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    className?: string;
    style?: React.CSSProperties;
}

const FadeImage: React.FC<FadeImageProps> = ({ src, className = '', style, onLoad, ...rest }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <img
            src={src}
            className={`transition-opacity duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
            style={style}
            onLoad={(e) => {
                setLoaded(true);
                onLoad?.(e);
            }}
            {...rest}
        />
    );
};

export default FadeImage;
