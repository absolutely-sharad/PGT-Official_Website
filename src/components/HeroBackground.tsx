import React from 'react';

const HeroBackground = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 overflow-hidden">
      <svg
        className="w-full text-blue-800"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,160L48,160C96,160,192,160,288,170.7C384,181,480,203,576,192C672,181,768,139,864,138.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill="currentColor"
          fillOpacity="1"
        ></path>
      </svg>
    </div>
  );
};

export default HeroBackground;