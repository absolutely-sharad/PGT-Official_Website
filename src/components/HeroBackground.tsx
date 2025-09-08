import React from 'react';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
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
          
          /* New, more complex wave animation */
          .wave-anim-1 {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23ffffff" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
            animation: wave1 8s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
            opacity: 0.8;
            background-size: 1440px 100px;
          }
          .wave-anim-2 {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23ffffff" fill-opacity="1" d="M0,128L60,144C120,160,240,192,360,192C480,192,600,160,720,138.7C840,117,960,107,1080,106.7C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>');
            animation: wave2 12s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
            opacity: 0.6;
            background-size: 1440px 120px;
          }
          .wave-anim-3 {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23ffffff" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,149.3C672,128,768,96,864,85.3C960,75,1056,85,1152,101.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
            animation: wave3 15s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
            opacity: 0.4;
            background-size: 1440px 110px;
          }

          @keyframes wave1 {
            0% { transform: translateX(0) translateZ(0) scaleY(1); }
            0% { transform: translateX(0) scaleY(1); }
            50% { transform: translateX(-25%) scaleY(0.95); }
            100% { transform: translateX(-50%) scaleY(1); }
          }
          @keyframes wave2 {
            0% { transform: translateX(0) scaleY(1.05); }
            50% { transform: translateX(-25%) scaleY(1); }
            100% { transform: translateX(-50%) scaleY(1.05); }
          }
          @keyframes wave3 {
            0% { transform: translateX(0) scaleY(0.9); }
            50% { transform: translateX(-25%) scaleY(1.0); }
            100% { transform: translateX(-50%) scaleY(0.9); }
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2880 320"><path fill="%23ffffff" fill-opacity="0.6" d="M0,128L60,144C120,160,240,192,360,192C480,192,600,160,720,138.7C840,117,960,107,1080,106.7C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z M1440,128L1500,144C1560,160,1680,192,1800,192C1920,192,2040,160,2160,138.7C2280,117,2400,107,2520,106.7C2640,107,2760,117,2820,122.7L2880,128L2880,320L2820,320C2760,320,2640,320,2520,320C2400,320,2280,320,2160,320C2040,320,1920,320,1800,320C1680,320,1560,320,1500,320L1440,320Z"></path></svg>');
        `}
      </style>
      <div className="absolute inset-0">
        <div className="wave wave-anim-1"></div>
        <div className="wave wave-anim-2"></div>
        <div className="wave wave-anim-3"></div>
      </div>
    </div>
  )
};

export default HeroBackground;