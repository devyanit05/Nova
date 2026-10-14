import type { Metadata } from "next";
import { releases } from "@/lib/content";
import { ProsePage } from "@/components/site/ProsePage";

export const metadata: Metadata = {
  title: "Changelog",
  description: "What has actually shipped in Nova, newest first.",
};

export default function ChangelogPage() {
  return (
    <ProsePage
      eyebrow="Changelog"
      title="What has shipped."
      lede="Newest first. Roadmap wishes stay on the roadmap. This page is only what landed."
    >
      <div className="space-y-10">
        {releases.map((release) => (
          <section key={release.title}>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#6B7280]">{release.date}</p>
            <h2 className="mt-2">{release.title}</h2>
            <ul>
              {release.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </ProsePage>
  );
}
