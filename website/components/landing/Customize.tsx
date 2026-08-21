"use client";

import { Reorder } from "framer-motion";
import { GripVertical } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/landing/Reveal";

const starter = ["Daily Planning", "Finance", "Health", "Journal", "Career"];

export function Customize() {
  const [items, setItems] = useState(starter);

  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="customize-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#6B7280]">
            Yours, eventually
          </p>
          <h2
            id="customize-heading"
            className="mt-3 font-heading text-3xl font-semibold tracking-[-0.03em] text-[#1F2937] sm:text-4xl"
          >
            Customize your life, not a rigid system.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#6B7280]">
            Create, edit, delete, and reorder workspaces. Start from living templates —
            Career already has a resume and interview tracker; Health already has water and
            sleep. Then make Nova look like you.
          </p>
          <p className="mt-4 text-sm text-[#6B7280]">
            Drag the cards on the right. Nothing is locked. Templates are a beginning, not a
            prison.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <Reorder.Group
            axis="y"
            values={items}
            onReorder={setItems}
            className="space-y-3"
            aria-label="Reorder workspaces"
          >
            {items.map((item) => (
              <Reorder.Item
                key={item}
                value={item}
                className="flex cursor-grab items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-4 shadow-[0_8px_24px_rgba(31,41,55,0.04)] active:cursor-grabbing"
              >
                <GripVertical className="h-4 w-4 text-[#C4C9D2]" />
                <span className="font-heading text-sm font-medium text-[#1F2937]">{item}</span>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </Reveal>
      </div>
    </section>
  );
}
