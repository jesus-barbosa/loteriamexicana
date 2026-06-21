const S = 'stroke="#2c1810" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
const S1 = 'stroke="#2c1810" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"';
const S2 = 'stroke="#2c1810" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"';

export const ILLUSTRATIONS = {
  gallo: `
    <defs>
      <linearGradient id="galloBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#f1c40f"/>
        <stop offset="100%" stop-color="#d4a017"/>
      </linearGradient>
      <linearGradient id="galloComb" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#e74c3c"/>
        <stop offset="100%" stop-color="#8b0000"/>
      </linearGradient>
      <linearGradient id="galloTail" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1a5276"/>
        <stop offset="100%" stop-color="#0e2f44"/>
      </linearGradient>
    </defs>
    <!-- Body -->
    <path d="M100,105 Q70,100 65,135 L63,155 Q60,175 75,185 L80,215 Q85,222 100,220 L115,220 Q130,222 135,215 L140,185 Q155,175 152,155 L150,135 Q145,100 100,105Z" fill="url(#galloBody)" stroke="#8b4513" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Breast feather detail -->
    <path d="M80,140 Q100,130 120,140" fill="none" stroke="#e67e22" stroke-width="1.5" opacity="0.6"/>
    <path d="M78,155 Q100,145 122,155" fill="none" stroke="#e67e22" stroke-width="1.5" opacity="0.6"/>
    <path d="M76,170 Q100,160 124,170" fill="none" stroke="#e67e22" stroke-width="1.5" opacity="0.6"/>
    <!-- Wing -->
    <path d="M125,130 Q145,125 155,145 Q160,165 145,175 Q130,180 120,170 Q115,155 125,130Z" fill="#d35400" stroke="#8b4513" stroke-width="2" stroke-linecap="round"/>
    <path d="M130,140 Q140,138 145,148" fill="none" stroke="#e67e22" stroke-width="1.5"/>
    <path d="M128,155 Q140,152 148,160" fill="none" stroke="#e67e22" stroke-width="1.5"/>
    <!-- Head -->
    <circle cx="92" cy="108" r="14" fill="#f5cba7" stroke="#8b4513" stroke-width="2.5"/>
    <!-- Comb -->
    <path d="M82,98 Q80,80 88,75 Q92,82 95,72 Q98,82 102,75 Q105,82 108,78 Q112,85 115,98" fill="url(#galloComb)" stroke="#8b0000" stroke-width="1.5"/>
    <!-- Eye -->
    <circle cx="96" cy="105" r="3.5" fill="#2c1810"/>
    <circle cx="97" cy="103.5" r="1.5" fill="#fff"/>
    <!-- Beak -->
    <path d="M82,112 L72,108 L74,115Z" fill="#f39c12" stroke="#8b4513" stroke-width="1.5"/>
    <!-- Wattle -->
    <path d="M82,118 Q78,130 82,135 Q86,130 84,118" fill="#c0392b" stroke="#8b0000" stroke-width="1"/>
    <!-- Tail feathers -->
    <path d="M140,145 Q165,115 175,85 Q170,120 150,148" fill="url(#galloTail)" stroke="#0e2f44" stroke-width="2"/>
    <path d="M142,155 Q170,130 185,105 Q178,140 155,158" fill="#1a5276" stroke="#0e2f44" stroke-width="2"/>
    <path d="M138,165 Q162,145 178,125 Q172,158 148,170" fill="#1a5276" stroke="#0e2f44" stroke-width="2"/>
    <path d="M135,175 Q155,160 168,145 Q165,170 142,180" fill="#0e2f44" stroke="#0a1f33" stroke-width="1.5"/>
    <!-- Legs -->
    <line x1="90" y1="220" x2="88" y2="250" stroke="#d4a017" stroke-width="3" stroke-linecap="round"/>
    <line x1="110" y1="220" x2="112" y2="250" stroke="#d4a017" stroke-width="3" stroke-linecap="round"/>
    <!-- Feet -->
    <path d="M80,250 L88,250 L92,258" fill="none" stroke="#d4a017" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M88,250 L85,260" fill="none" stroke="#d4a017" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M120,250 L112,250 L108,258" fill="none" stroke="#d4a017" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M112,250 L115,260" fill="none" stroke="#d4a017" stroke-width="2.5" stroke-linecap="round"/>
  `,

  diablo: `
    <path d="M85,95 Q80,85 75,88 Q70,82 72,78" fill="none" ${S2}/>
    <path d="M115,95 Q120,85 125,88 Q130,82 128,78" fill="none" ${S2}/>
    <path d="M75,100 Q65,95 60,110 L58,130 Q56,145 68,155 L70,180 Q72,195 80,200 L120,200 Q128,195 130,180 L132,155 Q144,145 142,130 L140,110 Q135,95 125,100Z" fill="#c0392b" ${S}/>
    <circle cx="88" cy="135" r="5" fill="#fff" ${S}/>
    <circle cx="112" cy="135" r="5" fill="#fff" ${S}/>
    <circle cx="90" cy="135" r="2.5" fill="#2c1810"/>
    <circle cx="110" cy="135" r="2.5" fill="#2c1810"/>
    <path d="M88,148 Q100,155 112,148" fill="none" ${S2}/>
    <path d="M95,118 Q100,112 105,118L100,125Z" fill="#f39c12" ${S}/>
    <path d="M100,155 Q98,168 100,175" fill="none" ${S1}/>
    <line x1="75" y1="200" x2="65" y2="235" ${S2}/>
    <line x1="125" y1="200" x2="135" y2="235" ${S2}/>
    <path d="M60,235 L55,245 L68,240Z" fill="#c0392b" ${S}/>
    <path d="M140,235 L145,245 L132,240Z" fill="#c0392b" ${S}/>
    <path d="M92,195 L98,215 L108,215 L102,195Z" fill="#2c1810"/>
    <path d="M70,155 L60,170 L72,165Z" fill="#8b4513" ${S}/>
    <path d="M130,155 L140,170 L128,165Z" fill="#8b4513" ${S}/>
    <path d="M85,95 Q100,90 115,95" fill="none" ${S2}/>
  `,

  dama: `
    <defs>
      <linearGradient id="damaDress" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#e74c3c"/>
        <stop offset="100%" stop-color="#922b21"/>
      </linearGradient>
      <linearGradient id="damaSkin" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#fdebd0"/>
        <stop offset="100%" stop-color="#f5cba7"/>
      </linearGradient>
    </defs>
    <!-- Dress / body -->
    <path d="M75,110 Q60,108 55,125 L52,145 Q48,165 60,178 L65,210 Q68,222 80,225 L120,225 Q132,222 135,210 L140,178 Q152,165 148,145 L145,125 Q140,108 125,110Z" fill="url(#damaDress)" stroke="#922b21" stroke-width="2.5"/>
    <!-- Dress details -->
    <path d="M75,140 Q100,130 125,140" fill="none" stroke="#c0392b" stroke-width="1.5" opacity="0.5"/>
    <path d="M72,160 Q100,148 128,160" fill="none" stroke="#c0392b" stroke-width="1.5" opacity="0.5"/>
    <path d="M68,180 Q100,168 132,180" fill="none" stroke="#c0392b" stroke-width="1.5" opacity="0.5"/>
    <!-- Collar / neckline -->
    <path d="M80,115 Q100,125 120,115" fill="none" stroke="#f1c40f" stroke-width="2"/>
    <!-- Neck -->
    <rect x="92" y="85" width="16" height="28" rx="4" fill="url(#damaSkin)" stroke="#d4a574" stroke-width="1.5"/>
    <!-- Head -->
    <ellipse cx="100" cy="72" rx="20" ry="22" fill="url(#damaSkin)" stroke="#d4a574" stroke-width="2"/>
    <!-- Hair -->
    <path d="M80,65 Q78,45 90,38 Q100,32 110,38 Q122,45 120,65 Q115,55 100,52 Q85,55 80,65Z" fill="#2c1810" stroke="#1a0f0a" stroke-width="1.5"/>
    <path d="M80,65 Q75,75 78,85" fill="#2c1810" stroke="#1a0f0a" stroke-width="1"/>
    <path d="M120,65 Q125,75 122,85" fill="#2c1810" stroke="#1a0f0a" stroke-width="1"/>
    <!-- Hair ornament -->
    <circle cx="100" cy="42" r="5" fill="#f1c40f" stroke="#d4a017" stroke-width="1.5"/>
    <circle cx="100" cy="42" r="2" fill="#c0392b"/>
    <!-- Eyes -->
    <ellipse cx="90" cy="70" rx="3.5" ry="4" fill="#2c1810"/>
    <ellipse cx="110" cy="70" rx="3.5" ry="4" fill="#2c1810"/>
    <circle cx="91" cy="68.5" r="1.5" fill="#fff"/>
    <circle cx="111" cy="68.5" r="1.5" fill="#fff"/>
    <!-- Eyebrows -->
    <path d="M84,63 Q90,60 96,63" fill="none" stroke="#2c1810" stroke-width="1.5"/>
    <path d="M104,63 Q110,60 116,63" fill="none" stroke="#2c1810" stroke-width="1.5"/>
    <!-- Nose -->
    <path d="M100,72 L98,78 Q100,80 102,78Z" fill="#d4a574" stroke="none"/>
    <!-- Mouth -->
    <path d="M92,84 Q100,90 108,84" fill="none" stroke="#c0392b" stroke-width="1.5"/>
    <!-- Blush -->
    <ellipse cx="84" cy="80" rx="5" ry="3" fill="#e74c3c" opacity="0.2"/>
    <ellipse cx="116" cy="80" rx="5" ry="3" fill="#e74c3c" opacity="0.2"/>
    <!-- Arms / sleeves -->
    <path d="M55,130 Q40,145 38,165 Q42,170 48,162 Q52,150 58,140" fill="url(#damaDress)" stroke="#922b21" stroke-width="2"/>
    <path d="M145,130 Q160,145 162,165 Q158,170 152,162 Q148,150 142,140" fill="url(#damaDress)" stroke="#922b21" stroke-width="2"/>
    <!-- Hands -->
    <ellipse cx="40" cy="168" rx="7" ry="6" fill="url(#damaSkin)" stroke="#d4a574" stroke-width="1.5"/>
    <ellipse cx="160" cy="168" rx="7" ry="6" fill="url(#damaSkin)" stroke="#d4a574" stroke-width="1.5"/>
    <!-- Fan (in hand) -->
    <path d="M148,165 Q165,150 172,135 Q168,145 160,155 Q155,162 148,165Z" fill="#f39c12" stroke="#d4a017" stroke-width="1.5"/>
    <path d="M150,162 Q162,150 168,140" fill="none" stroke="#d4a017" stroke-width="1"/>
    <!-- Feet -->
    <path d="M85,225 L82,245 Q88,250 94,245 L90,225" fill="#2c1810" stroke="#1a0f0a" stroke-width="1.5"/>
    <path d="M110,225 L106,245 Q112,250 118,245 L115,225" fill="#2c1810" stroke="#1a0f0a" stroke-width="1.5"/>
  `,

  catrin: `
    <ellipse cx="100" cy="55" rx="18" ry="22" fill="#f5cba7" ${S}/>
    <path d="M70,68 Q65,80 68,95" fill="none" ${S2}/>
    <path d="M130,68 Q135,80 132,95" fill="none" ${S2}/>
    <rect x="64" y="90" width="72" height="90" rx="5" fill="#2c3e50" ${S}/>
    <rect x="70" y="95" width="60" height="20" fill="#ecf0f1" ${S1}/>
    <rect x="72" y="100" width="10" height="10" rx="1" fill="#2c3e50"/>
    <rect x="88" y="100" width="10" height="10" rx="1" fill="#2c3e50"/>
    <rect x="104" y="100" width="10" height="10" rx="1" fill="#2c3e50"/>
    <rect x="120" y="100" width="10" height="10" rx="1" fill="#2c3e50"/>
    <circle cx="86" cy="60" r="4" fill="#2c1810"/>
    <circle cx="114" cy="60" r="4" fill="#2c1810"/>
    <circle cx="88" cy="58" r="1.5" fill="#fff"/>
    <circle cx="112" cy="58" r="1.5" fill="#fff"/>
    <path d="M88,68 Q100,76 112,68" fill="none" ${S1}/>
    <path d="M95,72 L95,80" fill="none" ${S1}/>
    <path d="M105,72 L105,80" fill="none" ${S1}/>
    <ellipse cx="100" cy="85" rx="12" ry="6" fill="#2c1810"/>
    <path d="M100,55 L100,48" fill="none" ${S1}/>
    <path d="M95,48 Q100,42 105,48" fill="none" ${S1}/>
    <rect x="92" y="180" width="16" height="25" rx="2" fill="#ecf0f1" ${S}/>
    <line x1="96" y1="205" x2="92" y2="240" ${S1}/>
    <line x1="104" y1="205" x2="108" y2="240" ${S1}/>
    <path d="M88,240 L92,245 L96,238" fill="none" ${S1}/>
    <path d="M104,238 L108,245 L112,240" fill="none" ${S1}/>
    <path d="M90,130 L72,160 L78,170 L98,138Z" fill="#c0392b" ${S1}/>
    <path d="M110,130 L128,160 L122,170 L102,138Z" fill="#c0392b" ${S1}/>
  `,

  paraguas: `
    <path d="M25,120 Q50,55 100,45 Q150,55 175,120" fill="#c0392b" ${S2}/>
    <path d="M25,120 Q100,130 175,120" fill="#e74c3c" ${S2}/>
    <rect x="97" y="118" width="6" height="80" fill="#8b4513" ${S1}/>
    <path d="M96,198 Q100,205 104,198" fill="none" ${S1}/>
    <path d="M100,205 Q95,215 90,220" fill="none" ${S1}/>
    <path d="M100,205 Q105,215 110,220" fill="none" ${S1}/>
    <path d="M60,105 L65,90 L70,105" fill="none" ${S1}/>
    <path d="M130,105 L135,90 L140,105" fill="none" ${S1}/>
    <path d="M95,105 L100,85 L105,105" fill="none" ${S1}/>
    <path d="M100,45 Q100,30 100,25" fill="none" ${S1}/>
    <circle cx="100" cy="22" r="4" fill="#f39c12" ${S1}/>
    <path d="M38,115 L42,108 L46,115" fill="none" ${S1}/>
    <path d="M154,115 L158,108 L162,115" fill="none" ${S1}/>
    <path d="M50,95 L54,100 L58,95" fill="none" ${S1}/>
    <path d="M142,95 L146,100 L150,95" fill="none" ${S1}/>
  `,

  sirena: `
    <path d="M95,55 Q80,50 75,65 Q72,78 80,85 L78,95 Q75,105 82,115 L90,140 Q95,165 88,190 Q82,210 95,220 L105,220 Q118,210 112,190 Q105,165 110,140 L118,115 Q125,105 122,95 L120,85 Q128,78 125,65 Q120,50 105,55Z" fill="#3498db" ${S}/>
    <path d="M88,55 Q90,40 100,35 Q110,40 112,55" fill="#f5cba7" ${S}/>
    <circle cx="92" cy="60" r="3" fill="#2c1810"/>
    <circle cx="108" cy="60" r="3" fill="#2c1810"/>
    <circle cx="93" cy="59" r="1" fill="#fff"/>
    <circle cx="107" cy="59" r="1" fill="#fff"/>
    <path d="M94,67 Q100,73 106,67" fill="none" ${S1}/>
    <path d="M85,72 Q80,80 82,88" fill="none" ${S1}/>
    <path d="M115,72 Q120,80 118,88" fill="none" ${S1}/>
    <path d="M98,78 L98,88" fill="none" ${S1}/>
    <path d="M88,140 Q78,150 75,165 Q72,180 82,195" fill="none" ${S1}/>
    <path d="M112,140 Q122,150 125,165 Q128,180 118,195" fill="none" ${S1}/>
    <path d="M88,220 Q75,235 82,248 L95,235Z" fill="#1abc9c" ${S}/>
    <path d="M112,220 Q125,235 118,248 L105,235Z" fill="#1abc9c" ${S}/>
    <path d="M95,235 L100,255" fill="none" ${S1}/>
    <path d="M105,235 L100,255" fill="none" ${S1}/>
    <path d="M95,88 Q80,85 72,92" fill="none" ${S1}/>
    <path d="M105,88 Q120,85 128,92" fill="none" ${S1}/>
    <circle cx="100" cy="48" r="3" fill="#f39c12" ${S1}/>
  `,

  escalera: `
    <line x1="55" y1="40" x2="55" y2="250" ${S2}/>
    <line x1="145" y1="40" x2="145" y2="250" ${S2}/>
    <line x1="55" y1="55" x2="145" y2="45" ${S1}/>
    <line x1="55" y1="80" x2="145" y2="70" ${S1}/>
    <line x1="55" y1="105" x2="145" y2="95" ${S1}/>
    <line x1="55" y1="130" x2="145" y2="120" ${S1}/>
    <line x1="55" y1="155" x2="145" y2="145" ${S1}/>
    <line x1="55" y1="180" x2="145" y2="170" ${S1}/>
    <line x1="55" y1="205" x2="145" y2="195" ${S1}/>
    <line x1="55" y1="230" x2="145" y2="220" ${S1}/>
    <path d="M50,40 L58,38 L58,252 L50,250Z" fill="#8b4513"/>
    <path d="M140,40 L148,38 L148,252 L140,250Z" fill="#8b4513"/>
  `,

  botella: `
    <path d="M88,45 Q88,35 92,30 L92,25 Q92,20 100,18 Q108,20 108,25 L108,30 Q112,35 112,45 L114,60 Q116,80 114,100 Q112,120 110,140 Q108,160 108,180 Q108,200 110,220 Q112,240 110,250 Q108,258 100,260 Q92,258 90,250 Q88,240 90,220 Q92,200 92,180 Q92,160 90,140 Q88,120 86,100 Q84,80 86,60Z" fill="#27ae60" ${S}/>
    <rect x="94" y="40" width="12" height="20" rx="2" fill="#2ecc71" ${S1}/>
    <rect x="96" y="22" width="8" height="12" rx="1" fill="#2c1810"/>
    <path d="M86,110 Q100,115 114,110" fill="none" ${S1}/>
    <path d="M88,150 Q100,155 112,150" fill="none" ${S1}/>
    <path d="M90,190 Q100,195 110,190" fill="none" ${S1}/>
    <path d="M90,230 Q100,235 110,230" fill="none" ${S1}/>
    <rect x="92" y="55" width="16" height="15" fill="#f5e6ca" ${S1}/>
    <rect x="95" y="58" width="10" height="9" fill="#c0392b"/>
  `,

  barril: `
    <path d="M60,65 Q55,90 58,120 L60,155 Q62,190 65,220 Q68,245 75,255 L125,255 Q132,245 135,220 L138,190 L140,155 L142,120 Q145,90 140,65Z" fill="#8b4513" ${S}/>
    <ellipse cx="100" cy="65" rx="42" ry="12" fill="#a0522d" ${S}/>
    <ellipse cx="100" cy="255" rx="27" ry="10" fill="#8b4513" ${S}/>
    <line x1="65" y1="120" x2="135" y2="120" ${S1}/>
    <line x1="63" y1="170" x2="137" y2="170" ${S1}/>
    <line x1="68" y1="215" x2="132" y2="215" ${S1}/>
    <rect x="94" y="120" width="12" height="135" rx="3" fill="#6b3410" ${S1}/>
    <rect x="96" y="130" width="8" height="30" rx="2" fill="#8b4513"/>
    <circle cx="100" cy="175" r="8" fill="#8b4513" ${S1}/>
    <circle cx="100" cy="175" r="3" fill="#2c1810"/>
    <path d="M62,90 Q100,100 138,90" fill="none" ${S1}/>
    <path d="M65,240 Q100,250 135,240" fill="none" ${S1}/>
  `,

  arbol: `
    <rect x="94" y="200" width="12" height="55" rx="3" fill="#8b4513" ${S}/>
    <path d="M100,200 Q90,195 85,185 Q75,175 72,165 Q65,155 68,140 Q65,125 75,115 Q70,100 80,92 Q78,78 90,72 Q88,58 100,50 Q112,58 110,72 Q122,78 120,92 Q130,100 125,115 Q135,125 132,140 Q135,155 128,165 Q125,175 115,185 Q110,195 100,200Z" fill="#27ae60" ${S}/>
    <circle cx="90" cy="120" r="5" fill="#2ecc71" ${S1}/>
    <circle cx="110" cy="110" r="4" fill="#2ecc71" ${S1}/>
    <circle cx="100" cy="90" r="6" fill="#2ecc71" ${S1}/>
    <circle cx="80" cy="100" r="4" fill="#2ecc71" ${S1}/>
    <circle cx="120" cy="130" r="5" fill="#2ecc71" ${S1}/>
    <circle cx="95" cy="140" r="4" fill="#2ecc71" ${S1}/>
    <path d="M100,210 Q90,220 95,230 Q105,230 100,210Z" fill="#f39c12" ${S1}/>
    <path d="M100,50 L100,42" fill="none" ${S1}/>
    <path d="M94,42 Q100,36 106,42" fill="none" ${S1}/>
  `,

  melon: `
    <ellipse cx="100" cy="150" rx="60" ry="75" fill="#27ae60" ${S2}/>
    <path d="M100,75 Q120,80 135,100 Q150,125 155,155 Q158,180 145,200 Q130,218 100,225" fill="none" ${S1}/>
    <path d="M100,75 Q80,80 65,100 Q50,125 45,155 Q42,180 55,200 Q70,218 100,225" fill="none" ${S1}/>
    <path d="M82,95 Q100,85 118,95" fill="none" ${S1}/>
    <path d="M75,115 Q100,105 125,115" fill="none" ${S1}/>
    <path d="M72,140 Q100,128 128,140" fill="none" ${S1}/>
    <path d="M78,165 Q100,155 122,165" fill="none" ${S1}/>
    <path d="M88,190 Q100,182 112,190" fill="none" ${S1}/>
    <path d="M100,78 L100,72" fill="none" ${S1}/>
    <path d="M94,72 Q100,66 106,72" fill="none" ${S1}/>
    <path d="M92,130 Q100,135 108,130" fill="none" ${S1}/>
  `,

  valiente: `
    <circle cx="100" cy="65" r="20" fill="#f5cba7" ${S}/>
    <path d="M75,80 Q70,95 72,110 L68,130 Q65,145 72,155 L78,200 Q80,215 85,220 L115,220 Q120,215 122,200 L128,155 Q135,145 132,130 L128,110 Q130,95 125,80" fill="#c0392b" ${S}/>
    <circle cx="90" cy="65" r="3.5" fill="#2c1810"/>
    <circle cx="110" cy="65" r="3.5" fill="#2c1810"/>
    <circle cx="91" cy="63" r="1.5" fill="#fff"/>
    <circle cx="109" cy="63" r="1.5" fill="#fff"/>
    <path d="M92,73 Q100,80 108,73" fill="none" ${S1}/>
    <path d="M96,80 L96,88" fill="none" ${S1}/>
    <path d="M104,80 L104,88" fill="none" ${S1}/>
    <path d="M82,120 Q100,130 118,120" fill="none" ${S1}/>
    <path d="M85,145 Q100,155 115,145" fill="none" ${S1}/>
    <rect x="92" y="195" width="16" height="25" fill="#f5cba7" ${S}/>
    <line x1="96" y1="220" x2="92" y2="248" ${S1}/>
    <line x1="104" y1="220" x2="108" y2="248" ${S1}/>
    <path d="M88,248 L92,252 L96,246" fill="none" ${S1}/>
    <path d="M104,246 L108,252 L112,248" fill="none" ${S1}/>
    <path d="M122,160 L135,170 L125,135Z" fill="#f39c12" ${S}/>
    <path d="M78,160 L65,170 L75,135Z" fill="#f39c12" ${S}/>
    <path d="M100,52 L100,44" fill="none" ${S1}/>
  `,

  gorrito: `
    <path d="M55,110 Q55,95 65,88 Q75,82 90,80 Q100,65 100,50 Q100,65 110,80 Q125,82 135,88 Q145,95 145,110" fill="none" ${S2}/>
    <path d="M55,110 L55,120 Q55,130 65,132 L135,132 Q145,130 145,120 L145,110" fill="#c0392b" ${S2}/>
    <ellipse cx="100" cy="132" rx="45" ry="8" fill="#c0392b" ${S}/>
    <path d="M90,80 Q100,75 110,80" fill="none" ${S1}/>
    <path d="M65,105 Q80,100 100,98 Q120,100 135,105" fill="none" ${S1}/>
    <circle cx="100" cy="105" r="15" fill="#f5cba7" ${S}/>
    <circle cx="95" cy="102" r="3" fill="#2c1810"/>
    <circle cx="105" cy="102" r="3" fill="#2c1810"/>
    <path d="M96,108 Q100,112 104,108" fill="none" ${S1}/>
    <path d="M100,105 L100,115" fill="none" ${S1}/>
    <path d="M92,115 Q100,120 108,115" fill="none" ${S1}/>
    <path d="M82,140 Q100,148 118,140" fill="none" ${S1}/>
    <path d="M85,155 Q100,162 115,155" fill="none" ${S1}/>
    <rect x="94" y="162" width="12" height="30" fill="#f5cba7" ${S1}/>
    <line x1="96" y1="192" x2="92" y2="230" ${S1}/>
    <line x1="104" y1="192" x2="108" y2="230" ${S1}/>
  `,

  muerte: `
    <ellipse cx="100" cy="70" rx="22" ry="28" fill="#ecf0f1" ${S2}/>
    <circle cx="88" cy="65" r="5" fill="#2c1810"/>
    <circle cx="112" cy="65" r="5" fill="#2c1810"/>
    <path d="M88,80 L100,88 L112,80" fill="none" ${S1}/>
    <path d="M96,85 L96,95" fill="none" ${S1}/>
    <path d="M104,85 L104,95" fill="none" ${S1}/>
    <path d="M82,102 Q100,112 118,102" fill="none" ${S1}/>
    <path d="M100,98 L100,110" fill="none" ${S1}/>
    <path d="M72,108 L68,125 Q65,140 72,150 L78,190 Q80,205 85,210 L115,210 Q120,205 122,190 L128,150 Q135,140 132,125 L128,108" fill="#ecf0f1" ${S}/>
    <path d="M80,130 Q100,140 120,130" fill="none" ${S1}/>
    <path d="M82,160 Q100,170 118,160" fill="none" ${S1}/>
    <rect x="92" y="180" width="16" height="30" fill="#ecf0f1" ${S}/>
    <line x1="96" y1="210" x2="90" y2="248" ${S1}/>
    <line x1="104" y1="210" x2="110" y2="248" ${S1}/>
    <path d="M86,248 L90,253 L94,246" fill="none" ${S1}/>
    <path d="M106,246 L110,253 L114,248" fill="none" ${S1}/>
    <path d="M100,70 L100,55" fill="none" ${S1}/>
    <path d="M90,55 Q100,48 110,55" fill="none" ${S1}/>
    <path d="M60,100 Q50,120 55,140 L60,95Z" fill="#8b4513" ${S}/>
    <path d="M140,100 Q150,120 145,140 L140,95Z" fill="#8b4513" ${S}/>
    <path d="M58,95 L62,92 L62,142 L58,140Z" fill="#6b3410"/>
    <path d="M142,95 L138,92 L138,142 L142,140Z" fill="#6b3410"/>
  `,

  pera: `
    <path d="M95,50 Q95,38 100,32 Q105,38 105,50" fill="none" ${S1}/>
    <path d="M95,50 L92,60 Q88,75 85,95 Q82,115 85,135 Q88,160 92,180 Q95,200 100,210 Q105,200 108,180 Q112,160 115,135 Q118,115 115,95 Q112,75 108,60 L105,50" fill="#f39c12" ${S2}/>
    <path d="M88,90 Q100,80 112,90" fill="none" ${S1}/>
    <path d="M86,120 Q100,108 114,120" fill="none" ${S1}/>
    <path d="M90,150 Q100,140 110,150" fill="none" ${S1}/>
    <path d="M95,180 Q100,172 105,180" fill="none" ${S1}/>
    <path d="M98,32 L95,28 L100,25 L105,28 L102,32" fill="none" ${S1}/>
    <path d="M95,45 Q90,42 88,48" fill="none" ${S1}/>
    <path d="M105,45 Q110,42 112,48" fill="none" ${S1}/>
  `,

  bandera: `
    <line x1="60" y1="40" x2="60" y2="260" fill="none" ${S2}/>
    <rect x="60" y="50" width="90" height="130" fill="#27ae60" ${S1}/>
    <rect x="60" y="50" width="30" height="130" fill="#fff" ${S1}/>
    <rect x="120" y="50" width="30" height="130" fill="#c0392b" ${S1}/>
    <rect x="60" y="50" width="90" height="130" fill="none" ${S1}/>
    <ellipse cx="105" cy="115" rx="20" ry="25" fill="#8b4513" ${S1}/>
    <path d="M105,90 Q105,75 105,70" fill="none" ${S1}/>
    <path d="M98,72 Q105,65 112,72" fill="none" ${S1}/>
    <circle cx="100" cy="108" r="4" fill="#2c1810"/>
    <circle cx="110" cy="108" r="4" fill="#2c1810"/>
    <path d="M100,118 Q105,125 110,118" fill="none" ${S1}/>
    <path d="M105,115 L105,130" fill="none" ${S1}/>
    <circle cx="60" cy="42" r="5" fill="#f39c12" ${S1}/>
    <line x1="60" y1="40" x2="60" y2="260" ${S2}/>
    <path d="M55,260 L60,265 L65,260Z" fill="#8b4513"/>
  `,

  bandolon: `
    <path d="M80,100 Q70,80 75,60 Q80,45 95,45 Q110,45 115,55 L118,70 Q120,90 118,110 L115,150 Q112,180 110,200 Q108,220 105,235 Q100,245 95,245 Q90,245 85,235 Q82,220 80,200 Q78,180 80,150Z" fill="#8b4513" ${S2}/>
    <circle cx="95" cy="95" r="22" fill="#f5e6ca" ${S}/>
    <circle cx="95" cy="95" r="16" fill="#c0392b" ${S1}/>
    <circle cx="95" cy="95" r="10" fill="#f5e6ca" ${S1}/>
    <circle cx="95" cy="95" r="4" fill="#2c1810"/>
    <line x1="75" y1="60" x2="65" y2="50" ${S1}/>
    <line x1="75" y1="65" x2="60" y2="58" ${S1}/>
    <line x1="75" y1="52" x2="60" y2="42" ${S1}/>
    <line x1="115" y1="55" x2="125" y2="45" ${S1}/>
    <line x1="118" y1="63" x2="130" y2="55" ${S1}/>
    <line x1="118" y1="48" x2="128" y2="38" ${S1}/>
    <rect x="90" y="200" width="10" height="45" fill="#a0522d" ${S1}/>
    <line x1="88" y1="235" x2="85" y2="255" ${S1}/>
    <line x1="102" y1="235" x2="105" y2="255" ${S1}/>
    <path d="M80,150 Q95,160 110,150" fill="none" ${S1}/>
    <path d="M85,180 Q95,188 105,180" fill="none" ${S1}/>
  `,

  violoncello: `
    <path d="M85,55 Q78,45 80,35 Q82,28 90,28 Q100,28 105,35 L110,48 Q115,65 115,85 Q115,105 112,125 L108,170 Q105,200 102,220 Q100,235 95,245 Q90,235 88,220 Q85,200 82,170 L78,125 Q75,105 75,85 Q75,65 80,55Z" fill="#8b4513" ${S2}/>
    <path d="M88,55 Q100,50 105,55" fill="none" ${S1}/>
    <path d="M88,75 Q100,70 108,75" fill="none" ${S1}/>
    <path d="M90,95 Q100,90 105,95" fill="none" ${S1}/>
    <path d="M75,85 L65,80 Q60,85 65,95 L75,105" fill="none" ${S1}/>
    <path d="M115,85 L125,80 Q130,85 125,95 L115,105" fill="none" ${S1}/>
    <line x1="78" y1="130" x2="68" y2="125" ${S1}/>
    <line x1="110" y1="130" x2="120" y2="125" ${S1}/>
    <line x1="82" y1="160" x2="72" y2="155" ${S1}/>
    <line x1="108" y1="160" x2="118" y2="155" ${S1}/>
    <line x1="88" y1="200" x2="80" y2="195" ${S1}/>
    <line x1="105" y1="200" x2="112" y2="195" ${S1}/>
    <rect x="92" y="245" width="6" height="15" fill="#2c1810"/>
    <line x1="90" y1="258" x2="88" y2="265" ${S1}/>
    <line x1="100" y1="258" x2="102" y2="265" ${S1}/>
  `,

  garza: `
    <path d="M100,45 Q98,40 100,35 Q102,40 100,45" fill="#c0392b" ${S1}/>
    <path d="M95,48 L100,35 L105,48Z" fill="#f39c12" ${S1}/>
    <ellipse cx="100" cy="75" rx="18" ry="22" fill="#ecf0f1" ${S}/>
    <circle cx="108" cy="68" r="3" fill="#2c1810"/>
    <circle cx="109" cy="67" r="1" fill="#fff"/>
    <path d="M108,78 L112,85 L108,82" fill="none" ${S1}/>
    <path d="M90,60 Q82,58 78,65 Q75,72 80,78" fill="none" ${S1}/>
    <path d="M112,65 Q125,60 130,55" fill="none" ${S1}/>
    <path d="M90,95 L96,140 Q100,170 98,200 Q96,230 95,255" fill="none" ${S}/>
    <line x1="90" y1="255" x2="88" y2="265" ${S1}/>
    <line x1="95" y1="255" x2="98" y2="265" ${S1}/>
    <path d="M95,120 Q80,125 72,135 Q68,145 75,148" fill="none" ${S1}/>
    <path d="M72,135 Q65,140 62,148" fill="none" ${S1}/>
    <path d="M95,200 Q110,205 115,215" fill="none" ${S1}/>
    <path d="M115,215 Q120,220 118,228" fill="none" ${S1}/>
    <path d="M92,90 Q70,95 65,100 Q60,108 65,112" fill="#ecf0f1" ${S1}/>
    <path d="M108,90 Q130,95 135,100 Q140,108 135,112" fill="#ecf0f1" ${S1}/>
    <path d="M90,75 L85,68 L90,72" fill="none" ${S1}/>
  `,

  pajaro: `
    <ellipse cx="100" cy="120" rx="35" ry="25" fill="#f39c12" ${S}/>
    <path d="M135,120 Q165,110 175,95 Q165,125 135,120" fill="#8b4513" ${S}/>
    <circle cx="80" cy="108" r="5" fill="#2c1810"/>
    <circle cx="82" cy="106" r="2" fill="#fff"/>
    <path d="M65,115 L55,112 L65,108" fill="none" ${S1}/>
    <path d="M70,110 L60,105 L70,100" fill="none" ${S1}/>
    <path d="M65,115 L50,118 L65,108" fill="none" ${S1}/>
    <ellipse cx="100" cy="145" rx="25" ry="10" fill="#f5e6ca" ${S}/>
    <path d="M100,135 Q80,130 70,140 Q65,145 70,150 Q80,155 100,148" fill="none" ${S1}/>
    <path d="M100,135 Q120,130 130,140 Q135,145 130,150 Q120,155 100,148" fill="none" ${S1}/>
    <path d="M90,155 L85,175 L90,170" fill="none" ${S1}/>
    <path d="M95,158 L92,180 L97,175" fill="none" ${S1}/>
    <path d="M100,160 L100,185" fill="none" ${S1}/>
    <line x1="85" y1="60" x2="85" y2="95" fill="none" ${S1}/>
    <line x1="115" y1="60" x2="115" y2="95" fill="none" ${S1}/>
    <path d="M85,60 Q75,55 72,45 Q78,40 85,45" fill="none" ${S1}/>
    <path d="M115,60 Q125,55 128,45 Q122,40 115,45" fill="none" ${S1}/>
  `,

  mano: `
    <rect x="70" y="45" width="60" height="120" rx="15" fill="#f5cba7" ${S}/>
    <path d="M70,80 Q55,75 52,65 Q48,55 55,50 Q65,48 70,60" fill="#f5cba7" ${S}/>
    <path d="M130,80 Q145,75 148,65 Q152,55 145,50 Q135,48 130,60" fill="#f5cba7" ${S}/>
    <path d="M75,55 Q65,40 58,30 Q52,25 50,35 Q48,48 60,52" fill="#f5cba7" ${S}/>
    <path d="M125,55 Q135,40 142,30 Q148,25 150,35 Q152,48 140,52" fill="#f5cba7" ${S}/>
    <path d="M90,45 Q88,28 85,18 Q82,12 78,18 Q75,28 82,42" fill="#f5cba7" ${S}/>
    <path d="M110,45 Q112,28 115,18 Q118,12 122,18 Q125,28 118,42" fill="#f5cba7" ${S}/>
    <path d="M95,45 L95,165" fill="none" ${S1}/>
    <path d="M105,45 L105,165" fill="none" ${S1}/>
    <path d="M85,55 L85,160" fill="none" ${S1}/>
    <path d="M115,55 L115,160" fill="none" ${S1}/>
    <path d="M88,105 Q100,112 112,105" fill="none" ${S1}/>
    <path d="M90,135 Q100,142 110,135" fill="none" ${S1}/>
    <rect x="80" y="165" width="40" height="8" rx="3" fill="#f5cba7" ${S}/>
  `,

  bota: `
    <path d="M145,100 L145,80 Q145,65 140,60 L80,60 Q70,60 68,70 L65,100 Q62,120 60,135 Q58,150 55,165 Q52,180 55,195 Q58,205 65,210 L110,210 Q125,210 135,205 Q142,198 145,190 L148,170 Q150,150 148,130Z" fill="#8b4513" ${S2}/>
    <path d="M65,210 L55,225 Q50,235 52,245 Q55,252 65,250 L115,250 Q125,248 128,245 Q130,240 128,235 L125,210" fill="#a0522d" ${S2}/>
    <line x1="80" y1="60" x2="80" y2="210" fill="none" ${S1}/>
    <line x1="100" y1="60" x2="100" y2="210" fill="none" ${S1}/>
    <line x1="120" y1="60" x2="120" y2="210" fill="none" ${S1}/>
    <line x1="130" y1="80" x2="130" y2="200" fill="none" ${S1}/>
    <path d="M70,90 Q100,85 130,90" fill="none" ${S1}/>
    <path d="M68,120 Q100,115 135,120" fill="none" ${S1}/>
    <path d="M65,150 Q100,145 140,150" fill="none" ${S1}/>
    <path d="M62,180 Q100,175 145,180" fill="none" ${S1}/>
    <path d="M65,100 L60,110 L65,115" fill="none" ${S1}/>
    <path d="M60,115 L52,125 L60,130" fill="none" ${S1}/>
    <path d="M55,130 L48,140 L55,145" fill="none" ${S1}/>
    <path d="M50,145 L42,155 L50,160" fill="none" ${S1}/>
    <path d="M52,160 L45,170 L52,175" fill="none" ${S1}/>
  `,

  luna: `
    <circle cx="110" cy="130" r="60" fill="#f39c12" ${S2}/>
    <circle cx="128" cy="118" r="50" fill="#f5e6ca"/>
    <circle cx="105" cy="100" r="6" fill="#d4a017" opacity="0.4"/>
    <circle cx="115" cy="130" r="5" fill="#d4a017" opacity="0.4"/>
    <circle cx="98" cy="145" r="4" fill="#d4a017" opacity="0.4"/>
    <circle cx="130" cy="95" r="3" fill="#d4a017" opacity="0.4"/>
    <circle cx="125" cy="150" r="4" fill="#d4a017" opacity="0.4"/>
    <circle cx="140" cy="125" r="3" fill="#d4a017" opacity="0.4"/>
    <path d="M110,75 Q110,68 110,65" fill="none" ${S1}/>
    <path d="M105,68 Q110,62 115,68" fill="none" ${S1}/>
    <path d="M60,130 Q55,130 50,130" fill="none" ${S1}/>
    <path d="M55,125 Q50,130 55,135" fill="none" ${S1}/>
    <path d="M90,70 Q85,65 82,62" fill="none" ${S1}/>
    <path d="M85,65 Q80,62 82,58" fill="none" ${S1}/>
    <circle cx="50" cy="100" r="2" fill="#d4a017" opacity="0.3"/>
    <circle cx="55" cy="155" r="2" fill="#d4a017" opacity="0.3"/>
    <circle cx="70" cy="80" r="1.5" fill="#d4a017" opacity="0.3"/>
  `,

  cotorro: `
    <ellipse cx="100" cy="130" rx="30" ry="45" fill="#27ae60" ${S}/>
    <ellipse cx="100" cy="140" rx="22" ry="32" fill="#2ecc71" ${S1}/>
    <circle cx="100" cy="90" r="18" fill="#27ae60" ${S}/>
    <circle cx="100" cy="90" r="14" fill="#2ecc71" ${S1}/>
    <circle cx="92" cy="86" r="4" fill="#fff" ${S}/>
    <circle cx="108" cy="86" r="4" fill="#fff" ${S}/>
    <circle cx="94" cy="86" r="2.5" fill="#2c1810"/>
    <circle cx="106" cy="86" r="2.5" fill="#2c1810"/>
    <path d="M85,68 L82,58 L88,65Z" fill="#f39c12" ${S}/>
    <path d="M115,68 L118,58 L112,65Z" fill="#f39c12" ${S}/>
    <path d="M92,78 L100,72 L108,78" fill="none" ${S1}/>
    <path d="M95,94 L100,100 L105,94" fill="none" ${S1}/>
    <path d="M100,88 L100,100" fill="none" ${S1}/>
    <path d="M100,168 L100,185 L95,178" fill="none" ${S1}/>
    <path d="M96,170 L92,188 L98,180" fill="none" ${S1}/>
    <path d="M104,170 L108,188 L102,180" fill="none" ${S1}/>
    <path d="M70,120 Q62,125 58,120 Q55,112 62,108" fill="#c0392b" ${S}/>
    <path d="M130,120 Q138,125 142,120 Q145,112 138,108" fill="#c0392b" ${S}/>
    <path d="M80,175 Q90,185 110,185 Q120,175 110,170" fill="none" ${S1}/>
    <circle cx="100" cy="85" r="3" fill="#f39c12"/>
  `,

  borracho: `
    <circle cx="100" cy="60" r="22" fill="#f5cba7" ${S}/>
    <circle cx="88" cy="58" r="4" fill="#c0392b"/>
    <circle cx="112" cy="58" r="4" fill="#c0392b"/>
    <circle cx="89" cy="56" r="1.5" fill="#fff"/>
    <circle cx="111" cy="56" r="1.5" fill="#fff"/>
    <path d="M88,68 Q100,76 112,68" fill="none" ${S1}/>
    <ellipse cx="100" cy="80" rx="15" ry="8" fill="#c0392b"/>
    <path d="M78,82 Q65,90 62,105 L60,130 Q58,145 65,155 L70,195 Q72,210 78,215 L122,215 Q128,210 130,195 L135,155 Q142,145 140,130 L138,105 Q135,90 122,82" fill="#c0392b" ${S}/>
    <path d="M82,100 Q100,110 118,100" fill="none" ${S1}/>
    <path d="M80,130 Q100,140 120,130" fill="none" ${S1}/>
    <rect x="92" y="190" width="16" height="25" fill="#f5cba7" ${S}/>
    <line x1="96" y1="215" x2="90" y2="248" ${S1}/>
    <line x1="104" y1="215" x2="110" y2="248" ${S1}/>
    <path d="M86,248 L90,253 L94,246" fill="none" ${S1}/>
    <path d="M106,246 L110,253 L114,248" fill="none" ${S1}/>
    <path d="M125,155 L140,170 L130,140Z" fill="#f39c12" ${S1}/>
    <rect x="58" y="128" width="25" height="35" rx="3" fill="#27ae60" ${S}/>
    <rect x="62" y="135" width="18" height="8" fill="#f5e6ca" ${S1}/>
    <path d="M76,145 L80,155 L72,150Z" fill="#8b4513" ${S1}/>
    <path d="M100,50 L100,42" fill="none" ${S1}/>
  `,

  negrito: `
    <circle cx="100" cy="60" r="22" fill="#5d4037" ${S}/>
    <circle cx="88" cy="58" r="4" fill="#fff" ${S}/>
    <circle cx="112" cy="58" r="4" fill="#fff" ${S}/>
    <circle cx="90" cy="58" r="2.5" fill="#2c1810"/>
    <circle cx="110" cy="58" r="2.5" fill="#2c1810"/>
    <path d="M88,68 Q100,76 112,68" fill="none" ${S1}/>
    <path d="M95,50 L100,44 L105,50" fill="none" ${S1}/>
    <path d="M78,75 Q70,88 72,105 L75,195 Q76,210 82,215 L118,215 Q124,210 125,195 L128,105 Q130,88 122,75" fill="#e74c3c" ${S}/>
    <path d="M82,100 Q100,110 118,100" fill="none" ${S1}/>
    <path d="M80,130 Q100,140 120,130" fill="none" ${S1}/>
    <path d="M82,160 Q100,170 118,160" fill="none" ${S1}/>
    <rect x="92" y="180" width="16" height="35" fill="#5d4037" ${S}/>
    <line x1="96" y1="215" x2="92" y2="248" ${S1}/>
    <line x1="104" y1="215" x2="108" y2="248" ${S1}/>
    <path d="M88,248 L92,252 L96,246" fill="none" ${S1}/>
    <path d="M104,246 L108,252 L112,248" fill="none" ${S1}/>
    <path d="M100,50 L100,40" fill="none" ${S1}/>
    <circle cx="100" cy="50" r="3" fill="#f39c12"/>
  `,

  corazon: `
    <defs>
      <linearGradient id="heartGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#e74c3c"/>
        <stop offset="60%" stop-color="#c0392b"/>
        <stop offset="100%" stop-color="#922b21"/>
      </linearGradient>
      <radialGradient id="heartShine" cx="0.35" cy="0.35" r="0.5">
        <stop offset="0%" stop-color="#fff" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <!-- Main heart shape -->
    <path d="M100,240 C25,170 -5,100 30,55 C50,28 80,28 100,50 C120,28 150,28 170,55 C205,100 175,170 100,240Z" fill="url(#heartGrad)" stroke="#922b21" stroke-width="3"/>
    <!-- Inner highlight -->
    <path d="M100,230 C35,165 12,100 40,60 C55,38 78,38 100,55 C122,38 145,38 160,60 C188,100 165,165 100,230Z" fill="url(#heartShine)"/>
    <!-- Shine reflection -->
    <ellipse cx="70" cy="85" rx="20" ry="25" fill="#fff" opacity="0.2" transform="rotate(-20,70,85)"/>
    <!-- Veins / detail lines -->
    <path d="M100,100 L100,180" fill="none" stroke="#922b21" stroke-width="2" opacity="0.6"/>
    <path d="M100,130 L75,155" fill="none" stroke="#922b21" stroke-width="1.5" opacity="0.5"/>
    <path d="M100,130 L125,155" fill="none" stroke="#922b21" stroke-width="1.5" opacity="0.5"/>
    <path d="M100,155 L80,175" fill="none" stroke="#922b21" stroke-width="1.5" opacity="0.5"/>
    <path d="M100,155 L120,175" fill="none" stroke="#922b21" stroke-width="1.5" opacity="0.5"/>
    <!-- Decorative lines at bottom -->
    <path d="M85,195 Q100,205 115,195" fill="none" stroke="#922b21" stroke-width="1.5" opacity="0.4"/>
    <path d="M90,210 Q100,218 110,210" fill="none" stroke="#922b21" stroke-width="1.5" opacity="0.4"/>
  `,

  sandia: `
    <path d="M40,180 Q40,100 100,100 Q160,100 160,180 Q160,260 100,260 Q40,260 40,180Z" fill="#27ae60" ${S2}/>
    <path d="M40,180 Q40,100 100,100 Q160,100 160,180 Q160,260 100,260 Q40,260 40,180Z" fill="#2ecc71" opacity="0.5"/>
    <path d="M46,190 Q100,175 154,190" fill="none" ${S1}/>
    <path d="M60,210 Q100,195 140,210" fill="none" ${S1}/>
    <path d="M75,230 Q100,218 125,230" fill="none" ${S1}/>
    <path d="M88,248 Q100,240 112,248" fill="none" ${S1}/>
    <path d="M100,100 L100,88" fill="none" ${S1}/>
    <path d="M92,90 Q100,84 108,90" fill="none" ${S1}/>
    <ellipse cx="70" cy="140" rx="12" ry="16" fill="#c0392b" ${S1}/>
    <ellipse cx="130" cy="150" rx="10" ry="14" fill="#c0392b" ${S1}/>
    <ellipse cx="100" cy="130" rx="8" ry="12" fill="#c0392b" ${S1}/>
    <ellipse cx="85" cy="165" rx="6" ry="8" fill="#c0392b" ${S1}/>
    <ellipse cx="115" cy="170" rx="7" ry="9" fill="#c0392b" ${S1}/>
    <circle cx="70" cy="140" r="2" fill="#2c1810"/>
    <circle cx="130" cy="150" r="2" fill="#2c1810"/>
    <circle cx="100" cy="130" r="1.5" fill="#2c1810"/>
  `,

  tambor: `
    <ellipse cx="100" cy="85" rx="55" ry="15" fill="#f5e6ca" ${S2}/>
    <rect x="45" y="85" width="110" height="90" fill="#c0392b" ${S2}/>
    <ellipse cx="100" cy="175" rx="55" ry="15" fill="#f5e6ca" ${S2}/>
    <line x1="45" y1="85" x2="45" y2="175" fill="none" ${S1}/>
    <line x1="155" y1="85" x2="155" y2="175" fill="none" ${S1}/>
    <line x1="65" y1="85" x2="60" y2="175" fill="none" ${S1}/>
    <line x1="90" y1="85" x2="90" y2="175" fill="none" ${S1}/>
    <line x1="110" y1="85" x2="110" y2="175" fill="none" ${S1}/>
    <line x1="135" y1="85" x2="140" y2="175" fill="none" ${S1}/>
    <path d="M60,110 Q100,120 140,110" fill="none" ${S1}/>
    <path d="M58,135 Q100,145 142,135" fill="none" ${S1}/>
    <path d="M60,160 Q100,170 140,160" fill="none" ${S1}/>
    <path d="M100,65 L100,50" fill="none" ${S1}/>
    <path d="M90,52 Q100,45 110,52" fill="none" ${S1}/>
    <path d="M95,185 L95,200" fill="none" ${S1}/>
    <path d="M100,185 L100,205 L105,185" fill="none" ${S1}/>
  `,

  camaron: `
    <path d="M100,70 Q70,65 50,80 Q35,95 40,110 Q45,120 55,118 Q65,115 70,105" fill="#c0392b" ${S2}/>
    <path d="M70,105 Q80,100 90,105 Q100,110 110,108 Q120,105 130,108 Q140,112 145,120 Q150,130 145,140 L140,150" fill="#e74c3c" ${S2}/>
    <path d="M140,150 Q130,155 120,152 Q110,148 100,150 Q90,152 80,148 Q70,145 65,148 L60,155" fill="#e74c3c" ${S2}/>
    <path d="M100,70 Q105,62 110,60" fill="none" ${S1}/>
    <circle cx="55" cy="108" r="3" fill="#2c1810"/>
    <path d="M48,95 Q42,90 38,85" fill="none" ${S1}/>
    <path d="M45,100 Q38,98 32,95" fill="none" ${S1}/>
    <path d="M42,108 Q35,110 30,112" fill="none" ${S1}/>
    <path d="M100,108 L100,115" fill="none" ${S1}/>
    <path d="M100,108 Q95,112 92,118" fill="none" ${S1}/>
    <path d="M100,108 Q105,112 108,118" fill="none" ${S1}/>
    <path d="M60,155 Q55,165 58,175" fill="none" ${S1}/>
    <path d="M65,152 Q62,162 65,172" fill="none" ${S1}/>
    <path d="M140,150 Q148,158 145,168" fill="none" ${S1}/>
    <path d="M135,152 Q142,160 140,170" fill="none" ${S1}/>
    <path d="M90,105 Q85,98 80,95 Q78,92 82,90" fill="none" ${S1}/>
    <path d="M110,105 Q115,98 120,95 Q122,92 118,90" fill="none" ${S1}/>
  `,

  jaras: `
    <line x1="100" y1="35" x2="100" y2="260" fill="none" ${S2}/>
    <line x1="75" y1="45" x2="85" y2="260" fill="none" ${S1}/>
    <line x1="125" y1="45" x2="115" y2="260" fill="none" ${S1}/>
    <line x1="60" y1="60" x2="75" y2="260" fill="none" ${S1}/>
    <line x1="140" y1="60" x2="125" y2="260" fill="none" ${S1}/>
    <line x1="50" y1="80" x2="68" y2="260" fill="none" ${S1}/>
    <line x1="150" y1="80" x2="132" y2="260" fill="none" ${S1}/>
    <path d="M95,35 L100,28 L105,35Z" fill="#c0392b" ${S1}/>
    <path d="M70,45 L75,36 L80,45Z" fill="#c0392b" ${S1}/>
    <path d="M120,45 L125,36 L130,45Z" fill="#c0392b" ${S1}/>
    <path d="M55,60 L60,50 L65,60Z" fill="#c0392b" ${S1}/>
    <path d="M135,60 L140,50 L145,60Z" fill="#c0392b" ${S1}/>
    <path d="M45,80 L50,70 L55,80Z" fill="#c0392b" ${S1}/>
    <path d="M145,80 L150,70 L155,80Z" fill="#c0392b" ${S1}/>
    <path d="M92,48 L100,40 L108,48" fill="none" ${S1}/>
    <path d="M78,65 Q100,75 122,65" fill="none" ${S1}/>
    <path d="M68,90 Q100,100 132,90" fill="none" ${S1}/>
    <path d="M65,120 Q100,130 135,120" fill="none" ${S1}/>
    <path d="M68,150 Q100,160 132,150" fill="none" ${S1}/>
    <path d="M72,180 Q100,190 128,180" fill="none" ${S1}/>
    <path d="M78,210 Q100,220 122,210" fill="none" ${S1}/>
  `,

  musico: `
    <circle cx="100" cy="58" r="20" fill="#f5cba7" ${S}/>
    <circle cx="90" cy="56" r="3.5" fill="#2c1810"/>
    <circle cx="110" cy="56" r="3.5" fill="#2c1810"/>
    <circle cx="91" cy="54" r="1.5" fill="#fff"/>
    <circle cx="109" cy="54" r="1.5" fill="#fff"/>
    <path d="M91,65 Q100,72 109,65" fill="none" ${S1}/>
    <path d="M78,72 Q72,85 74,100 L76,185 Q77,200 82,205 L118,205 Q123,200 124,185 L126,100 Q128,85 122,72" fill="#8e44ad" ${S}/>
    <path d="M84,108 Q100,118 116,108" fill="none" ${S1}/>
    <rect x="92" y="180" width="16" height="25" fill="#f5cba7" ${S}/>
    <line x1="96" y1="205" x2="92" y2="242" ${S1}/>
    <line x1="104" y1="205" x2="108" y2="242" ${S1}/>
    <path d="M88,242 L92,247 L96,240" fill="none" ${S1}/>
    <path d="M104,240 L108,247 L112,242" fill="none" ${S1}/>
    <path d="M100,50 L100,42" fill="none" ${S1}/>
    <ellipse cx="130" cy="130" rx="18" ry="30" fill="#8b4513" ${S2}/>
    <line x1="128" y1="105" x2="120" y2="88" ${S1}/>
    <line x1="132" y1="105" x2="135" y2="88" ${S1}/>
    <line x1="128" y1="160" x2="120" y2="175" ${S1}/>
    <line x1="132" y1="160" x2="135" y2="175" ${S1}/>
    <circle cx="130" cy="130" r="8" fill="#c0392b" ${S1}/>
  `,

  arana: `
    <ellipse cx="100" cy="100" rx="25" ry="20" fill="#2c1810" ${S}/>
    <circle cx="88" cy="95" r="5" fill="#c0392b" ${S1}/>
    <circle cx="112" cy="95" r="5" fill="#c0392b" ${S1}/>
    <circle cx="90" cy="95" r="2" fill="#2c1810"/>
    <circle cx="110" cy="95" r="2" fill="#2c1810"/>
    <path d="M100,118 L100,145" fill="none" ${S1}/>
    <path d="M95,145 Q100,150 105,145" fill="none" ${S1}/>
    <circle cx="100" cy="148" r="5" fill="#2c1810" ${S1}/>
    <path d="M75,105 L55,120" fill="none" ${S1}/>
    <path d="M125,105 L145,120" fill="none" ${S1}/>
    <path d="M70,95 L45,95" fill="none" ${S1}/>
    <path d="M130,95 L155,95" fill="none" ${S1}/>
    <path d="M75,85 L55,70" fill="none" ${S1}/>
    <path d="M125,85 L145,70" fill="none" ${S1}/>
    <path d="M60,120 L55,125 L52,120" fill="none" ${S1}/>
    <path d="M140,120 L145,125 L148,120" fill="none" ${S1}/>
    <path d="M50,95 L42,98 L45,92" fill="none" ${S1}/>
    <path d="M150,95 L158,98 L155,92" fill="none" ${S1}/>
    <path d="M60,70 L55,65 L52,70" fill="none" ${S1}/>
    <path d="M140,70 L145,65 L148,70" fill="none" ${S1}/>
    <path d="M75,105 L75,130 L80,125" fill="none" ${S1}/>
    <path d="M125,105 L125,130 L120,125" fill="none" ${S1}/>
    <path d="M75,130 Q100,135 125,130" fill="none" ${S1}/>
  `,

  soldado: `
    <rect x="82" y="38" width="36" height="8" rx="2" fill="#27ae60" ${S1}/>
    <rect x="85" y="38" width="30" height="20" fill="#2ecc71" ${S1}/>
    <circle cx="100" cy="58" r="18" fill="#f5cba7" ${S}/>
    <circle cx="92" cy="56" r="3.5" fill="#2c1810"/>
    <circle cx="108" cy="56" r="3.5" fill="#2c1810"/>
    <circle cx="93" cy="54" r="1.5" fill="#fff"/>
    <circle cx="107" cy="54" r="1.5" fill="#fff"/>
    <path d="M93,64 Q100,70 107,64" fill="none" ${S1}/>
    <path d="M78,72 Q72,85 74,100 L76,185 Q77,200 82,205 L118,205 Q123,200 124,185 L126,100 Q128,85 122,72" fill="#2ecc71" ${S}/>
    <rect x="86" y="75" width="28" height="20" rx="2" fill="#27ae60" ${S1}/>
    <path d="M86,78 L92,85 L108,85 L114,78" fill="none" ${S1}/>
    <path d="M84,108 Q100,118 116,108" fill="none" ${S1}/>
    <rect x="92" y="180" width="16" height="25" fill="#f5cba7" ${S}/>
    <line x1="96" y1="205" x2="92" y2="242" ${S1}/>
    <line x1="104" y1="205" x2="108" y2="242" ${S1}/>
    <path d="M88,242 L92,247 L96,240" fill="none" ${S1}/>
    <path d="M104,240 L108,247 L112,242" fill="none" ${S1}/>
    <path d="M100,50 L100,40" fill="none" ${S1}/>
    <line x1="118" y1="100" x2="140" y2="80" ${S1}/>
    <line x1="135" y1="75" x2="145" y2="70" ${S1}/>
    <line x1="140" y1="80" x2="148" y2="85" ${S1}/>
    <circle cx="140" cy="80" r="3" fill="#8b4513"/>
    <rect x="80" y="118" width="6" height="50" fill="#8b4513" ${S1}/>
  `,

  estrella: `
    <polygon points="100,50 112,85 150,88 120,112 128,150 100,128 72,150 80,112 50,88 88,85" fill="#f39c12" ${S2}/>
    <polygon points="100,60 108,85 135,87 113,105 119,130 100,115 81,130 87,105 65,87 92,85" fill="#f1c40f" ${S1}/>
    <circle cx="100" cy="100" r="8" fill="#f39c12" ${S1}/>
    <circle cx="100" cy="100" r="3" fill="#2c1810"/>
    <path d="M100,50 L100,42" fill="none" ${S1}/>
    <path d="M94,44 Q100,38 106,44" fill="none" ${S1}/>
    <path d="M50,88 L42,86" fill="none" ${S1}/>
    <path d="M44,82 L42,90 L48,88" fill="none" ${S1}/>
    <path d="M150,88 L158,86" fill="none" ${S1}/>
    <path d="M152,82 L158,90 L152,88" fill="none" ${S1}/>
    <path d="M100,150 L100,158" fill="none" ${S1}/>
    <path d="M94,154 L100,160 L106,154" fill="none" ${S1}/>
  `,

  cazo: `
    <ellipse cx="100" cy="85" rx="60" ry="15" fill="#8b4513" ${S2}/>
    <path d="M40,85 L45,160 Q48,175 55,180 L145,180 Q152,175 155,160 L160,85" fill="#a0522d" ${S2}/>
    <ellipse cx="100" cy="180" rx="47" ry="10" fill="#8b4513" ${S}/>
    <line x1="100" y1="85" x2="100" y2="175" fill="none" ${S1}/>
    <line x1="75" y1="85" x2="78" y2="175" fill="none" ${S1}/>
    <line x1="125" y1="85" x2="122" y2="175" fill="none" ${S1}/>
    <path d="M55,105 Q100,115 145,105" fill="none" ${S1}/>
    <path d="M52,130 Q100,140 148,130" fill="none" ${S1}/>
    <path d="M55,155 Q100,165 145,155" fill="none" ${S1}/>
    <path d="M155,80 L170,65 Q175,60 172,55" fill="none" ${S2}/>
    <path d="M170,65 L180,70" fill="none" ${S1}/>
    <rect x="85" y="180" width="30" height="20" rx="3" fill="#8b4513" ${S1}/>
    <path d="M90,200 L88,210 L92,205Z" fill="none" ${S1}/>
    <path d="M110,200 L112,210 L108,205Z" fill="none" ${S1}/>
    <path d="M100,200 L100,215" fill="none" ${S1}/>
  `,

  mundo: `
    <circle cx="100" cy="125" r="65" fill="#3498db" ${S2}/>
    <path d="M40,95 Q70,85 100,85 Q130,85 160,95" fill="none" ${S1}/>
    <path d="M35,125 Q100,115 165,125" fill="none" ${S1}/>
    <path d="M40,155 Q70,165 100,165 Q130,165 160,155" fill="none" ${S1}/>
    <path d="M100,60 Q85,80 78,100 Q72,120 70,140 Q68,160 72,180" fill="none" ${S1}/>
    <path d="M100,60 Q115,80 122,100 Q128,120 130,140 Q132,160 128,180" fill="none" ${S1}/>
    <path d="M60,108 Q80,100 100,105 Q120,100 140,108" fill="none" ${S1}/>
    <path d="M62,142 Q80,150 100,145 Q120,150 138,142" fill="none" ${S1}/>
    <ellipse cx="100" cy="125" rx="20" ry="12" fill="#27ae60" ${S1}/>
    <path d="M100,60 L100,50" fill="none" ${S1}/>
    <path d="M94,52 Q100,46 106,52" fill="none" ${S1}/>
    <circle cx="35" cy="125" r="3" fill="#f39c12"/>
    <circle cx="165" cy="125" r="3" fill="#f39c12"/>
    <path d="M72,185 L68,192 L75,188Z" fill="none" ${S1}/>
    <path d="M128,185 L132,192 L125,188Z" fill="none" ${S1}/>
    <path d="M75,70 Q65,60 55,72" fill="none" ${S1}/>
    <path d="M125,70 Q135,60 145,72" fill="none" ${S1}/>
  `,

  apache: `
    <circle cx="100" cy="60" r="20" fill="#d4a574" ${S}/>
    <path d="M62,55 Q60,48 65,45 L135,45 Q140,48 138,55" fill="#c0392b" ${S}/>
    <circle cx="88" cy="58" r="3.5" fill="#2c1810"/>
    <circle cx="112" cy="58" r="3.5" fill="#2c1810"/>
    <circle cx="89" cy="56" r="1.5" fill="#fff"/>
    <circle cx="111" cy="56" r="1.5" fill="#fff"/>
    <path d="M90,66 Q100,72 110,66" fill="none" ${S1}/>
    <path d="M78,75 Q72,88 74,105 L76,185 Q77,200 82,205 L118,205 Q123,200 124,185 L126,105 Q128,88 122,75" fill="#f39c12" ${S2}/>
    <path d="M82,100 Q100,110 118,100" fill="none" ${S1}/>
    <path d="M80,130 Q100,140 120,130" fill="none" ${S1}/>
    <rect x="92" y="180" width="16" height="25" fill="#d4a574" ${S}/>
    <line x1="96" y1="205" x2="92" y2="242" ${S1}/>
    <line x1="104" y1="205" x2="108" y2="242" ${S1}/>
    <path d="M88,242 L92,247 L96,240" fill="none" ${S1}/>
    <path d="M104,240 L108,247 L112,242" fill="none" ${S1}/>
    <path d="M100,50 L100,40" fill="none" ${S1}/>
    <path d="M60,50 Q50,58 48,65 Q46,72 52,75 L55,45Z" fill="#f1c40f" ${S1}/>
    <path d="M140,50 Q150,58 152,65 Q154,72 148,75 L145,45Z" fill="#f1c40f" ${S1}/>
    <path d="M80,45 Q90,38 100,35 Q110,38 120,45" fill="none" ${S1}/>
    <circle cx="100" cy="42" r="3" fill="#f39c12"/>
  `,

  nopal: `
    <defs>
      <linearGradient id="nopalGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#2ecc71"/>
        <stop offset="100%" stop-color="#1e8449"/>
      </linearGradient>
      <linearGradient id="nopalDark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#27ae60"/>
        <stop offset="100%" stop-color="#196f3d"/>
      </linearGradient>
    </defs>
    <!-- Pot / base -->
    <path d="M55,220 L60,250 Q100,265 140,250 L145,220Z" fill="#8b4513" stroke="#5d3a1a" stroke-width="2.5"/>
    <path d="M55,220 L145,220" fill="none" stroke="#5d3a1a" stroke-width="2"/>
    <ellipse cx="100" cy="220" rx="45" ry="6" fill="#a0522d" stroke="#5d3a1a" stroke-width="1.5"/>
    <!-- Main pad (center) -->
    <ellipse cx="100" cy="140" rx="32" ry="60" fill="url(#nopalGrad)" stroke="#196f3d" stroke-width="2.5"/>
    <!-- Pad details - ridges -->
    <path d="M100,85 L100,195" fill="none" stroke="#1e8449" stroke-width="1.5" opacity="0.5"/>
    <path d="M88,100 Q100,95 112,100" fill="none" stroke="#1e8449" stroke-width="1" opacity="0.4"/>
    <path d="M85,120 Q100,115 115,120" fill="none" stroke="#1e8449" stroke-width="1" opacity="0.4"/>
    <path d="M83,140 Q100,135 117,140" fill="none" stroke="#1e8449" stroke-width="1" opacity="0.4"/>
    <path d="M85,160 Q100,155 115,160" fill="none" stroke="#1e8449" stroke-width="1" opacity="0.4"/>
    <path d="M88,180 Q100,175 112,180" fill="none" stroke="#1e8449" stroke-width="1" opacity="0.4"/>
    <!-- Left pad -->
    <ellipse cx="65" cy="160" rx="22" ry="38" fill="url(#nopalDark)" stroke="#196f3d" stroke-width="2.5" transform="rotate(-10,65,160)"/>
    <path d="M65,125 L65,195" fill="none" stroke="#196f3d" stroke-width="1.5" opacity="0.4"/>
    <!-- Right pad -->
    <ellipse cx="135" cy="150" rx="20" ry="35" fill="url(#nopalGrad)" stroke="#196f3d" stroke-width="2.5" transform="rotate(10,135,150)"/>
    <path d="M135,118 L135,182" fill="none" stroke="#1e8449" stroke-width="1.5" opacity="0.4"/>
    <!-- Small top pads -->
    <ellipse cx="88" cy="88" rx="14" ry="20" fill="url(#nopalGrad)" stroke="#196f3d" stroke-width="2" transform="rotate(-5,88,88)"/>
    <ellipse cx="115" cy="82" rx="12" ry="16" fill="url(#nopalDark)" stroke="#196f3d" stroke-width="2" transform="rotate(5,115,82)"/>
    <!-- Spines / thorns -->
    <line x1="78" y1="130" x2="72" y2="125" stroke="#f1c40f" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="122" y1="130" x2="128" y2="125" stroke="#f1c40f" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="80" y1="155" x2="74" y2="152" stroke="#f1c40f" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="120" y1="150" x2="126" y2="147" stroke="#f1c40f" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="95" y1="100" x2="90" y2="95" stroke="#f1c40f" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="105" y1="95" x2="110" y2="90" stroke="#f1c40f" stroke-width="1.5" stroke-linecap="round"/>
    <!-- Tuna fruits (prickly pear) -->
    <ellipse cx="100" cy="72" rx="8" ry="10" fill="#c0392b" stroke="#922b21" stroke-width="1.5"/>
    <ellipse cx="80" cy="80" rx="6" ry="8" fill="#e74c3c" stroke="#922b21" stroke-width="1.5"/>
    <ellipse cx="120" cy="75" rx="7" ry="9" fill="#c0392b" stroke="#922b21" stroke-width="1.5"/>
    <!-- Tuna highlights -->
    <ellipse cx="98" cy="69" rx="2" ry="3" fill="#fff" opacity="0.3"/>
    <ellipse cx="78" cy="77" rx="1.5" ry="2.5" fill="#fff" opacity="0.3"/>
    <ellipse cx="118" cy="72" rx="2" ry="3" fill="#fff" opacity="0.3"/>
    <!-- Tuna spines (tiny dots) -->
    <circle cx="95" cy="74" r="0.8" fill="#f1c40f"/>
    <circle cx="105" cy="76" r="0.8" fill="#f1c40f"/>
    <circle cx="100" cy="68" r="0.8" fill="#f1c40f"/>
    <circle cx="76" cy="82" r="0.8" fill="#f1c40f"/>
    <circle cx="84" cy="78" r="0.8" fill="#f1c40f"/>
    <circle cx="116" cy="77" r="0.8" fill="#f1c40f"/>
    <circle cx="124" cy="73" r="0.8" fill="#f1c40f"/>
  `,

  alacran: `
    <ellipse cx="100" cy="160" rx="35" ry="18" fill="#8b4513" ${S2}/>
    <circle cx="68" cy="158" r="3" fill="#2c1810"/>
    <circle cx="58" cy="155" r="3" fill="#2c1810"/>
    <circle cx="63" cy="152" r="1.5" fill="#fff"/>
    <path d="M50,155 L42,158 L44,150Z" fill="#c0392b" ${S1}/>
    <path d="M48,148 L40,145 L44,152Z" fill="#c0392b" ${S1}/>
    <line x1="75" y1="148" x2="72" y2="138" fill="none" ${S1}/>
    <line x1="82" y1="145" x2="80" y2="135" fill="none" ${S1}/>
    <line x1="90" y1="143" x2="88" y2="133" fill="none" ${S1}/>
    <line x1="110" y1="143" x2="112" y2="133" fill="none" ${S1}/>
    <line x1="118" y1="145" x2="120" y2="135" fill="none" ${S1}/>
    <line x1="125" y1="148" x2="128" y2="138" fill="none" ${S1}/>
    <path d="M135,160 Q155,145 162,120 Q168,100 165,90" fill="none" ${S2}/>
    <circle cx="165" cy="90" r="5" fill="#c0392b" ${S1}/>
    <circle cx="165" cy="90" r="2" fill="#2c1810"/>
    <path d="M162,85 L158,78" fill="none" ${S1}/>
    <path d="M168,85 L172,78" fill="none" ${S1}/>
    <path d="M85,175 L80,185 L88,180Z" fill="none" ${S1}/>
    <path d="M95,178 L92,188 L100,182Z" fill="none" ${S1}/>
    <path d="M105,178 L108,188 L100,182Z" fill="none" ${S1}/>
    <path d="M115,175 L120,185 L112,180Z" fill="none" ${S1}/>
  `,

  rosa: `
    <path d="M100,90 Q75,75 65,95 Q55,115 75,125 Q65,145 85,150 Q75,170 100,165 Q95,185 115,170 Q125,190 130,165 Q150,170 140,150 Q160,145 148,125 Q168,115 155,95 Q145,75 120,90Z" fill="#c0392b" ${S2}/>
    <path d="M100,100 Q80,88 75,105 Q70,118 85,122 Q78,138 92,140 Q85,155 100,148 Q98,165 110,152 Q118,168 122,148 Q138,155 130,140 Q148,138 140,122 Q155,118 148,105 Q143,88 122,100Z" fill="#e74c3c" ${S1}/>
    <path d="M100,110 Q88,102 85,115 Q82,125 92,125 Q88,135 98,132 Q95,148 105,138 Q108,150 112,132 Q122,135 118,125 Q128,125 125,115 Q122,102 108,110Z" fill="#c0392b" ${S1}/>
    <circle cx="100" cy="125" r="6" fill="#f39c12" ${S1}/>
    <circle cx="100" cy="125" r="2.5" fill="#8b4513"/>
    <path d="M100,165 L100,195" fill="none" ${S1}/>
    <path d="M90,170 L100,185 L110,170" fill="none" ${S1}/>
    <path d="M92,195 Q100,200 108,195" fill="none" ${S1}/>
    <path d="M85,185 L78,175 L82,182" fill="none" ${S1}/>
    <path d="M115,185 L122,175 L118,182" fill="none" ${S1}/>
    <path d="M78,175 Q72,165 70,155" fill="none" ${S1}/>
    <path d="M122,175 Q128,165 130,155" fill="none" ${S1}/>
    <path d="M100,85 L100,78" fill="none" ${S1}/>
    <path d="M95,78 L100,73 L105,78" fill="none" ${S1}/>
  `,

  calavera: `
    <ellipse cx="100" cy="100" rx="35" ry="42" fill="#ecf0f1" ${S2}/>
    <circle cx="82" cy="90" r="8" fill="#2c1810"/>
    <circle cx="118" cy="90" r="8" fill="#2c1810"/>
    <circle cx="85" cy="88" r="3" fill="#fff"/>
    <circle cx="115" cy="88" r="3" fill="#fff"/>
    <path d="M100,90 L100,98" fill="none" ${S1}/>
    <path d="M94,98 L106,98" fill="none" ${S1}/>
    <path d="M100,100 L104,108" fill="none" ${S1}/>
    <path d="M100,100 L96,108" fill="none" ${S1}/>
    <ellipse cx="100" cy="125" rx="12" ry="8" fill="#2c1810"/>
    <path d="M82,125 Q100,135 118,125" fill="none" ${S1}/>
    <path d="M70,80 Q68,65 75,58" fill="none" ${S1}/>
    <path d="M130,80 Q132,65 125,58" fill="none" ${S1}/>
    <path d="M70,100 Q65,105 62,112 Q58,122 60,130 Q62,135 68,132 Q72,128 70,118" fill="none" ${S1}/>
    <path d="M130,100 Q135,105 138,112 Q142,122 140,130 Q138,135 132,132 Q128,128 130,118" fill="none" ${S1}/>
    <path d="M75,58 Q90,48 100,45 Q110,48 125,58" fill="none" ${S1}/>
    <circle cx="100" cy="65" r="3" fill="#f39c12"/>
    <path d="M100,45 L100,38" fill="none" ${S1}/>
    <path d="M95,40 Q100,35 105,40" fill="none" ${S1}/>
    <path d="M100,148 L100,165" fill="none" ${S1}/>
    <path d="M90,155 L110,155" fill="none" ${S1}/>
  `,

  campana: `
    <path d="M70,80 Q65,65 70,55 Q75,45 85,42 L88,30 Q88,22 100,18 Q112,22 112,30 L115,42 Q125,45 130,55 Q135,65 130,80 L140,120 Q145,140 145,155 Q145,170 140,180 L135,188 L65,188 L60,180 Q55,170 55,155 Q55,140 60,120Z" fill="#f39c12" ${S2}/>
    <rect x="65" y="185" width="70" height="6" rx="2" fill="#c0392b" ${S1}/>
    <rect x="75" y="188" width="50" height="4" fill="#f39c12" ${S1}/>
    <circle cx="100" cy="188" r="8" fill="#f39c12" ${S}/>
    <circle cx="100" cy="188" r="4" fill="#c0392b" ${S1}/>
    <circle cx="100" cy="188" r="2" fill="#2c1810"/>
    <path d="M88,42 Q100,46 112,42" fill="none" ${S1}/>
    <path d="M75,100 Q100,110 125,100" fill="none" ${S1}/>
    <path d="M70,130 Q100,140 130,130" fill="none" ${S1}/>
    <path d="M95,25 L100,22 L105,25" fill="none" ${S1}/>
    <path d="M100,22 L100,15" fill="none" ${S1}/>
    <path d="M96,16 Q100,12 104,16" fill="none" ${S1}/>
  `,

  cantarito: `
    <ellipse cx="100" cy="210" rx="40" ry="12" fill="#a0522d" ${S1}/>
    <path d="M60,210 L62,180 Q64,160 68,145 L70,130 Q72,118 78,112 L80,100 Q82,90 88,85 L90,75 Q92,65 100,60 Q108,65 110,75 L112,85 Q118,90 120,100 L122,112 Q128,118 130,130 L132,145 Q136,160 138,180 L140,210" fill="#c4956a" ${S2}/>
    <path d="M90,75 Q92,62 100,55 Q108,62 110,75" fill="#a0522d" ${S2}/>
    <path d="M68,150 Q100,160 132,150" fill="none" ${S1}/>
    <path d="M72,170 Q100,178 128,170" fill="none" ${S1}/>
    <path d="M78,190 Q100,198 122,190" fill="none" ${S1}/>
    <path d="M96,60 L95,55 Q98,50 102,50 Q105,50 105,55 L104,60" fill="none" ${S1}/>
    <path d="M75,125 Q100,132 125,125" fill="none" ${S1}/>
    <ellipse cx="60" cy="210" rx="3" ry="5" fill="#8b4513"/>
    <ellipse cx="140" cy="210" rx="3" ry="5" fill="#8b4513"/>
    <path d="M100,60 L100,55" fill="none" ${S1}/>
  `,

  venado: `
    <path d="M80,130 Q70,115 72,100 Q74,88 82,85 Q88,82 95,88" fill="none" ${S1}/>
    <path d="M120,130 Q130,115 128,100 Q126,88 118,85 Q112,82 105,88" fill="none" ${S1}/>
    <path d="M78,85 L70,70 L75,60 L72,50" fill="none" ${S1}/>
    <path d="M122,85 L130,70 L125,60 L128,50" fill="none" ${S1}/>
    <ellipse cx="100" cy="145" rx="35" ry="25" fill="#a0522d" ${S2}/>
    <path d="M65,145 L60,150 Q55,148 58,142" fill="none" ${S1}/>
    <path d="M135,145 L140,150 Q145,148 142,142" fill="none" ${S1}/>
    <path d="M82,115 Q100,108 118,115" fill="none" ${S1}/>
    <circle cx="85" cy="132" r="4" fill="#2c1810"/>
    <circle cx="115" cy="132" r="4" fill="#2c1810"/>
    <circle cx="86" cy="130" r="1.5" fill="#fff"/>
    <circle cx="114" cy="130" r="1.5" fill="#fff"/>
    <ellipse cx="100" cy="140" rx="6" ry="4" fill="#2c1810"/>
    <path d="M92,148 Q100,155 108,148" fill="none" ${S1}/>
    <path d="M100,155 L100,170" fill="none" ${S1}/>
    <line x1="90" y1="170" x2="85" y2="200" ${S1}/>
    <line x1="110" y1="170" x2="115" y2="200" ${S1}/>
    <line x1="95" y1="170" x2="92" y2="200" ${S1}/>
    <line x1="105" y1="170" x2="108" y2="200" ${S1}/>
    <path d="M80,200 L85,205 L90,198" fill="none" ${S1}/>
    <path d="M100,200 L102,208 L104,200" fill="none" ${S1}/>
    <path d="M110,200 L108,205 L112,198" fill="none" ${S1}/>
  `,

  sol: `
    <defs>
      <radialGradient id="sunGrad" cx="0.4" cy="0.4" r="0.6">
        <stop offset="0%" stop-color="#f9e547"/>
        <stop offset="50%" stop-color="#f1c40f"/>
        <stop offset="100%" stop-color="#d4a017"/>
      </radialGradient>
      <linearGradient id="rayGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#f1c40f"/>
        <stop offset="100%" stop-color="#d4a017"/>
      </linearGradient>
    </defs>
    <!-- Outer rays (large) -->
    <polygon points="100,40 108,70 92,70" fill="url(#rayGrad)" stroke="#d4a017" stroke-width="1.5"/>
    <polygon points="100,190 108,160 92,160" fill="url(#rayGrad)" stroke="#d4a017" stroke-width="1.5"/>
    <polygon points="40,115 70,107 70,123" fill="url(#rayGrad)" stroke="#d4a017" stroke-width="1.5"/>
    <polygon points="160,115 130,107 130,123" fill="url(#rayGrad)" stroke="#d4a017" stroke-width="1.5"/>
    <polygon points="58,73 78,82 72,68" fill="url(#rayGrad)" stroke="#d4a017" stroke-width="1.5"/>
    <polygon points="142,73 122,82 128,68" fill="url(#rayGrad)" stroke="#d4a017" stroke-width="1.5"/>
    <polygon points="58,157 78,148 72,162" fill="url(#rayGrad)" stroke="#d4a017" stroke-width="1.5"/>
    <polygon points="142,157 122,148 128,162" fill="url(#rayGrad)" stroke="#d4a017" stroke-width="1.5"/>
    <!-- Small rays between -->
    <polygon points="72,52 82,72 68,72" fill="#f39c12" stroke="#d4a017" stroke-width="1" opacity="0.7"/>
    <polygon points="128,52 118,72 132,72" fill="#f39c12" stroke="#d4a017" stroke-width="1" opacity="0.7"/>
    <polygon points="50,90 72,88 68,76" fill="#f39c12" stroke="#d4a017" stroke-width="1" opacity="0.7"/>
    <polygon points="150,90 128,88 132,76" fill="#f39c12" stroke="#d4a017" stroke-width="1" opacity="0.7"/>
    <polygon points="50,140 72,142 68,154" fill="#f39c12" stroke="#d4a017" stroke-width="1" opacity="0.7"/>
    <polygon points="150,140 128,142 132,154" fill="#f39c12" stroke="#d4a017" stroke-width="1" opacity="0.7"/>
    <polygon points="72,178 82,158 68,158" fill="#f39c12" stroke="#d4a017" stroke-width="1" opacity="0.7"/>
    <polygon points="128,178 118,158 132,158" fill="#f39c12" stroke="#d4a017" stroke-width="1" opacity="0.7"/>
    <!-- Sun face circle -->
    <circle cx="100" cy="115" r="40" fill="url(#sunGrad)" stroke="#d4a017" stroke-width="3"/>
    <!-- Inner ring -->
    <circle cx="100" cy="115" r="34" fill="none" stroke="#e67e22" stroke-width="1.5" opacity="0.5"/>
    <!-- Eyes -->
    <ellipse cx="87" cy="108" rx="5" ry="6" fill="#8b4513" stroke="#5d3a1a" stroke-width="1"/>
    <ellipse cx="113" cy="108" rx="5" ry="6" fill="#8b4513" stroke="#5d3a1a" stroke-width="1"/>
    <circle cx="88" cy="106" r="2" fill="#fff"/>
    <circle cx="114" cy="106" r="2" fill="#fff"/>
    <!-- Eyebrows -->
    <path d="M78,98 Q87,93 96,98" fill="none" stroke="#8b4513" stroke-width="2" stroke-linecap="round"/>
    <path d="M104,98 Q113,93 122,98" fill="none" stroke="#8b4513" stroke-width="2" stroke-linecap="round"/>
    <!-- Nose -->
    <path d="M100,112 L97,120 Q100,122 103,120Z" fill="#e67e22" stroke="none"/>
    <!-- Smile -->
    <path d="M82,130 Q100,145 118,130" fill="none" stroke="#8b4513" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Rosy cheeks -->
    <ellipse cx="78" cy="125" rx="6" ry="4" fill="#e74c3c" opacity="0.25"/>
    <ellipse cx="122" cy="125" rx="6" ry="4" fill="#e74c3c" opacity="0.25"/>
  `,

  corona: `
    <rect x="50" y="195" width="100" height="15" rx="3" fill="#f39c12" ${S2}/>
    <path d="M50,195 L50,175 Q50,160 55,155 L62,175 L70,155 L78,175 L85,155 L92,175 L100,155 L108,175 L115,155 L122,175 L130,155 L138,175 L145,155 Q150,160 150,175 L150,195" fill="#f1c40f" ${S2}/>
    <path d="M55,155 Q58,145 62,148 Q60,155 55,155" fill="#f39c12" ${S1}/>
    <path d="M130,155 Q133,145 138,148 Q135,155 130,155" fill="#f39c12" ${S1}/>
    <circle cx="62" cy="150" r="4" fill="#c0392b" ${S1}/>
    <circle cx="100" cy="145" r="5" fill="#c0392b" ${S1}/>
    <circle cx="138" cy="150" r="4" fill="#c0392b" ${S1}/>
    <circle cx="62" cy="150" r="2" fill="#3498db"/>
    <circle cx="100" cy="145" r="2.5" fill="#3498db"/>
    <circle cx="138" cy="150" r="2" fill="#3498db"/>
    <rect x="60" y="170" width="12" height="25" fill="#f1c40f" ${S1}/>
    <rect x="88" y="165" width="24" height="30" fill="#f1c40f" ${S1}/>
    <rect x="128" y="170" width="12" height="25" fill="#f1c40f" ${S1}/>
    <path d="M100,165 L100,150" fill="none" ${S1}/>
    <path d="M94,152 Q100,146 106,152" fill="none" ${S1}/>
    <path d="M60,210 L58,220 L62,215Z" fill="none" ${S1}/>
    <path d="M140,210 L142,220 L138,215Z" fill="none" ${S1}/>
  `,

  chalupa: `
    <path d="M40,160 Q60,140 100,135 Q140,140 160,160 L170,180 Q172,190 168,195 L32,195 Q28,190 30,180Z" fill="#8b4513" ${S2}/>
    <path d="M40,160 Q30,165 32,180 L168,180 Q170,165 160,160" fill="#a0522d" ${S1}/>
    <line x1="100" y1="135" x2="100" y2="195" fill="none" ${S1}/>
    <line x1="70" y1="140" x2="72" y2="195" fill="none" ${S1}/>
    <line x1="130" y1="140" x2="128" y2="195" fill="none" ${S1}/>
    <path d="M65,155 Q100,165 135,155" fill="none" ${S1}/>
    <path d="M60,170 Q100,180 140,170" fill="none" ${S1}/>
    <line x1="100" y1="135" x2="100" y2="128" fill="none" ${S1}/>
    <path d="M94,128 L100,122 L106,128Z" fill="#c0392b" ${S1}/>
    <path d="M55,195 L50,210 L60,205Z" fill="none" ${S1}/>
    <path d="M145,195 L150,210 L140,205Z" fill="none" ${S1}/>
  `,

  pino: `
    <rect x="94" y="220" width="12" height="40" rx="3" fill="#8b4513" ${S}/>
    <path d="M100,60 L60,140 L72,135 L50,190 L65,185 L40,230 L160,230 L135,185 L150,190 L128,135 L140,140Z" fill="#27ae60" ${S2}/>
    <path d="M100,75 L72,130 L80,126 L62,175 L75,170 L55,215 L145,215 L125,170 L138,175 L120,126 L128,130Z" fill="#2ecc71" ${S1}/>
    <path d="M100,90 L80,130 L86,127 L72,165 L82,160 L65,200 L135,200 L118,160 L128,165 L114,127 L120,130Z" fill="#27ae60" ${S1}/>
    <path d="M100,60 L100,52" fill="none" ${S1}/>
    <path d="M96,54 Q100,48 104,54" fill="none" ${S1}/>
    <circle cx="100" cy="135" r="3" fill="#f39c12" opacity="0.5"/>
    <circle cx="85" cy="170" r="2.5" fill="#f39c12" opacity="0.5"/>
    <circle cx="115" cy="160" r="2.5" fill="#f39c12" opacity="0.5"/>
    <circle cx="100" cy="195" r="2" fill="#f39c12" opacity="0.5"/>
  `,

  pescado: `
    <ellipse cx="100" cy="130" rx="55" ry="30" fill="#3498db" ${S2}/>
    <ellipse cx="100" cy="130" rx="45" ry="22" fill="#2980b9" ${S1}/>
    <path d="M155,130 L175,108 L175,152Z" fill="#3498db" ${S2}/>
    <circle cx="65" cy="125" r="6" fill="#fff" ${S}/>
    <circle cx="67" cy="125" r="3" fill="#2c1810"/>
    <path d="M55,135 L48,140 Q45,138 48,133" fill="none" ${S1}/>
    <path d="M60,118 Q75,105 90,108" fill="none" ${S1}/>
    <path d="M120,115 Q135,108 145,118" fill="none" ${S1}/>
    <path d="M85,148 Q100,155 115,148" fill="none" ${S1}/>
    <path d="M95,130 L100,135 L105,130" fill="none" ${S1}/>
    <path d="M100,130 L100,140" fill="none" ${S1}/>
    <circle cx="72" cy="118" r="2" fill="#f39c12"/>
    <circle cx="85" cy="112" r="1.5" fill="#f39c12"/>
    <circle cx="115" cy="112" r="1.5" fill="#f39c12"/>
  `,

  palma: `
    <rect x="94" y="200" width="12" height="60" rx="3" fill="#8b4513" ${S}/>
    <path d="M100,60 L100,200" fill="none" ${S1}/>
    <path d="M100,60 Q70,50 40,70 Q60,45 100,55" fill="#27ae60" ${S1}/>
    <path d="M100,60 Q130,50 160,70 Q140,45 100,55" fill="#27ae60" ${S1}/>
    <path d="M100,80 Q60,65 30,90 Q55,62 100,75" fill="#2ecc71" ${S1}/>
    <path d="M100,80 Q140,65 170,90 Q145,62 100,75" fill="#2ecc71" ${S1}/>
    <path d="M100,100 Q55,85 25,115 Q52,85 100,95" fill="#27ae60" ${S1}/>
    <path d="M100,100 Q145,85 175,115 Q148,85 100,95" fill="#27ae60" ${S1}/>
    <path d="M100,120 Q50,105 30,140 Q55,105 100,115" fill="#2ecc71" ${S1}/>
    <path d="M100,120 Q150,105 170,140 Q145,105 100,115" fill="#2ecc71" ${S1}/>
    <path d="M100,140 Q55,125 40,158 Q62,125 100,135" fill="#27ae60" ${S1}/>
    <path d="M100,140 Q145,125 160,158 Q138,125 100,135" fill="#27ae60" ${S1}/>
    <path d="M100,160 Q60,148 50,180 Q70,148 100,155" fill="#2ecc71" ${S1}/>
    <path d="M100,160 Q140,148 150,180 Q130,148 100,155" fill="#2ecc71" ${S1}/>
    <circle cx="100" cy="65" r="3" fill="#f39c12"/>
    <circle cx="95" cy="55" r="2" fill="#f39c12"/>
    <circle cx="105" cy="55" r="2" fill="#f39c12"/>
    <circle cx="100" cy="200" r="7" fill="#8b4513"/>
    <path d="M95,200 L95,210" fill="none" ${S1}/>
    <path d="M105,200 L105,210" fill="none" ${S1}/>
  `,

  maceta: `
    <path d="M55,200 L60,230 Q62,240 68,245 L132,245 Q138,240 140,230 L145,200" fill="#c0392b" ${S2}/>
    <ellipse cx="100" cy="200" rx="45" ry="10" fill="#c0392b" ${S}/>
    <rect x="65" y="200" width="70" height="45" fill="#e74c3c" ${S1}/>
    <ellipse cx="100" cy="200" rx="45" ry="10" fill="none" ${S1}/>
    <path d="M70,218 Q100,225 130,218" fill="none" ${S1}/>
    <path d="M68,230 Q100,238 132,230" fill="none" ${S1}/>
    <path d="M100,200 L100,155" fill="none" ${S2}/>
    <path d="M70,155 Q80,140 95,145 Q90,130 100,120 Q110,130 105,145 Q120,140 130,155" fill="#27ae60" ${S2}/>
    <path d="M100,120 L100,108" fill="none" ${S1}/>
    <path d="M95,110 Q100,104 105,110" fill="none" ${S1}/>
    <circle cx="85" cy="148" r="4" fill="#c0392b" ${S1}/>
    <circle cx="115" cy="148" r="4" fill="#c0392b" ${S1}/>
    <circle cx="100" cy="135" r="4" fill="#c0392b" ${S1}/>
    <circle cx="90" cy="140" r="3" fill="#f39c12" ${S1}/>
    <circle cx="110" cy="142" r="3" fill="#f39c12" ${S1}/>
  `,

  arpa: `
    <path d="M80,55 Q72,50 75,42 Q78,36 85,38 Q90,40 92,48" fill="none" ${S1}/>
    <path d="M120,55 Q128,50 125,42 Q122,36 115,38 Q110,40 108,48" fill="none" ${S1}/>
    <path d="M80,55 Q80,80 82,110 Q84,140 85,170 Q86,200 88,230 Q90,252 95,260 L105,260 Q110,252 112,230 Q114,200 115,170 Q116,140 118,110 Q120,80 120,55" fill="#f39c12" ${S2}/>
    <path d="M88,60 L112,60" fill="none" ${S1}/>
    <path d="M86,80 L114,80" fill="none" ${S1}/>
    <path d="M85,100 L115,100" fill="none" ${S1}/>
    <path d="M84,120 L116,120" fill="none" ${S1}/>
    <path d="M84,140 L116,140" fill="none" ${S1}/>
    <path d="M84,160 L116,160" fill="none" ${S1}/>
    <path d="M85,180 L115,180" fill="none" ${S1}/>
    <path d="M86,200 L114,200" fill="none" ${S1}/>
    <path d="M87,220 L113,220" fill="none" ${S1}/>
    <path d="M89,240 L111,240" fill="none" ${S1}/>
    <rect x="92" y="260" width="16" height="8" rx="2" fill="#8b4513" ${S1}/>
    <path d="M80,55 L75,50 L80,48" fill="none" ${S1}/>
    <path d="M120,55 L125,50 L120,48" fill="none" ${S1}/>
    <path d="M100,40 L100,35" fill="none" ${S1}/>
    <path d="M96,36 Q100,32 104,36" fill="none" ${S1}/>
  `,

  rana: `
    <defs>
      <linearGradient id="ranaGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#2ecc71"/>
        <stop offset="100%" stop-color="#1e8449"/>
      </linearGradient>
      <linearGradient id="ranaBelly" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#abebc6"/>
        <stop offset="100%" stop-color="#82e0aa"/>
      </linearGradient>
    </defs>
    <!-- Back legs -->
    <path d="M55,175 Q35,180 28,195 Q25,210 35,218 Q45,222 52,215 Q58,208 55,195" fill="url(#ranaGrad)" stroke="#196f3d" stroke-width="2.5"/>
    <path d="M145,175 Q165,180 172,195 Q175,210 165,218 Q155,222 148,215 Q142,208 145,195" fill="url(#ranaGrad)" stroke="#196f3d" stroke-width="2.5"/>
    <!-- Back feet -->
    <path d="M28,218 L20,228 L30,225 L25,235 L35,228 L32,238 L40,228" fill="url(#ranaGrad)" stroke="#196f3d" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M172,218 L180,228 L170,225 L175,235 L165,228 L168,238 L160,228" fill="url(#ranaGrad)" stroke="#196f3d" stroke-width="1.5" stroke-linecap="round"/>
    <!-- Body -->
    <ellipse cx="100" cy="155" rx="50" ry="35" fill="url(#ranaGrad)" stroke="#196f3d" stroke-width="3"/>
    <!-- Belly -->
    <ellipse cx="100" cy="162" rx="35" ry="22" fill="url(#ranaBelly)" stroke="#1e8449" stroke-width="1.5"/>
    <!-- Belly pattern -->
    <path d="M80,155 Q100,148 120,155" fill="none" stroke="#82e0aa" stroke-width="1" opacity="0.5"/>
    <path d="M82,165 Q100,158 118,165" fill="none" stroke="#82e0aa" stroke-width="1" opacity="0.5"/>
    <!-- Front legs -->
    <path d="M60,165 Q45,170 40,182 Q38,192 48,195 Q55,196 58,188 Q60,180 58,170" fill="url(#ranaGrad)" stroke="#196f3d" stroke-width="2.5"/>
    <path d="M140,165 Q155,170 160,182 Q162,192 152,195 Q145,196 142,188 Q140,180 142,170" fill="url(#ranaGrad)" stroke="#196f3d" stroke-width="2.5"/>
    <!-- Front feet -->
    <path d="M40,195 L32,205 L42,202 L38,212 L48,205" fill="url(#ranaGrad)" stroke="#196f3d" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M160,195 L168,205 L158,202 L162,212 L152,205" fill="url(#ranaGrad)" stroke="#196f3d" stroke-width="1.5" stroke-linecap="round"/>
    <!-- Eye bumps -->
    <circle cx="78" cy="120" r="16" fill="url(#ranaGrad)" stroke="#196f3d" stroke-width="2.5"/>
    <circle cx="122" cy="120" r="16" fill="url(#ranaGrad)" stroke="#196f3d" stroke-width="2.5"/>
    <!-- Eyes -->
    <circle cx="78" cy="118" r="10" fill="#fff" stroke="#196f3d" stroke-width="2"/>
    <circle cx="122" cy="118" r="10" fill="#fff" stroke="#196f3d" stroke-width="2"/>
    <ellipse cx="80" cy="118" rx="5" ry="6" fill="#2c1810"/>
    <ellipse cx="120" cy="118" rx="5" ry="6" fill="#2c1810"/>
    <circle cx="82" cy="116" r="2.5" fill="#fff"/>
    <circle cx="118" cy="116" r="2.5" fill="#fff"/>
    <!-- Nostrils -->
    <circle cx="92" cy="132" r="2" fill="#196f3d"/>
    <circle cx="108" cy="132" r="2" fill="#196f3d"/>
    <!-- Mouth -->
    <path d="M75,142 Q100,155 125,142" fill="none" stroke="#196f3d" stroke-width="2" stroke-linecap="round"/>
    <!-- Spots on body -->
    <circle cx="75" cy="155" r="4" fill="#1e8449" opacity="0.5"/>
    <circle cx="125" cy="155" r="4" fill="#1e8449" opacity="0.5"/>
    <circle cx="90" cy="170" r="3" fill="#1e8449" opacity="0.5"/>
    <circle cx="110" cy="170" r="3" fill="#1e8449" opacity="0.5"/>
    <!-- Tongue (playful) -->
    <path d="M100,148 Q100,160 95,170 Q90,178 85,175" fill="none" stroke="#c0392b" stroke-width="2" stroke-linecap="round"/>
    <circle cx="85" cy="175" r="3" fill="#c0392b"/>
  `,
};
