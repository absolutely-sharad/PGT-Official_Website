import React, { useRef, useEffect, useState } from 'react';

const AnimatedCard = ({ children, animation = 'slideUp', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const animationClasses = {
    slideUp: 'transform translate-y-10 opacity-0 transition-all duration-700 ease-out',
    fadeIn: 'opacity-0 transition-opacity duration-1000 ease-in',
    zoomIn: 'transform scale-95 opacity-0 transition-all duration-700 ease-out',
  };

  const visibleClasses = {
    slideUp: 'transform translate-y-0 opacity-100',
    fadeIn: 'opacity-100',
    zoomIn: 'transform scale-100 opacity-100',
  };

  const combinedClasses = `${animationClasses[animation]} ${isVisible ? visibleClasses[animation] : ''}`;

  return (
    <div ref={ref} className={combinedClasses} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export default AnimatedCard;