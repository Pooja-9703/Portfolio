import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero is not wrapped in AnimatedSection — it has its own entrance animations */}
        <Hero />

        <AnimatedSection id="about" className="border-t border-white/5">
          <About />
        </AnimatedSection>

        <AnimatedSection id="skills" className="border-t border-white/5">
          <Skills />
        </AnimatedSection>

        <AnimatedSection id="projects" className="border-t border-white/5">
          <Projects />
        </AnimatedSection>

        <AnimatedSection id="journey" className="border-t border-white/5">
          <Journey />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
