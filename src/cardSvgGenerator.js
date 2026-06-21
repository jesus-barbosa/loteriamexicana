import { ILLUSTRATIONS } from './cardIllustrations.js';

export function generateCardSvg(cardData) {
  const { number, name, id } = cardData;
  const illustrationSvg = ILLUSTRATIONS[id] || '';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fdf6e3"/>
      <stop offset="100%" stop-color="#f0deb4"/>
    </linearGradient>
    <linearGradient id="borderGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#c0392b"/>
      <stop offset="50%" stop-color="#e74c3c"/>
      <stop offset="100%" stop-color="#c0392b"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#d4a017"/>
      <stop offset="50%" stop-color="#f1c40f"/>
      <stop offset="100%" stop-color="#d4a017"/>
    </linearGradient>
    <filter id="nameShadow">
      <feDropShadow dx="0.5" dy="0.5" stdDeviation="0.8" flood-color="#000" flood-opacity="0.4"/>
    </filter>
    <filter id="innerGlow">
      <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur"/>
      <feOffset dx="0" dy="1"/>
      <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feFlood flood-color="#000" flood-opacity="0.15"/>
      <feComposite in2="SourceGraphic" operator="in"/>
      <feMerge>
        <feMergeNode in="SourceGraphic"/>
        <feMergeNode/>
      </feMerge>
    </filter>
    <pattern id="dots" width="8" height="8" patternUnits="userSpaceOnUse">
      <circle cx="4" cy="4" r="0.5" fill="#d4a574" opacity="0.3"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect x="0" y="0" width="200" height="300" rx="8" fill="url(#bgGrad)"/>
  <rect x="0" y="0" width="200" height="300" rx="8" fill="url(#dots)"/>

  <!-- Outer border -->
  <rect x="2" y="2" width="196" height="296" rx="7" fill="none" stroke="url(#borderGrad)" stroke-width="4"/>

  <!-- Inner border -->
  <rect x="7" y="7" width="186" height="286" rx="5" fill="none" stroke="url(#goldGrad)" stroke-width="2"/>

  <!-- Decorative corner flourishes -->
  <path d="M10,14 Q10,10 14,10" fill="none" stroke="#8b0000" stroke-width="1.5"/>
  <path d="M12,16 Q12,12 16,12" fill="none" stroke="#c0392b" stroke-width="1"/>
  <path d="M190,14 Q190,10 186,10" fill="none" stroke="#8b0000" stroke-width="1.5"/>
  <path d="M188,16 Q188,12 184,12" fill="none" stroke="#c0392b" stroke-width="1"/>
  <path d="M10,286 Q10,290 14,290" fill="none" stroke="#8b0000" stroke-width="1.5"/>
  <path d="M12,284 Q12,288 16,288" fill="none" stroke="#c0392b" stroke-width="1"/>
  <path d="M190,286 Q190,290 186,290" fill="none" stroke="#8b0000" stroke-width="1.5"/>
  <path d="M188,284 Q188,288 184,288" fill="none" stroke="#c0392b" stroke-width="1"/>

  <!-- Number medallion -->
  <circle cx="18" cy="18" r="12" fill="url(#borderGrad)" opacity="0.15"/>
  <circle cx="18" cy="18" r="10" fill="none" stroke="#c0392b" stroke-width="1.5"/>
  <text x="18" y="23" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="14" font-weight="bold" fill="#8b0000">${number}</text>

  <!-- Illustration area -->
  <g filter="url(#innerGlow)">
    ${illustrationSvg}
  </g>

  <!-- Name banner background -->
  <rect x="20" y="268" width="160" height="24" rx="4" fill="#8b0000" opacity="0.9"/>
  <rect x="22" y="270" width="156" height="20" rx="3" fill="none" stroke="#f39c12" stroke-width="0.8"/>

  <!-- Name text -->
  <text x="100" y="285" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="11" font-weight="bold" fill="#fdf6e3" filter="url(#nameShadow)">${name}</text>
</svg>`;
}
