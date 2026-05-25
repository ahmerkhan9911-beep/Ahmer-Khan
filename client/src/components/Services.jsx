import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { Palette, Globe, Layout, Code2, Smartphone, ShoppingBag } from "lucide-react";

const services = [
  { icon: Palette, title: "UI/UX Design", desc: "Designing thoughtful, accessible interfaces grounded in user research." },
  { icon: Layout, title: "Website Design", desc: "Modern responsive layouts that feel polished on every screen." },
  { icon: Code2, title: "Frontend Development", desc: "Production-ready React, Vite and Tailwind builds with clean code." },
  { icon: Smartphone, title: "Web & Mobile UI", desc: "Responsive UIs for web and native-feeling mobile experiences." },
  { icon: Globe, title: "Landing Page Design", desc: "High-converting landing pages crafted around your brand story." },
  { icon: ShoppingBag, title: "E-commerce", desc: "Custom storefronts with cart, payments and admin flows." },
];

const Services = () => {
  return (
    <section id="services" className="relative py-28">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader
          eyebrow="Services"
          title={<>What I <span className="gradient-text">do best</span></>}
          subtitle="End-to-end product work — from first sketch to shipped interface."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-3xl p-7 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/30 group-hover:to-purple-500/20 blur-2xl transition-all duration-500" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 mb-5 group-hover:scale-110 transition">
                  <s.icon className="h-5 w-5 text-cyan-300" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
