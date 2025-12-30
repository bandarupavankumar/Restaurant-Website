import { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, className = '', delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Only animate once
                }
            },
            {
                threshold: 0.1, // Trigger when 10% visible
                rootMargin: '0px 0px -50px 0px' // Slightly before bottom
            }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`${className} ${isVisible ? 'animate-slide-up' : ''}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.5s',
                animationDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
