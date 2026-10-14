import type { Metadata } from "next";
import { ProsePage } from "@/components/site/ProsePage";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Journal and finances are not content. Nova does not sell life data.",
};

export default function PrivacyPage() {
  return (
    <ProsePage
      eyebrow="Privacy"
      title="Your life is not content."
      lede="This is the promise. A longer policy will ship with the first hosted app. Until then, the rules below are the product."
    >
      <ul>
        <li>No ads against journal entries, spending, or health.</li>
        <li>No selling life data. Not to advertisers, not to data brokers, not as a “partnership.”</li>
        <li>A coach, when it exists, sees private text only when you explicitly ask it to look.</li>
        <li>You can export everything. You can leave.</li>
      </ul>
      <p>
        The site you are reading is static. It does not ask you to sign in, and it does not
        store a day. The first app keeps that day on your device.
      </p>
    </ProsePage>
  );
}
