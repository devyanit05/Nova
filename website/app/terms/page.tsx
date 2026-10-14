import type { Metadata } from "next";
import { site } from "@/lib/site";
import { ProsePage } from "@/components/site/ProsePage";

export const metadata: Metadata = {
  title: "Terms",
  description: "Nova is early, open source, and offered as-is while it is built in public.",
};

export default function TermsPage() {
  return (
    <ProsePage
      eyebrow="Terms"
      title="Early, and offered as-is."
      lede="Nova is being built in public. Use it with that in mind."
    >
      <p>
        The software is open source. The{" "}
        <a className="text-[#7C6CF2] underline-offset-4 hover:underline" href={site.license}>
          MIT license
        </a>{" "}
        on GitHub is the legal home of the code. There is no paid plan, no account, and no
        warranty while the desk is still being made.
      </p>
      <p>
        The marketing site describes an intention. Features named here are not a contract
        until they exist in the app. When accounts exist, these terms will be rewritten in
        plain language before anyone is asked to agree.
      </p>
    </ProsePage>
  );
}
