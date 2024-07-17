import { CtaSection } from "./cta-section";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { Navbar } from "./navbar";
import { Projects } from "./projects";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <CtaSection />
        <Footer />
      </main>
    </>
  );
}
