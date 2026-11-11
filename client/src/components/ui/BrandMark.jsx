import React from 'react';

const BrandMark = ({ theme = 'light', showWordmark = true }) => {
  const isDark = theme === 'dark';
  const boxFill = isDark ? '#16243B' : '#101B2D';
  const borderStroke = isDark ? 'rgba(201, 169, 110, 0.55)' : 'rgba(201, 169, 110, 0.45)';
  const wordmarkColor = isDark ? '#F8F8F5' : '#101B2D';
  const subColor = isDark ? '#C5CEDB' : '#525B6B';

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 60 60"
        width="40"
        height="40"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <rect width="60" height="60" rx="6" fill={boxFill} stroke={borderStroke} strokeWidth="1.5" />
        <path
          d="M28 13 L35 13 L35 34 C35 41 29.5 46.5 22 46.5 C16.5 46.5 13 43 13 38.5 C13 35 15.5 33 18.5 33 C21 33 23 34.8 23 37.2 C23 39.5 21.5 40.8 19.8 41 C21.8 42.6 24.5 42.5 26.8 40.5 C28.5 39 28.5 36.2 28.5 33 L28.5 19.5 L21 19.5 L21 13 Z"
          fill="#F8F8F5"
        />
        <circle cx="42" cy="15.5" r="3.75" fill="#C9A96E" />
        <path
          d="M42 22.5 L42 37.5 C42 40.5 43.8 43 46.8 43 C48.4 43 49.6 42.4 51 41.5 L51 46 C49.2 47 46.6 47.6 44 47.6 C38.2 47.6 36.2 43.4 36.2 38.2 L36.2 22.5 Z"
          fill="#F8F8F5"
          opacity="0.92"
        />
        <path
          d="M16 49.5 C26 53 39.5 52 50 45.5"
          stroke="#C9A96E"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {showWordmark && (
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.08rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              color: wordmarkColor,
              textTransform: 'uppercase',
            }}
          >
            THE JASYNC
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.67rem',
              fontWeight: 500,
              letterSpacing: '0.09em',
              color: subColor,
              textTransform: 'uppercase',
            }}
          >
            Tech &amp; Talent Advisory
          </span>
        </span>
      )}
    </span>
  );
};

export default BrandMark;

