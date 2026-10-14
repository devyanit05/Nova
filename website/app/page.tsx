import { Calm } from "@/components/landing/Calm";
import { Contact } from "@/components/landing/Contact";
import { Customize } from "@/components/landing/Customize";
import { FAQ } from "@/components/landing/FAQ";
import { Features } from "@/components/landing/Features";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Hero } from "@/components/landing/Hero";
import { OpenSource } from "@/components/landing/OpenSource";
import { Problem } from "@/components/landing/Problem";
import { Vision } from "@/components/landing/Vision";
import { Workspaces } from "@/components/landing/Workspaces";

export default function HomePage() {
  return (
    <main id="content">
      <Hero />
      <Problem />
      <Workspaces />
      <Customize />
      <Calm />
      <Features />
      <Vision />
      <OpenSource />
      <FAQ />
      <Contact />
      <FinalCTA />
    </main>
  );
}
