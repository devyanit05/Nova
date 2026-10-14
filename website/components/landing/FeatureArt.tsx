"use client";

import { Float } from "@/components/art/Float";
import { WorkspaceArt } from "@/components/art/WorkspaceArt";

const featureArt: Record<string, string> = {
  "Daily Planning": "Daily Planning",
  Finance: "Finance",
  "Career Dashboard": "Career",
  "Reading Tracker": "Reading",
  "Water Tracker": "Water",
  "Self Care": "Self Care",
  Journal: "Journal",
  "Progress Tracking": "Progress",
  "Weekly Review": "Review",
};

export function FeatureArt({ title }: { title: string }) {
  const name = featureArt[title] ?? "Daily Planning";
  return (
    <Float>
      <div className="glass-panel relative overflow-hidden rounded-[32px] border border-white/70 p-3">
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-white/90" />
        <WorkspaceArt name={name} />
      </div>
    </Float>
  );
}
