"use client";

import { Float } from "@/components/art/Float";
import { NovaScreen } from "@/components/art/NovaScreen";

function Laptop() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-[#7C6CF2]/16 via-transparent to-[#8FD3D3]/20 blur-2xl" />
      <div className="relative rounded-t-[22px] border border-[#E5E7EB] bg-gradient-to-b from-[#F4F2EE] to-[#E8E6E1] p-[10px] shadow-[0_40px_90px_rgba(31,41,55,0.14)]">
        <div className="mx-auto mb-2 h-1.5 w-16 rounded-full bg-[#D7D3CC]" />
        <div className="overflow-hidden rounded-[16px] border border-white/80 bg-white">
          <NovaScreen variant="desktop" />
        </div>
      </div>
      <div className="mx-auto h-3 w-[78%] rounded-b-2xl bg-[#DEDAD3] shadow-[0_10px_20px_rgba(31,41,55,0.08)]" />
    </div>
  );
}

function Phone() {
  return (
    <div className="rounded-[32px] border border-[#E5E7EB] bg-[#F4F2EE] p-[7px] shadow-[0_28px_60px_rgba(31,41,55,0.16)]">
      <div className="mx-auto mb-1.5 h-1 w-10 rounded-full bg-[#D7D3CC]" />
      <div className="overflow-hidden rounded-[24px] border border-white/80 bg-white">
        <NovaScreen variant="phone" />
      </div>
      <div className="mx-auto mt-1.5 h-1 w-8 rounded-full bg-[#D7D3CC]" />
    </div>
  );
}

export function DeviceStage() {
  return (
    <div className="relative mx-auto w-full max-w-[980px]">
      <div className="mx-auto w-[230px] sm:hidden">
        <Float>
          <Phone />
        </Float>
      </div>

      <div className="relative hidden sm:block">
        <div className="pointer-events-none absolute -left-[4%] top-10 hidden w-[48%] lg:block">
          <Float delay={0.6}>
            <div className="-rotate-[8deg] rounded-[28px] border border-[#E5E7EB] bg-[#F3F1ED] p-2 shadow-[0_30px_70px_rgba(31,41,55,0.12)]">
              <div className="overflow-hidden rounded-[22px] border border-white/70">
                <NovaScreen variant="tablet" />
              </div>
            </div>
          </Float>
        </div>

        <div className="relative z-10 mx-auto w-[86%] max-w-[720px]">
          <Float>
            <Laptop />
          </Float>
        </div>

        <div className="absolute bottom-6 right-0 z-20 w-[168px]">
          <Float delay={1.1}>
            <Phone />
          </Float>
        </div>
      </div>
    </div>
  );
}
