import { GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { Reveal } from "@/components/landing/Reveal";

export function OpenSource() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="oss-heading">
      <Reveal>
        <div className="mx-auto max-w-6xl rounded-[36px] bg-gradient-to-br from-[#7C6CF2]/10 via-white to-[#8FD3D3]/15 px-6 py-16 sm:px-14">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#6B7280]">
            Open source
          </p>
          <h2
            id="oss-heading"
            className="mt-3 max-w-xl font-heading text-3xl font-semibold tracking-[-0.03em] text-[#1F2937] sm:text-4xl"
          >
            Built in public, as a learning journey.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#6B7280]">
            Nova is being designed and shipped in the open. The vision, the workspaces, and
            the code live on GitHub. Contributions, ideas, and quiet improvements are
            welcome.
          </p>
          <Button className="mt-8" asChild>
            <a href={site.github} target="_blank" rel="noreferrer">
              <GitFork className="h-4 w-4" />
              Star on GitHub
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
