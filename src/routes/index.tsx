import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { ProofStrip } from "@/components/site/ProofStrip";
import { Projects } from "@/components/site/Projects";
import { POV } from "@/components/site/POV";
import { FooterCTA } from "@/components/site/FooterCTA";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Gustavo Macedo — AI-First Product Manager" },
      {
        name: "description",
        content:
          "AI-first PM building faster, shipping deeper, and bringing customers into the room. BYU Marriott MBA.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <ProofStrip />
      <LogoMarquee />
      <Projects />
      <POV />
      <FooterCTA />
    </main>
  );
}
