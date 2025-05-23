import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Shape() {
    const shapeRef = useRef(null);

    useEffect(() => {
        if (!shapeRef.current) return;

        const size = Math.random() * 300 + 100;
        const xPos = Math.random() * window.innerWidth;
        const yPos = Math.random() * window.innerHeight;
        const duration = Math.random() * 10 + 10;

        gsap.set(shapeRef.current, {
            width: size,
            height: size,
            x: xPos,
            y: yPos
        });

        const animation = gsap.to(shapeRef.current, {
            x: `+=${Math.random() * 400 - 200}`,
            y: `+=${Math.random() * 400 - 200}`,
            duration,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        return () => {
            animation.kill();
        };
    }, []);

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            pointerEvents: 'none',
        }}>
            <div
                ref={shapeRef}
                style={{
                    position: 'absolute',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #ff3366, #ff9933)',
                    opacity: 0.2,
                }}
            />
        </div>
    );
}