import type { ReactNode } from "react";

const stroke = "#D9D6D0";
const ink = "#1F2937";
const violet = "#7C6CF2";
const mist = "#8FD3D3";
const clay = "#E8B4A0";

function Frame({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 320 180" className="h-auto w-full" aria-hidden>
      <rect x="8" y="8" width="304" height="164" rx="28" fill="#F8F7F5" />
      {children}
    </svg>
  );
}

const arts: Record<string, () => ReactNode> = {
  "Daily Planning": () => (
    <Frame>
      <rect x="28" y="28" width="120" height="124" rx="20" fill="white" stroke={stroke} />
      <rect x="44" y="42" width="88" height="8" rx="4" fill={violet} opacity="0.35" />
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2].map((c) => (
          <rect
            key={`${r}${c}`}
            x={44 + c * 28}
            y={62 + r * 20}
            width="20"
            height="14"
            rx="4"
            fill={r === 1 && c === 1 ? violet : "#EEECE8"}
          />
        )),
      )}
      <rect x="168" y="40" width="124" height="18" rx="9" fill="white" stroke={stroke} />
      <circle cx="186" cy="49" r="4" fill={mist} />
      <rect x="168" y="72" width="124" height="18" rx="9" fill="white" stroke={stroke} />
      <circle cx="186" cy="81" r="4" fill={violet} />
      <rect x="168" y="104" width="96" height="18" rx="9" fill="white" stroke={stroke} />
    </Frame>
  ),
  Finance: () => (
    <Frame>
      <rect x="36" y="40" width="140" height="88" rx="18" fill="white" stroke={stroke} />
      <rect x="52" y="56" width="72" height="8" rx="4" fill={mist} opacity="0.7" />
      <rect x="52" y="74" width="108" height="28" rx="10" fill="#F8F7F5" />
      <rect x="196" y="108" width="12" height="32" rx="4" fill={violet} opacity="0.35" />
      <rect x="216" y="88" width="12" height="52" rx="4" fill={mist} />
      <rect x="236" y="70" width="12" height="70" rx="4" fill={violet} />
      <rect x="256" y="96" width="12" height="44" rx="4" fill={clay} opacity="0.8" />
      <circle cx="250" cy="48" r="22" fill="white" stroke={stroke} />
      <path d="M242 48h16M250 40v16" stroke={mist} strokeWidth="2" strokeLinecap="round" />
    </Frame>
  ),
  Career: () => (
    <Frame>
      <rect x="48" y="56" width="130" height="80" rx="14" fill="white" stroke={stroke} />
      <rect x="62" y="70" width="70" height="6" rx="3" fill={violet} opacity="0.4" />
      <rect x="62" y="84" width="102" height="6" rx="3" fill={stroke} />
      <rect x="62" y="98" width="88" height="6" rx="3" fill={stroke} />
      <rect x="78" y="136" width="70" height="10" rx="3" fill="#E8E6E1" />
      <polyline
        points="200,120 224,96 244,108 272,68"
        fill="none"
        stroke={violet}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="272" cy="68" r="5" fill={mist} />
    </Frame>
  ),
  Health: () => (
    <Frame>
      <ellipse cx="92" cy="96" rx="28" ry="36" fill={mist} opacity="0.55" />
      <ellipse cx="92" cy="86" rx="18" ry="10" fill="white" opacity="0.45" />
      <path
        d="M168 92c0-14 10-24 22-24s22 10 22 24c0 22-22 40-22 40s-22-18-22-40z"
        fill={clay}
        opacity="0.85"
      />
      <path d="M232 70c8 0 18 10 18 22s-10 28-18 40" fill="none" stroke={violet} strokeWidth="2" />
      <circle cx="250" cy="70" r="4" fill={violet} opacity="0.5" />
    </Frame>
  ),
  "Self Care": () => (
    <Frame>
      <rect x="48" y="108" width="52" height="36" rx="8" fill="white" stroke={stroke} />
      <path d="M74 108c0-22 18-40 18-40s8 12 8 40" fill={mist} opacity="0.5" />
      <circle cx="92" cy="72" r="10" fill={mist} />
      <rect x="128" y="70" width="70" height="74" rx="8" fill="white" stroke={stroke} />
      <rect x="140" y="84" width="46" height="5" rx="2" fill={violet} opacity="0.35" />
      <rect x="140" y="96" width="46" height="5" rx="2" fill={stroke} />
      <ellipse cx="236" cy="118" rx="28" ry="18" fill="white" stroke={stroke} />
      <rect x="224" y="88" width="24" height="32" rx="10" fill={clay} opacity="0.7" />
    </Frame>
  ),
  Learning: () => (
    <Frame>
      <rect x="52" y="88" width="70" height="48" rx="6" fill={violet} opacity="0.25" transform="rotate(-8 87 112)" />
      <rect x="78" y="78" width="70" height="52" rx="6" fill="white" stroke={stroke} />
      <rect x="108" y="70" width="70" height="54" rx="6" fill={mist} opacity="0.35" />
      <rect x="210" y="48" width="64" height="84" rx="10" fill="white" stroke={stroke} />
      <rect x="222" y="64" width="40" height="5" rx="2" fill={violet} opacity="0.4" />
      <rect x="222" y="76" width="40" height="5" rx="2" fill={stroke} />
      <rect x="222" y="88" width="28" height="5" rx="2" fill={stroke} />
    </Frame>
  ),
  Reading: () => (
    <Frame>
      <path d="M60 56c40 8 50 8 90 0v84c-40 10-50 10-90 0z" fill="white" stroke={stroke} />
      <path d="M150 56c40 8 50 8 90 0v84c-40 10-50 10-90 0z" fill="white" stroke={stroke} />
      <path d="M150 56v84" stroke={violet} strokeWidth="1.5" opacity="0.5" />
      <rect x="78" y="78" width="48" height="4" rx="2" fill={stroke} />
      <rect x="78" y="90" width="40" height="4" rx="2" fill={stroke} />
    </Frame>
  ),
  Journal: () => (
    <Frame>
      <rect x="58" y="36" width="120" height="112" rx="10" fill="white" stroke={stroke} />
      <rect x="58" y="36" width="14" height="112" fill={violet} opacity="0.2" />
      <rect x="86" y="58" width="72" height="5" rx="2" fill={stroke} />
      <rect x="86" y="72" width="72" height="5" rx="2" fill={stroke} />
      <rect x="86" y="86" width="56" height="5" rx="2" fill={stroke} />
      <path d="M204 92l48-28 8 14-48 28z" fill={clay} opacity="0.85" />
      <circle cx="252" cy="128" r="16" fill="white" stroke={stroke} />
      <circle cx="252" cy="128" r="8" fill={mist} opacity="0.5" />
    </Frame>
  ),
  Travel: () => (
    <Frame>
      <circle cx="160" cy="96" r="58" fill="white" stroke={stroke} />
      <path d="M110 96h100M160 46v100M124 70c24 18 48 18 72 0M124 122c24-18 48-18 72 0" fill="none" stroke={mist} strokeWidth="1.4" />
      <path d="M92 128l140-52" stroke={violet} strokeWidth="1.6" strokeDasharray="4 6" />
      <path d="M220 70l18-8-6 20z" fill={violet} />
    </Frame>
  ),
  Goals: () => (
    <Frame>
      <path d="M48 140l70-84 44 48 50-62 52 98z" fill="white" stroke={stroke} />
      <path d="M118 56l14 16-22 6z" fill={violet} opacity="0.7" />
      <rect x="114" y="72" width="4" height="68" fill={ink} opacity="0.2" />
      <circle cx="196" cy="88" r="5" fill={mist} />
      <circle cx="246" cy="118" r="5" fill={clay} />
    </Frame>
  ),
  "Vision Board": () => (
    <Frame>
      <rect x="46" y="44" width="84" height="70" rx="8" fill="white" stroke={stroke} transform="rotate(-6 88 79)" />
      <rect x="58" y="56" width="60" height="36" rx="6" fill={mist} opacity="0.4" />
      <rect x="118" y="52" width="84" height="70" rx="8" fill="white" stroke={stroke} />
      <rect x="130" y="64" width="60" height="36" rx="6" fill={violet} opacity="0.25" />
      <rect x="196" y="58" width="76" height="64" rx="8" fill="white" stroke={stroke} transform="rotate(7 234 90)" />
      <rect x="208" y="70" width="52" height="30" rx="6" fill={clay} opacity="0.45" />
    </Frame>
  ),
  Water: () => (
    <Frame>
      {[0, 1, 2, 3].map((i) => (
        <ellipse
          key={i}
          cx={70 + i * 52}
          cy="100"
          rx="18"
          ry="34"
          fill={i < 3 ? mist : "white"}
          stroke={stroke}
          opacity={i < 3 ? 0.8 : 1}
        />
      ))}
    </Frame>
  ),
  Progress: () => (
    <Frame>
      <circle cx="110" cy="96" r="40" fill="none" stroke="#EEECE8" strokeWidth="10" />
      <circle
        cx="110"
        cy="96"
        r="40"
        fill="none"
        stroke={violet}
        strokeWidth="10"
        strokeDasharray="180 251"
        strokeLinecap="round"
        transform="rotate(-90 110 96)"
      />
      <circle cx="210" cy="96" r="32" fill="none" stroke="#EEECE8" strokeWidth="8" />
      <circle
        cx="210"
        cy="96"
        r="32"
        fill="none"
        stroke={mist}
        strokeWidth="8"
        strokeDasharray="140 201"
        strokeLinecap="round"
        transform="rotate(-90 210 96)"
      />
    </Frame>
  ),
  Review: () => (
    <Frame>
      {["Win", "Leak", "Focus"].map((label, i) => (
        <g key={label}>
          <rect x={36 + i * 90} y="48" width="78" height="88" rx="16" fill="white" stroke={stroke} />
          <circle cx={75 + i * 90} cy="78" r="10" fill={i === 1 ? clay : i === 2 ? violet : mist} opacity="0.7" />
        </g>
      ))}
    </Frame>
  ),
};

export function WorkspaceArt({ name }: { name: string }) {
  const Art = arts[name] ?? arts["Daily Planning"];
  return <>{Art()}</>;
}
