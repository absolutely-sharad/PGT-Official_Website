import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Enhanced animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-white via-purple-50/10 to-blue-50/20 animate-gradient-flow"></div>
      
      {/* Interactive floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full animate-float"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${20 + Math.random() * 15}s`
            }}
          />
        ))}
      </div>
      
      {/* Enhanced geometric patterns */}
      <div className="absolute inset-0 opacity-5">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      {/* Animated wave pattern at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 opacity-8">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full animate-wave-slow">
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill="url(#wave-gradient)"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Subtle radial gradients for depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-100/10 to-transparent rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-purple-100/10 to-transparent rounded-full animate-pulse" style={{ animationDuration: '10s', animationDelay: '4s' }} />
    </div>
  );
};

export default AnimatedBackground;