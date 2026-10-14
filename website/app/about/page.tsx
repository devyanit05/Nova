import type { Metadata } from "next";
import { ProsePage } from "@/components/site/ProsePage";

export const metadata: Metadata = {
  title: "About",
  description: "Nova is a Life Operating System — one calm desk for planning, money, health, learning, and rest.",
};

export default function AboutPage() {
  return (
    <ProsePage
      eyebrow="About"
      title="One desk for a whole life."
      lede="Nova exists so you can stop managing apps and start seeing the day you actually have."
    >
      <p>
        Tasks live in one place. Money in another. Water, reading, interviews, and the
        journal are scattered across tools that do not know each other. Nova is the quiet
        alternative: a Life Operating System, not a productivity scoreboard.
      </p>
      <h2>Who it is for</h2>
      <p>
        People who already try to live intentionally and are tired of switching. A private
        desk — not a team workspace, not a social network, not a streak that scolds you
        for a human day.
      </p>
      <h2>How it is being built</h2>
      <p>
        The public site comes first, so the feeling is agreed before the features multiply.
        The daily loop — schedule, a short task list, water, journal — comes next, on your
        own device. Sync and a coach come only after that desk is something you would miss.
      </p>
    </ProsePage>
  );
}
