import React from 'react';

const HeroBackground = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 overflow-hidden z-0">
      <style>
        {`
          .wave-animation > svg {
            position: absolute;
            left: 0;
            width: 200%;
            height: 100%;
            transform: translateX(-50%);
            animation: wave 10s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
            bottom: 0;
            fill: currentColor;
          }

          .wave-animation > svg:nth-child(2) {
            animation: wave-reverse 10s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
            animation-delay: -5s;
            opacity: 0.5;
          }

          @keyframes wave {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          @keyframes wave-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
      <div className="relative h-48 sm:h-64 wave-animation">
        {/* Main Wave */}
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="text-white">
          <path d="M0,192L60,192C120,192,240,192,360,208C480,224,600,256,720,256C840,256,960,224,1080,208C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        {/* Secondary Wave for effect */}
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="text-white">
          <path d="M0,192L60,192C120,192,240,192,360,208C480,224,600,256,720,256C840,256,960,224,1080,208C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroBackground;