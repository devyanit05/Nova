import { scattered } from "@/lib/content";

export function MergeArt() {
  return (
    <div className="glass-panel relative overflow-hidden rounded-[32px] border border-white/70 px-6 py-12 sm:px-12">
      <div className="flex flex-wrap justify-center gap-3">
        {scattered.map((app) => (
          <span
            key={app}
            className="rounded-full border border-[#E5E7EB] bg-white/80 px-4 py-2 text-sm text-[#6B7280] shadow-[0_8px_20px_rgba(31,41,55,0.04)]"
          >
            {app}
          </span>
        ))}
      </div>
      <svg viewBox="0 0 320 88" className="mx-auto mt-2 h-20 w-full max-w-md" aria-hidden>
        <path
          d="M40 8 C80 70, 240 70, 280 8"
          fill="none"
          stroke="#7C6CF2"
          strokeOpacity="0.25"
          strokeWidth="1.2"
        />
        <path
          d="M70 8 C110 54, 210 54, 250 8"
          fill="none"
          stroke="#8FD3D3"
          strokeOpacity="0.3"
          strokeWidth="1.2"
        />
        <circle cx="160" cy="64" r="10" fill="#7C6CF2" opacity="0.8" />
        <circle cx="160" cy="64" r="4" fill="white" />
      </svg>
      <div className="mx-auto max-w-md rounded-[28px] border border-white/80 bg-white/70 p-8 text-center shadow-[0_20px_50px_rgba(31,41,55,0.05)]">
        <p className="font-heading text-lg font-semibold text-[#1F2937]">Nova</p>
        <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
          The scattered pieces become one operating system. Same day. Same person. One desk.
        </p>
      </div>
    </div>
  );
}
