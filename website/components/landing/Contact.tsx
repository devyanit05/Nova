import { Button } from "@/components/ui/button";
import { contact } from "@/lib/site";
import { Reveal } from "@/components/landing/Reveal";

export function Contact() {
  return (
    <section id="contact" className="px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#6B7280]">Contact</p>
          <h2
            id="contact-heading"
            className="mt-3 font-heading text-3xl font-semibold tracking-[-0.03em] text-[#1F2937] sm:text-4xl"
          >
            Write when you have something to say.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[#6B7280]">
            Nova is built in public. A question, a correction, or an idea belongs on GitHub,
            where it stays attached to the work.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <a href={contact.href} target="_blank" rel="noreferrer">
                {contact.label}
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
