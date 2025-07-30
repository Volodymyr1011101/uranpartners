import {useRef, useState} from "react";

const sliderButton = ({sliderClick, side}:{sliderClick:
        () => void, side: 'prev' | 'next'}) => {
    const [active, setActive] = useState<boolean>(false);
    const [animationKey, setAnimationKey] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const setAnimation = () => {
        setAnimationKey(prev => prev + 1);
        if (active) {
            setActive(false);
        }
        setActive(true);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setActive(false);
        }, 1000);
    };
    const changeSlider = () => {
        sliderClick();
        setAnimation();

    }
    return (
        <div className={`text-white ${side === 'prev' ? 'prev-slide': 'next-slide'}`} onClick={changeSlider} key={animationKey}>
            <span className={`top-arrow-line line ${active ? 'arrow-active' : ''}`}/>
            <span className={`middle-arrow-line line ${active ? 'arrow-middle-active' : ''}`}/>
            <span className={`bottom-arrow-line line ${active ? 'arrow-active' : ''}`}/>
            <span className={`additional-line line ${active ? 'active' : ''}`}/>
        </div>
    )
}

export default sliderButton;