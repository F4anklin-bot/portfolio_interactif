import { useState, useEffect } from 'react';

function AnimatedShape() {
  // 🎲 État pour la position aléatoire
  const [position, setPosition] = useState({ 
    x: Math.random() * window.innerWidth, 
    y: Math.random() * window.innerHeight 
  });

  // 🌀 État pour la taille aléatoire
  const [size] = useState({
    width: 50 + Math.random() * 150,
    height: 50 + Math.random() * 150
  });

  // 🎯 Effet pour l'animation
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * (window.innerWidth - size.width),
        y: Math.random() * (window.innerHeight - size.height)
      });
    }, 2000); // ⏱ Changement toutes les 2 secondes

    return () => clearInterval(interval);
  }, [size.width, size.height]);

  // 🎨 Style dynamique
  const shapeStyle = {
    position: 'fixed',
    left: position.x,
    top: position.y,
    width: size.width,
    height: size.height,
    background: `linear-gradient(
      ${Math.random() * 360}deg,
      hsl(${Math.random() * 360}, 70%, 50%),
      hsl(${Math.random() * 360}, 70%, 50%)
    )`,
    borderRadius: `${Math.random() * 50}%`,
    transition: 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
    filter: `blur(${Math.random() * 8}px)`
  };

  return <div style={shapeStyle} />;
}

export default AnimatedShape;