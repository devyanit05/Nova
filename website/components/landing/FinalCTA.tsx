import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { Reveal } from "@/components/landing/Reveal";

export function FinalCTA() {
  return (
    <section className="px-5 pb-28 pt-8 sm:px-8" aria-labelledby="cta-heading">
      <Reveal>
        <div className="mx-auto max-w-4xl rounded-[36px] border border-[#E5E7EB] bg-white px-6 py-16 text-center shadow-[0_24px_60px_rgba(31,41,55,0.05)] sm:px-16">
          <h2
            id="cta-heading"
            className="font-heading text-3xl font-semibold tracking-[-0.03em] text-[#1F2937] sm:text-4xl"
          >
            Ready to build a calmer life?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[#6B7280]">
            Nova is early. The desk is being built in public. You are welcome at the
            beginning.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href={site.github}>Get Started</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href={site.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
