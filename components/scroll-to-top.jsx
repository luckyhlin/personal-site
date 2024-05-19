import styles from "./scroll-to-top.module.scss";
import {useEffect, useRef, useState} from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [rightOffset, setRightOffset] = useState(0);
    const buttonRef = useRef(null);

    const toggleVisibility = () => {
        if (window.scrollY > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        const updateRightOffset = () => {
            const container = document.querySelector('#container');
            if (container && buttonRef.current) {
                const containerRight = container.getBoundingClientRect().right;
                const windowWidth = window.innerWidth;
                // Get the computed font size of the container
                const containerFontSize = parseFloat(getComputedStyle(container).fontSize); // 1em
                let additionalOffset = windowWidth < 1024 ? 0 : 8; // em
                additionalOffset = additionalOffset * containerFontSize; // px
                const buttonWidth = buttonRef.current.getBoundingClientRect().width;
                console.log(`buttonWidth ${buttonWidth}`);
                if (buttonWidth + additionalOffset > windowWidth - containerRight) {
                    additionalOffset = windowWidth - containerRight - buttonWidth + 60;
                }
                setRightOffset(windowWidth - containerRight - additionalOffset); // offset from container
            }
        };

        updateRightOffset();

        window.addEventListener('scroll', toggleVisibility);
        window.addEventListener('resize', updateRightOffset);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            window.removeEventListener('resize', updateRightOffset);
        };
    }, []);

    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    const scrollToTop = () => {
        if (!isBrowser()) return;
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <div className={`${styles.scrollToTop} ${isVisible ? styles.show : ""}`}
             style={{ right: `${rightOffset}px` }}
             onClick={scrollToTop}
             ref={buttonRef}>
                ☝ Top
        </div>
    )
}