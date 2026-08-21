import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden
        className="grid h-8 w-8 place-items-center rounded-2xl bg-gradient-to-br from-[#7C6CF2] to-[#8FD3D3] shadow-[0_8px_20px_rgba(124,108,242,0.25)]"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="currentColor">
          <path d="M12 2.4 13.7 8.3 19.6 10 13.7 11.7 12 17.6 10.3 11.7 4.4 10 10.3 8.3 12 2.4Z" />
        </svg>
      </span>
      <span className="font-heading text-[17px] font-semibold tracking-[-0.03em] text-[#1F2937]">
        Nova
      </span>
    </span>
  );
}
