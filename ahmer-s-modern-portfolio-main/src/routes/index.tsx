import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Works } from "@/components/portfolio/Works";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen text-white noise">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Works />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
