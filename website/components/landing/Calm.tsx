import { Reveal } from "@/components/landing/Reveal";

const principles = [
  { title: "No endless feeds", body: "There is nothing to refresh. The day is the surface." },
  { title: "No ads", body: "Your journal is not inventory. Your spend is not a targeting signal." },
  { title: "No guilt", body: "An empty recharge day is valid. Streaks do not shame you." },
  { title: "No manipulation", body: "No loot, no freeze-your-streak paywall, no 10x copy." },
  { title: "No productivity anxiety", body: "Busy is not the goal. Becoming is." },
  { title: "Just clarity", body: "How am I doing — and what deserves my attention next?" },
];

export function Calm() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="calm-heading">
      <div className="mx-auto max-w-6xl rounded-[36px] border border-[#E5E7EB] bg-white px-6 py-14 sm:px-14">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#6B7280]">
            Built around calm
          </p>
          <h2
            id="calm-heading"
            className="mt-3 max-w-2xl font-heading text-3xl font-semibold tracking-[-0.03em] text-[#1F2937] sm:text-4xl"
          >
            Nova should feel like morning light on a wooden desk.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#6B7280]">
            Not a machine that wants more from you. Not a feed. Not a game. A quiet place to
            see your life clearly — then close the lid.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <h3 className="font-heading text-base font-semibold text-[#1F2937]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
