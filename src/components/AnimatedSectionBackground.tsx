import React from 'react';

interface AnimatedSectionBackgroundProps {
  variant?: 'blue' | 'green' | 'purple' | 'gradient';
  className?: string;
}

const AnimatedSectionBackground: React.FC<AnimatedSectionBackgroundProps> = ({ 
  variant = 'blue',
  className = ''
}) => {
  const getGradientClass = () => {
    switch (variant) {
      case 'green':
        return 'from-green-600 to-blue-600';
      case 'purple':
        return 'from-purple-600 to-blue-600';
      case 'gradient':
        return 'from-blue-600 via-purple-600 to-blue-800';
      default:
        return 'from-blue-600 to-purple-600';
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-r ${getGradientClass()} animate-gradient-shift`}></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 8}s`
            }}
          />
        ))}
      </div>
      
      {/* Subtle geometric shapes */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute w-32 h-32 border border-white rounded-full animate-pulse"
          style={{
            top: '20%',
            right: '10%',
            animationDuration: '4s'
          }}
        />
        <div 
          className="absolute w-24 h-24 border border-white rounded-full animate-pulse"
          style={{
            bottom: '30%',
            left: '15%',
            animationDuration: '6s',
            animationDelay: '2s'
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedSectionBackground;