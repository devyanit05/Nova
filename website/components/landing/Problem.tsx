import { MergeArt } from "@/components/art/MergeArt";
import { Reveal } from "@/components/landing/Reveal";

export function Problem() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#6B7280]">
            The clutter
          </p>
          <h2
            id="problem-heading"
            className="mt-3 max-w-2xl font-heading text-3xl font-semibold tracking-[-0.03em] text-[#1F2937] sm:text-4xl"
          >
            Current life is fragmented.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#6B7280]">
            One app for tasks. One for finance. One for notes. One for reminders. One for
            journals. One for habits. None of them answer how your life is going.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-14">
          <MergeArt />
        </Reveal>
      </div>
    </section>
  );
}
