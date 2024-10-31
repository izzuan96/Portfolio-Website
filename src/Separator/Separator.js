import React from 'react';
import './Separator.css';

const waveStyles = {
  wave1: "M0,160 C480,80 960,240 1440,150 L1440,320 L0,320 Z",
  wave2: "M0,320L30,298.7C60,277,120,235,180,213.3C240,192,300,192,360,186.7C420,181,480,171,540,154.7C600,139,660,117,720,96C780,75,840,53,900,69.3C960,85,1020,139,1080,165.3C1140,192,1200,192,1260,186.7C1320,181,1380,171,1410,165.3L1440,160L1440,320L0,320Z",
  wave3: "M0,320 L30,290 C60,260,120,220,180,200 C240,180,300,170,360,180 C420,190,480,210,540,230 C600,250,660,240,720,220 C780,200,840,170,900,160 C960,150,1020,170,1080,190 C1140,210,1200,230,1260,240 C1320,250,1380,260,1410,270 L1440,280 L1440,320 L0,320 Z",
  wave4: "M0,160 C240,220 480,100 720,140 C960,220 1200,100 1440,140 C1680,220 1920,100 2160,140 L2160,320 L0,320 Z",
  wave5: "M0,160 C240,100 480,220 720,180 C960,100 1200,220 1440,180 C1680,100 1920,220 2160,180 L2160,0 L0,0 Z"
};

const Separator = ({ 
  height = '150px', 
  waveType = 'wave1', 
  startColor, // Dynamically set start color
  endColor,   // Dynamically set end color
  className, 
  darkMode 
}) => {
  return (
    <svg
      viewBox="0 0 1440 320"
      className={`wave-separator ${className}`}
      style={{ height }}
    >
      <defs>
        <linearGradient id="dynamicGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="24%" style={{ stopColor: startColor, stopOpacity: 1 }} />
          <stop offset="74%" style={{ stopColor: endColor, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path fill={darkMode ? '#121212' : 'url(#dynamicGradient)'} d={waveStyles[waveType]} />
    </svg>
  );
};

export default Separator;
