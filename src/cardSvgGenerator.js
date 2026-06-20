import { ILLUSTRATIONS } from './cardIllustrations.js';

export function generateCardSvg(cardData) {
  const { number, name, id } = cardData;
  const illustrationSvg = ILLUSTRATIONS[id] || '';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300">
  <defs>
    <filter id="nameShadow">
      <feDropShadow dx="1" dy="1" stdDeviation="1" flood-color="#000" flood-opacity="0.25"/>
    </filter>
  </defs>
  <rect x="0" y="0" width="200" height="300" rx="6" fill="#f5e6ca"/>
  <rect x="3" y="3" width="194" height="294" rx="4" fill="none" stroke="#c0392b" stroke-width="2.5"/>
  <rect x="7" y="7" width="186" height="286" rx="3" fill="none" stroke="#f39c12" stroke-width="1.5"/>
  <path d="M6,12 Q6,6 12,6" fill="none" stroke="#c0392b" stroke-width="1.5"/>
  <path d="M194,12 Q194,6 188,6" fill="none" stroke="#c0392b" stroke-width="1.5"/>
  <path d="M6,288 Q6,294 12,294" fill="none" stroke="#c0392b" stroke-width="1.5"/>
  <path d="M194,288 Q194,294 188,294" fill="none" stroke="#c0392b" stroke-width="1.5"/>
  <text x="16" y="24" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#c0392b">${number}</text>
  <g transform="translate(0,0)">
    ${illustrationSvg}
  </g>
  <text x="100" y="291" text-anchor="middle" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#2c1810" filter="url(#nameShadow)">${name}</text>
</svg>`;
}
