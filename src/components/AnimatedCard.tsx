import React, { useRef, useEffect, useState } from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  animation?: 'slideUp' | 'slideLeft' | 'slideRight' | 'fadeIn' | 'zoomIn';
  delay?: number;
  className?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  animation = 'slideUp', 
  delay = 0,
  className = ''
}) => {
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
        rootMargin: '100px 0px -50px 0px'
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
    slideUp: 'transform translate-y-8 opacity-0 transition-all duration-500 ease-out',
    slideLeft: 'transform translate-x-8 opacity-0 transition-all duration-500 ease-out',
    slideRight: 'transform -translate-x-8 opacity-0 transition-all duration-500 ease-out',
    fadeIn: 'opacity-0 transition-opacity duration-600 ease-out',
    zoomIn: 'transform scale-98 opacity-0 transition-all duration-500 ease-out',
  };

  const visibleClasses = {
    slideUp: 'transform translate-y-0 opacity-100',
    slideLeft: 'transform translate-x-0 opacity-100',
    slideRight: 'transform translate-x-0 opacity-100',
    fadeIn: 'opacity-100',
    zoomIn: 'transform scale-100 opacity-100',
  };

  const combinedClasses = `${className} ${animationClasses[animation]} ${isVisible ? visibleClasses[animation] : ''}`;

  return (
    <div ref={ref} className={combinedClasses} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export default AnimatedCard;