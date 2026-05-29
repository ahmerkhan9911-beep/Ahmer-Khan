// src/App.jsx
import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy-load below-the-fold sections to reduce initial JS bundle
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Services = lazy(() => import("./components/Services"));
const Works = lazy(() => import("./components/Works"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className="relative min-h-screen text-white noise">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Services />
          <Works />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
