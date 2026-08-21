import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#6B7280]">
            A Life Operating System. One calm desk for the whole of your life.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#6B7280]">Nova</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-[#1F2937] hover:text-[#7C6CF2]">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#6B7280]">
            Elsewhere
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.github} className="text-[#1F2937] hover:text-[#7C6CF2]">
                GitHub
              </a>
            </li>
            <li>
              <a href={site.docs} className="text-[#1F2937] hover:text-[#7C6CF2]">
                Documentation
              </a>
            </li>
            <li>
              <a href={site.license} className="text-[#1F2937] hover:text-[#7C6CF2]">
                License
              </a>
            </li>
            <li>
              <Link href="/privacy" className="text-[#1F2937] hover:text-[#7C6CF2]">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-[#1F2937] hover:text-[#7C6CF2]">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#E5E7EB] py-6 text-center text-xs text-[#6B7280]">
        © {new Date().getFullYear()} Nova. Built slowly, in public.
      </div>
    </footer>
  );
}
