import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { ArrowUpRight } from "lucide-react";

const works = [
  {
    title: "Academia",
    category: "Website",
    desc: "Modern academic platform with course catalogs and clean information hierarchy.",
    tech: ["React", "Tailwind", "Vite"],
    image: "https://www.ahmer.me/portfolio1.png",
    href: "https://academia-seven-omega.vercel.app/",
  },
  {
    title: "ACME",
    category: "Website",
    desc: "Bold marketing site with strong typography and conversion-focused sections.",
    tech: ["React", "Framer Motion"],
    image: "https://www.ahmer.me/portfolio2.png",
    href: "https://acme0.vercel.app/",
  },
  {
    title: "Code Upscale",
    category: "Website",
    desc: "Agency landing page with rich animation and a refined dark aesthetic.",
    tech: ["React", "Tailwind"],
    image: "https://www.ahmer.me/portfolio3.png",
    href: "https://code-upscale.vercel.app/",
  },
  {
    title: "Estore",
    category: "E-commerce",
    desc: "Storefront with product grid, cart and a clean checkout flow.",
    tech: ["React", "Stripe"],
    image: "https://www.ahmer.me/portfolio4.png",
    href: "https://e-store0.vercel.app/",
  },
  {
    title: "Genial",
    category: "Website",
    desc: "Editorial-style site balancing imagery and refined typography.",
    tech: ["React", "Tailwind"],
    image: "https://www.ahmer.me/portfolio5.png",
    href: "https://genial-one.vercel.app/",
  },
  {
    title: "Neve",
    category: "Website",
    desc: "Minimal, fast, content-led marketing site with strong visual rhythm.",
    tech: ["React", "Vite"],
    image: "https://www.ahmer.me/portfolio6.png",
    href: "https://neve-zeta.vercel.app/",
  },
];

export function Works() {
  return (
    <section id="works" className="relative py-28">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader
          eyebrow="Selected Works"
          title={<>Recent <span className="gradient-text">projects</span></>}
          subtitle="A selection of work spanning marketing sites, product UIs and e-commerce."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {works.map((w, i) => (
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
                <div className="p-6">
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

      </div>
    </section>
  );
}
