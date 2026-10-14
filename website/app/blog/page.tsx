import type { Metadata } from "next";
import { ProsePage } from "@/components/site/ProsePage";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes from building Nova. No posts yet.",
};

export default function BlogPage() {
  return (
    <ProsePage
      eyebrow="Blog"
      title="Nothing published yet."
      lede="When there is something worth reading — a decision, a release, a change of mind — it will live here."
    >
      <p>Until then, the building is the journal. The changelog is the honest record.</p>
    </ProsePage>
  );
}
