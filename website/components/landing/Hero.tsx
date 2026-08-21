import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { DashboardMockup } from "@/components/landing/DashboardMockup";
import { Reveal } from "@/components/landing/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-[#8FD3D3]/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-0 h-[28rem] w-[28rem] rounded-full bg-[#7C6CF2]/16 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-1/3 h-56 w-56 rounded-full bg-[#E8B4A0]/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.22em] text-[#6B7280]">
            A Life Operating System
          </p>
          <h1 className="mx-auto max-w-4xl text-center font-heading text-[2.6rem] font-semibold leading-[1.08] tracking-[-0.045em] text-[#1F2937] sm:text-6xl lg:text-[4.25rem]">
            Live Intentionally. Everything else follows.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-[#6B7280] sm:text-lg">
            {site.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href={site.github}>Get Started</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href={site.github} target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mt-16 sm:mt-20">
          <DashboardMockup />
        </Reveal>
      </div>
    </section>
  );
}
