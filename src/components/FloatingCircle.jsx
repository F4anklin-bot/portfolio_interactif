import { useState, useEffect } from 'react';

const FloatingCircle = () => {
  const [position, setPosition] = useState({ 
    x: Math.random() * window.innerWidth, 
    y: Math.random() * window.innerHeight 
  });

  const size = 80 + Math.random() * 120;
  const speed = 6000 + Math.random() * 4000;

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * (window.innerWidth - size),
        y: Math.random() * (window.innerHeight - size)
      });
    }, speed);

    return () => clearInterval(interval);
  }, [size]);

  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle at 30% 30%, 
                    rgba(251,113,133,0.3) 0%, 
                    rgba(245,158,11,0.15) 100%)`,
        transition: `all ${speed/1000}s cubic-bezier(0.4, 0, 0.2, 1)`,
        filter: `blur(${size/15}px)`
      }}
    />
  );
};

export default FloatingCircle;