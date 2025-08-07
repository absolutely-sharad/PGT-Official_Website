import React from 'react';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 animate-gradient-flow"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-hero"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${10 + Math.random() * 15}s`
            }}
          />
        ))}
      </div>
      
      {/* Wave animation */}
      <div className="absolute bottom-0 left-0 w-full h-24">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill="rgba(255,255,255,0.1)"
            className="animate-wave-slow"
          />
          <path
            d="M0,80 C300,40 900,120 1200,80 L1200,120 L0,120 Z"
            fill="rgba(255,255,255,0.05)"
            className="animate-wave-slower"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroBackground;