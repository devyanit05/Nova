"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,box-shadow,border-color] duration-500",
        scrolled || open
          ? "border-b border-[#E5E7EB]/80 bg-[#F8F7F5]/75 shadow-[0_8px_30px_rgba(31,41,55,0.04)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Nova home" className="relative z-10">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#6B7280] transition-colors duration-300 hover:text-[#1F2937]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="ghost" size="sm" asChild>
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={site.github}>Get Started</a>
          </Button>
        </div>

        <button
          type="button"
          className="relative z-10 grid h-10 w-10 place-items-center rounded-full text-[#1F2937] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-[#E5E7EB] bg-[#F8F7F5]/95 px-5 py-6 backdrop-blur-xl lg:hidden"
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-3 py-3 text-[#1F2937]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.github}
            className="rounded-2xl px-3 py-3 text-[#6B7280]"
            onClick={() => setOpen(false)}
          >
            GitHub
          </a>
          <Button className="mt-3 w-full" asChild>
            <a href={site.github}>Get Started</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
