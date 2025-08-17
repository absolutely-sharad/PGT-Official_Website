import React from 'react';

const HeroBackground = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 overflow-hidden z-0">
      <style>
        {`
          .wave-container {
            position: absolute;
            left: 0;
            width: 200%;
            height: 100%;
            transform: translateX(-50%);
            bottom: 0;
          }

          .wave {
            position: absolute;
            width: 100%;
            height: 100%;
            background-repeat: repeat-x;
            opacity: 0.8;
            bottom: 0;
          }

          .wave1 {
            background-image: url('/wave1.svg'); /* Replace with a more detailed wave SVG */
            animation: wave1 8s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
            background-size: 100% 60px; /* Adjust size as needed */
          }

          .wave2 {
            background-image: url('/wave2.svg'); /* Different wave pattern */
            animation: wave2 12s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
            opacity: 0.6;
            background-size: 100% 80px;
          }

          .wave3 {
            background-image: url('/wave3.svg'); /* Another different wave pattern */
            animation: wave3 15s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
            opacity: 0.4;
            background-size: 100% 70px;
          }

          @keyframes wave1 {
            0% { transform: translateX(0) translateZ(0) scaleY(1); }
            50% { transform: translateX(-25%) translateZ(0) scaleY(0.95); }
            100% { transform: translateX(-50%) translateZ(0) scaleY(1); }
          }

          @keyframes wave2 {
            0% { transform: translateX(0) translateZ(0) scaleY(1.05); }
            50% { transform: translateX(-20%) translateZ(0) scaleY(1); }
            100% { transform: translateX(-50%) translateZ(0) scaleY(1.05); }
          }

          @keyframes wave3 {
            0% { transform: translateX(0) translateZ(0) scaleY(0.9); }
            50% { transform: translateX(-15%) translateZ(0) scaleY(1.0); }
            100% { transform: translateX(-50%) translateZ(0) scaleY(0.9); }
          }
        `}
      </style>
      <div className="relative h-48 sm:h-64">
        <div className="wave-container text-blue-700"> {/* Adjust base color */}
          <div className="wave wave1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <div className="wave wave2 bg-gradient-to-r from-indigo-400 to-indigo-600"></div>
          <div className="wave wave3 bg-gradient-to-r from-purple-400 to-purple-600"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBackground;