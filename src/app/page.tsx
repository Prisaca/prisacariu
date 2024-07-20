import dynamic from "next/dynamic";
import { CtaSection } from "./(components)/cta-section";
import { Footer } from "./(components)/footer";
import { Hero } from "./(components)/hero";
import { Navbar } from "./(components)/navbar";
import { Projects } from "./(components)/projects";

const Locomotive = dynamic(() => import("../features/locomotive/locomotive"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <>
      <Locomotive />
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
