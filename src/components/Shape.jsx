import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Shape() {
    const shapesRef = useRef([]);

    useEffect(() => {
        shapesRef.current.forEach((shape) => {
            const size = Math.random() * 300 + 100;
            const xPos = Math.random() * window.innerWidth;
            const yPos = Math.random() * window.innerHeight;
            const duration = Math.random() * 10 + 10;

            gsap.set(shape, {
                width: size,
                height: size,
                x: xPos,
                y: yPos
            });

            gsap.to(shape, {
                x: `+=${Math.random() * 400 - 200}`,
                y: `+=${Math.random() * 400 - 200}`,
                duration,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });
    }, []);

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
        }}>
            {[...Array(5)].map((_, index) => (
                <div
                    key={index}
                    ref={el => shapesRef.current[index] = el}
                    style={{
                        position: 'absolute',
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, #ff3366, #ff9933)',
                        opacity: 0.2,
                    }}
                />
            ))}
        </div>
    );
}