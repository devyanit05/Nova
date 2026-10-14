import type { ReactNode } from "react";

export function ProsePage({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children: ReactNode;
}) {
  return (
    <article id="content" className="mx-auto max-w-2xl px-5 pb-28 pt-32 sm:px-8">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#6B7280]">{eyebrow}</p>
      <h1 className="mt-3 font-heading text-4xl font-semibold tracking-[-0.03em] text-[#1F2937] sm:text-5xl">
        {title}
      </h1>
      {lede ? <p className="mt-5 text-lg leading-relaxed text-[#6B7280]">{lede}</p> : null}
      <div className="mt-10 space-y-5 text-base leading-relaxed text-[#6B7280] [&>h2]:mt-10 [&>h2]:font-heading [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:tracking-[-0.02em] [&>h2]:text-[#1F2937] [&_h2]:font-heading [&_h2]:font-semibold [&_h2]:tracking-[-0.02em] [&_h2]:text-[#1F2937] [&_li]:mt-2 [&_strong]:font-medium [&_strong]:text-[#1F2937] [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
        {children}
      </div>
    </article>
  );
}
