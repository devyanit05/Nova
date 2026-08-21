import { scattered } from "@/lib/content";
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
          <div className="relative overflow-hidden rounded-[32px] border border-[#E5E7EB] bg-white px-6 py-12 sm:px-12">
            <div className="flex flex-wrap justify-center gap-3">
              {scattered.map((app) => (
                <span
                  key={app}
                  className="rounded-full border border-[#E5E7EB] bg-[#F8F7F5] px-4 py-2 text-sm text-[#6B7280]"
                >
                  {app}
                </span>
              ))}
            </div>

            <div className="mx-auto my-8 h-16 w-px bg-gradient-to-b from-[#E5E7EB] to-[#7C6CF2]/50" />

            <div className="mx-auto max-w-md rounded-[28px] border border-[#E5E7EB] bg-gradient-to-br from-white to-[#F8F7F5] p-8 text-center shadow-[0_20px_50px_rgba(31,41,55,0.05)]">
              <p className="font-heading text-lg font-semibold text-[#1F2937]">Nova</p>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                The scattered pieces become one operating system. Same day. Same person. One
                desk.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
