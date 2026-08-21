"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/content";
import { Reveal } from "@/components/landing/Reveal";

export function FAQ() {
  return (
    <section id="faq" className="px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.22em] text-[#6B7280]">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mt-3 text-center font-heading text-3xl font-semibold tracking-[-0.03em] text-[#1F2937] sm:text-4xl"
          >
            A few quiet answers.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-12">
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqs.map((item) => (
              <Accordion.Item
                key={item.q}
                value={item.q}
                className="overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-heading text-[15px] font-semibold text-[#1F2937]">
                    {item.q}
                    <ChevronDown className="h-4 w-4 shrink-0 text-[#6B7280] transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-none">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-[#6B7280]">{item.a}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  );
}
