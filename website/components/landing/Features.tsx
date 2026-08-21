import { features } from "@/lib/content";
import { Reveal } from "@/components/landing/Reveal";
import { FeatureArt } from "@/components/landing/FeatureArt";

export function Features() {
  return (
    <section id="features" className="px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="features-heading">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#6B7280]">
            Inside the OS
          </p>
          <h2
            id="features-heading"
            className="mt-3 max-w-2xl font-heading text-3xl font-semibold tracking-[-0.03em] text-[#1F2937] sm:text-4xl"
          >
            A desk with room for the whole of you.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-20 sm:space-y-28">
          {features.map((feature, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={feature.title}>
                <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <div className={reverse ? "lg:order-2" : undefined}>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7C6CF2]">
                      {feature.kicker}
                    </p>
                    <h3 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.03em] text-[#1F2937] sm:text-3xl">
                      {feature.title}
                    </h3>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-[#6B7280]">
                      {feature.body}
                    </p>
                  </div>
                  <div className={reverse ? "lg:order-1" : undefined}>
                    <FeatureArt index={i} />
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
