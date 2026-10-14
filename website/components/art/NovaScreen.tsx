"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

function Fill({ width, color }: { width: string; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();

  return (
    <div ref={ref} className="h-1.5 overflow-hidden rounded-full bg-white/80">
      <motion.div
        className="h-full rounded-full"
        style={{ background: color }}
        initial={{ width: reduce ? width : 0 }}
        animate={{ width: inView || reduce ? width : 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

export function NovaScreen({ variant = "desktop" }: { variant?: "desktop" | "tablet" | "phone" }) {
  if (variant === "phone") {
    return (
      <div className="h-full bg-[#F8F7F5] p-3 text-left">
        <p className="text-[8px] tracking-wide text-[#6B7280]">Monday</p>
        <p className="font-heading text-[13px] font-semibold text-[#1F2937]">Good morning.</p>
        <div className="mt-3 rounded-xl bg-white p-2.5 shadow-[0_8px_20px_rgba(31,41,55,0.04)]">
          <p className="text-[8px] text-[#6B7280]">Today’s focus</p>
          <p className="mt-1.5 text-[10px] text-[#1F2937]">Read 15 pages</p>
          <p className="mt-1 text-[10px] text-[#1F2937]">Evening walk</p>
        </div>
        <div className="mt-2 rounded-xl bg-white p-2.5">
          <p className="text-[8px] text-[#6B7280]">Water</p>
          <div className="mt-2 flex gap-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className={i < 5 ? "h-5 flex-1 rounded-full bg-[#8FD3D3]" : "h-5 flex-1 rounded-full bg-[#E5E7EB]"}
              />
            ))}
          </div>
        </div>
        <div className="mt-2 rounded-xl bg-white p-2.5">
          <p className="text-[8px] text-[#6B7280]">Journal</p>
          <p className="mt-1 line-clamp-3 text-[9px] leading-relaxed text-[#6B7280]">
            A quiet morning. Coffee. The day already knows me.
          </p>
        </div>
      </div>
    );
  }

  const compact = variant === "tablet";

  return (
    <div className="grid h-full min-h-[280px] grid-cols-1 bg-white md:grid-cols-[168px_1fr]">
      {!compact && (
        <aside className="hidden border-r border-[#E5E7EB] bg-[#FBFBFA]/90 p-4 md:block">
          <p className="font-heading text-xs font-semibold text-[#1F2937]">✦ Nova</p>
          <ul className="mt-4 space-y-1 text-[11px]">
            {["Dashboard", "Life", "Finance", "Health", "Learning", "Recharge"].map((label, i) => (
              <li
                key={label}
                className={
                  i === 0
                    ? "rounded-xl bg-white px-2.5 py-1.5 font-medium text-[#1F2937] shadow-[0_4px_14px_rgba(31,41,55,0.05)]"
                    : "rounded-xl px-2.5 py-1.5 text-[#6B7280]"
                }
              >
                {label}
              </li>
            ))}
          </ul>
        </aside>
      )}

      <div className="space-y-3 bg-gradient-to-b from-white to-[#F8F7F5] p-4">
        <div>
          <p className="text-[10px] tracking-wide text-[#6B7280]">Monday · August</p>
          <h3 className="font-heading text-base font-semibold text-[#1F2937]">Good morning.</h3>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            ["Health", "82%", "#8FD3D3"],
            ["Career", "64%", "#7C6CF2"],
            ["Learning", "90%", "#7C6CF2"],
            ["Finance", "55%", "#8FD3D3"],
          ].map(([name, pct, color]) => (
            <div key={name} className="rounded-2xl border border-[#E5E7EB]/80 bg-white/70 p-2.5 backdrop-blur-sm">
              <p className="text-[9px] text-[#6B7280]">{name}</p>
              <p className="font-heading text-sm font-semibold text-[#1F2937]">{pct}</p>
              <div className="mt-1.5">
                <Fill width={pct} color={color} />
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-2 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#E5E7EB]/80 bg-white/75 p-3 sm:col-span-2">
            <p className="text-[10px] font-medium text-[#6B7280]">Today’s focus</p>
            <ul className="mt-2 space-y-1.5 text-[11px] text-[#1F2937]">
              <li className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full border border-[#7C6CF2]" />
                Kubernetes lab
              </li>
              <li className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#8FD3D3]" />
                Drink 2.5L water
              </li>
              <li className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full border border-[#E5E7EB]" />
                Read 15 pages
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-[#E5E7EB]/80 bg-white/75 p-3">
            <p className="text-[10px] font-medium text-[#6B7280]">Water</p>
            <div className="mt-2 grid grid-cols-4 gap-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className={i < 5 ? "h-5 rounded-full bg-[#8FD3D3]" : "h-5 rounded-full bg-[#E5E7EB]"}
                />
              ))}
            </div>
          </div>
        </div>

        {!compact && (
          <div className="grid gap-2 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#E5E7EB]/80 bg-white/70 p-3">
              <p className="text-[10px] text-[#6B7280]">Journal</p>
              <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-[#6B7280]">
                Grateful for a desk that already knows the day.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E5E7EB]/80 bg-white/70 p-3">
              <p className="text-[10px] text-[#6B7280]">Finance</p>
              <p className="font-heading text-sm font-semibold text-[#1F2937]">₹18,400</p>
              <p className="text-[10px] text-[#6B7280]">remaining</p>
            </div>
            <div className="rounded-2xl border border-[#E5E7EB]/80 bg-white/70 p-3">
              <p className="text-[10px] text-[#6B7280]">Reading</p>
              <p className="text-[11px] text-[#1F2937]">The Creative Act</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
