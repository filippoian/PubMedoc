import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const IntroAnimation = ({ onComplete }) => {
    const containerRef = useRef(null);
    const logoRef = useRef(null);

    useEffect(() => {
        // Disable scrolling
        document.body.style.overflow = 'hidden';

        // Prevent touch move on mobile to stop "bouncing" or scroll attempts
        const preventDefault = (e) => e.preventDefault();
        document.body.addEventListener('touchmove', preventDefault, { passive: false });

        return () => {
            // Re-enable scrolling
            document.body.style.overflow = '';
            document.body.removeEventListener('touchmove', preventDefault);
        };
    }, []);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: onComplete,
        });

        // Initial state: Logo invisible, scaled down
        gsap.set(logoRef.current, { scale: 0.5, opacity: 0 });

        // 1. Logo Entrance (Pop & Spin)
        tl.to(logoRef.current, {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: 'elastic.out(1, 0.5)',
        })
            // 3. Pause
            .to({}, { duration: 0.8 })

            // 4. Curtain Reveal (Slide Up & Fade)
            .to(containerRef.current, {
                yPercent: -100,
                opacity: 0, // Add fade out
                duration: 1.2,
                ease: 'power3.inOut',
            });

        return () => {
            tl.kill();
        };
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F28C28]"
        >
            <div className="relative">
                <img
                    ref={logoRef}
                    src="/logo.png"
                    alt="Medoc Pub Logo"
                    className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
                />
            </div>
        </div>
    );
};

export default IntroAnimation;
