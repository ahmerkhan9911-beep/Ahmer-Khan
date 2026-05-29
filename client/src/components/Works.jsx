import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { ArrowUpRight } from "lucide-react";

const works = [
  {
    title: "Academia",
    category: "Website",
    desc: "Modern academic platform with course catalogs and clean information hierarchy.",
    tech: ["React", "Tailwind", "Vite"],
    image: "/portfolio1.png",
    href: "https://academia-seven-omega.vercel.app/",
  },
  {
    title: "ACME",
    category: "Website",
    desc: "Bold marketing site with strong typography and conversion-focused sections.",
    tech: ["React", "Framer Motion"],
    image: "/portfolio2.png",
    href: "https://acme0.vercel.app/",
  },
  {
    title: "Code Upscale",
    category: "Website",
    desc: "Agency landing page with rich animation and a refined dark aesthetic.",
    tech: ["React", "Tailwind"],
    image: "/portfolio3.png",
    href: "https://code-upscale.vercel.app/",
  },
  {
    title: "Estore",
    category: "E-commerce",
    desc: "Storefront with product grid, cart and a clean checkout flow.",
    tech: ["React", "Stripe"],
    image: "/portfolio4.png",
    href: "https://e-store0.vercel.app/",
  },
  {
    title: "Genial",
    category: "Website",
    desc: "Editorial-style site balancing imagery and refined typography.",
    tech: ["React", "Tailwind"],
    image: "/portfolio5.png",
    href: "https://genial-one.vercel.app/",
  },
  {
    title: "Neve",
    category: "Website",
    desc: "Minimal, fast, content-led marketing site with strong visual rhythm.",
    tech: ["React", "Vite"],
    image: "/portfolio6.png",
    href: "https://neve-zeta.vercel.app/",
  },
  {
    title: "Portfolio",
    category: "Website",
    desc: "Personal portfolio site with custom animations and smooth scrolling.",
    tech: ["React", "CSS"],
    image: "/portfolio7.png",
    href: "https://jksdghjkasdjasdjk213892728913.vercel.app/",
  },
  {
    title: "Code & Canvas",
    category: "Website",
    desc: "Creative studio site with dynamic animations and a refined dark aesthetic.",
    tech: ["React", "Framer Motion"],
    image: "/portfolio8.png",
    href: "https://code-and-canvas-seven.vercel.app/",
  },
  {
    title: "Eventify",
    category: "Website",
    desc: "Event management platform with schedules, speakers, and ticket flows.",
    tech: ["React", "Tailwind", "Vite"],
    image: "/portfolio9.png",
    href: "https://eventify-one-beta.vercel.app/",
  },
  {
    title: "LahoreLink Logistics",
    category: "Website",
    desc: "Logistics company site with service overviews and tracking features.",
    tech: ["React", "Node.js"],
    image: "/portfolio10.png",
    href: "https://lahorelinklogistics.com/",
  },
];

const Works = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleWorks = showAll ? works : works.slice(0, 6);

  return (
    <section id="works" className="relative py-16 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <SectionHeader
          eyebrow="Selected Works"
          title={<>Recent <span className="gradient-text">projects</span></>}
          subtitle="A selection of work spanning marketing sites, web applications, and e-commerce."
        />

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {visibleWorks.map((w, i) => (
            <motion.a
              key={w.title}
              href={w.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl block p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-white/10 hover:from-cyan-400/50 hover:via-purple-500/30 hover:to-pink-500/40 transition-colors duration-500"
            >
              <div className="relative glass rounded-[calc(1.5rem-1px)] overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <img
                    src={w.image}
                    alt={w.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute top-4 left-4 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs text-white/80 border border-white/10">
                    {w.category}
                  </div>
                  <div className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white text-[#050816] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-display text-xl font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{w.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {w.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[11px] text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Show More / Show Less */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center rounded-full glass px-8 py-3 text-sm font-semibold hover:bg-white/10 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
