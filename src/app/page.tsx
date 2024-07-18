import { CtaSection } from "./(components)/cta-section";
import { Footer } from "./(components)/footer";
import { Hero } from "./(components)/hero";
import { Navbar } from "./(components)/navbar";
import { Projects } from "./(components)/projects";

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
