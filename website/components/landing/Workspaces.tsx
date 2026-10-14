import {
  BookOpen,
  Briefcase,
  Compass,
  Droplets,
  GraduationCap,
  Heart,
  Landmark,
  NotebookPen,
  Sparkles,
  Target,
  TreePalm,
} from "lucide-react";
import { WorkspaceArt } from "@/components/art/WorkspaceArt";
import { workspaces } from "@/lib/content";
import { Reveal } from "@/components/landing/Reveal";

const icons = [
  NotebookPen,
  Landmark,
  Briefcase,
  Droplets,
  Heart,
  GraduationCap,
  BookOpen,
  NotebookPen,
  TreePalm,
  Target,
  Sparkles,
];

export function Workspaces() {
  return (
    <section id="workspaces" className="px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="workspaces-heading">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#6B7280]">
            The heart of Nova
          </p>
          <h2
            id="workspaces-heading"
            className="mt-3 max-w-2xl font-heading text-3xl font-semibold tracking-[-0.03em] text-[#1F2937] sm:text-4xl"
          >
            Workspaces for every part of being a person.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#6B7280]">
            Each workspace is one area of your life — not a plugin, not a blank page. Nova
            ships with living templates you can keep, reshape, or replace.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workspaces.map((space, i) => {
            const Icon = icons[i] ?? Compass;
            return (
              <Reveal key={space.name} delay={i * 0.04}>
                <article className="group h-full rounded-[28px] border border-white/70 bg-white/55 p-5 shadow-[0_10px_30px_rgba(31,41,55,0.03)] backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_44px_rgba(31,41,55,0.08)]">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-2xl"
                    style={{ background: `${space.accent}22`, color: space.accent }}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-[#1F2937]">
                    {space.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">{space.description}</p>
                  <div className="mt-5 overflow-hidden rounded-2xl">
                    <WorkspaceArt name={space.name} />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
