export function FeatureArt({ index }: { index: number }) {
  const palettes = [
    ["#7C6CF2", "#8FD3D3"],
    ["#8FD3D3", "#7C6CF2"],
    ["#E8B4A0", "#7C6CF2"],
  ];
  const [a, b] = palettes[index % palettes.length];

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-[#E5E7EB] bg-[#F8F7F5] p-8 shadow-[0_16px_40px_rgba(31,41,55,0.04)]">
      <svg viewBox="0 0 360 220" className="h-auto w-full" aria-hidden>
        <rect x="24" y="28" width="200" height="140" rx="24" fill="white" stroke="#E5E7EB" />
        <rect x="40" y="48" width="88" height="10" rx="5" fill={a} opacity="0.35" />
        <rect x="40" y="70" width="152" height="8" rx="4" fill="#E5E7EB" />
        <rect x="40" y="88" width="128" height="8" rx="4" fill="#E5E7EB" />
        <rect x="40" y="118" width="48" height="28" rx="14" fill={a} />
        <rect x="96" y="118" width="48" height="28" rx="14" fill="white" stroke="#E5E7EB" />
        <circle cx="280" cy="70" r="48" fill={b} opacity="0.35" />
        <circle cx="300" cy="150" r="32" fill={a} opacity="0.2" />
        <rect x="236" y="40" width="100" height="72" rx="20" fill="white" stroke="#E5E7EB" />
        <rect x="252" y="56" width="68" height="8" rx="4" fill={b} opacity="0.7" />
        <rect x="252" y="74" width="44" height="8" rx="4" fill="#E5E7EB" />
      </svg>
    </div>
  );
}
