import React from 'react';

interface ContentripLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showText?: boolean;
  layout?: 'horizontal' | 'vertical';
  textSuffix?: string;
}

export const ContentripLogo: React.FC<ContentripLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  layout = 'horizontal',
  textSuffix = 'AI'
}) => {
  const iconDimensions = {
    sm: { w: 28, h: 28 },
    md: { w: 36, h: 36 },
    lg: { w: 52, h: 52 },
    hero: { w: 76, h: 76 }
  }[size];

  const textSizeClass = {
    sm: 'text-sm font-black',
    md: 'text-lg font-black',
    lg: 'text-2xl font-black',
    hero: 'text-4xl font-black'
  }[size];

  return (
    <div 
      className={`inline-flex ${layout === 'vertical' ? 'flex-col items-center gap-3' : 'items-center gap-2.5'} select-none ${className}`}
    >
      {/* 
        Neon Crescent Play Icon 
        Pixel-perfect reproduction of '스크린샷 2026-09-29 161537.png'
      */}
      <div 
        className="relative shrink-0 flex items-center justify-center"
        style={{ width: iconDimensions.w, height: iconDimensions.h }}
      >
        {/* Soft Ambient Neon Glow */}
        <div 
          className="absolute inset-0 rounded-full blur-md opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(255,46,147,0.6) 0%, rgba(139,92,246,0.5) 45%, rgba(0,240,255,0.6) 90%)'
          }}
        />

        {/* Crisp Vector SVG */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full relative z-10 drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Signature Crescent Gradient: Hot Pink -> Royal Violet -> Electric Cyan */}
            <linearGradient id="crescentNeonGrad" x1="30" y1="12" x2="70" y2="88" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF2E93" />
              <stop offset="25%" stopColor="#F43F5E" />
              <stop offset="55%" stopColor="#8B5CF6" />
              <stop offset="82%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#00F0FF" />
            </linearGradient>

            {/* Inner Play Triangle Gradient */}
            <linearGradient id="playNeonGrad" x1="45" y1="33" x2="68" y2="67" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF4D9E" />
              <stop offset="45%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#00F0FF" />
            </linearGradient>

            {/* Subtle Outer Neon Stroke */}
            <filter id="neonBloom" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Smooth crescent arc (Opening towards right with tapered sharp horns) */}
          <path
            d="M 66 19 
               A 34 34 0 1 0 66 81 
               A 30 30 0 0 1 66 19 Z"
            fill="url(#crescentNeonGrad)"
            filter="url(#neonBloom)"
          />

          {/* Glowing Inner Play Button (Rounded Triangle ▶) */}
          <path
            d="M 46 36 
               C 46 34.2, 48 33.1, 49.5 34.0 
               L 66.8 48.0 
               C 68.1 48.9, 68.1 51.1, 66.8 52.0 
               L 49.5 66.0 
               C 48 66.9, 46 65.8, 46 64.0 Z"
            fill="url(#playNeonGrad)"
            filter="url(#neonBloom)"
          />
        </svg>
      </div>

      {/* Brand Text: '콘텐트립 AI' (Exact typography matching the screenshot) */}
      {showText && (
        <div className="flex items-center gap-1.5 text-white tracking-tight font-black">
          <span className={`${textSizeClass} tracking-tighter text-white drop-shadow-sm font-sans`}>
            콘텐트립
          </span>
          <span className={`${textSizeClass} bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent font-black tracking-normal`}>
            {textSuffix || 'AI'}
          </span>
        </div>
      )}
    </div>
  );
};
