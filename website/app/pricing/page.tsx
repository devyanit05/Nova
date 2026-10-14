import type { Metadata } from "next";
import { ProsePage } from "@/components/site/ProsePage";

export const metadata: Metadata = {
  title: "Pricing",
  description: "The daily loop stays free. Sync may be paid later. Journal, export, and streaks are never a paywall.",
};

const tiers = [
  {
    name: "Free",
    price: "The daily loop",
    detail: "This is the product. It stays free.",
    points: ["Schedule, tasks, water, journal, history", "A basic money log", "Export, so you can leave"],
  },
  {
    name: "Later",
    price: "Sync, when it exists",
    detail: "Nothing to buy today. A second device is the first thing worth paying for.",
    points: ["The same day on phone and web", "Reminders that survive a closed tab", "An optional coach that only suggests"],
  },
];

export default function PricingPage() {
  return (
    <ProsePage
      eyebrow="Pricing"
      title="Free where it matters."
      lede="Nova will not charge you to drink water, write a page, or keep a streak. Those are the reason the product exists."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {tiers.map((tier) => (
          <section key={tier.name} className="rounded-[28px] border border-[#E5E7EB] bg-white/80 p-6">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#6B7280]">{tier.name}</p>
            <h2 className="mt-2 font-heading text-2xl font-semibold tracking-[-0.03em] text-[#1F2937]">
              {tier.price}
            </h2>
            <p className="mt-3 text-sm leading-relaxed">{tier.detail}</p>
            <ul className="mt-4">
              {tier.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <p>
        There is no checkout, no waitlist price, and no number to memorize. When sync is
        real, the price will be said in plain language before the first rupee.
      </p>
    </ProsePage>
  );
}
