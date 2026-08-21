import { roadmap } from "@/lib/content";
import { Reveal } from "@/components/landing/Reveal";

export function Vision() {
  return (
    <section id="vision" className="px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="vision-heading">
      <div className="mx-auto max-w-6xl" id="roadmap">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#6B7280]">
            Future vision
          </p>
          <h2
            id="vision-heading"
            className="mt-3 max-w-2xl font-heading text-3xl font-semibold tracking-[-0.03em] text-[#1F2937] sm:text-4xl"
          >
            Built in public, in a patient order.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#6B7280]">
            The AI never controls your day. It only recommends. You stay in charge — of the
            plan, the spend, and the page you write at night.
          </p>
        </Reveal>

        <ol className="relative mt-16 space-y-0 border-l border-[#E5E7EB] pl-8 sm:ml-4">
          {roadmap.map((step, i) => (
            <li key={step.title} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[39px] top-1 grid h-6 w-6 place-items-center rounded-full border border-[#E5E7EB] bg-white text-[11px] font-medium text-[#7C6CF2]">
                {i + 1}
              </span>
              <Reveal>
                <h3 className="font-heading text-lg font-semibold text-[#1F2937]">{step.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#6B7280]">{step.detail}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
