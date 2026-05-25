import { motion } from "framer-motion";
import { SectionHeader } from "./Section";

const groups = [
  {
    title: "Design",
    color: "from-cyan-400 to-blue-500",
    items: ["Figma", "UI/UX", "Wireframing", "Prototyping", "UX Research"],
  },
  {
    title: "Frontend",
    color: "from-purple-400 to-pink-500",
    items: ["React", "Vite", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
  {
    title: "Tools",
    color: "from-emerald-400 to-cyan-500",
    items: ["GitHub", "VS Code", "Vercel", "Firebase", "MongoDB"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader
          eyebrow="Skills & Tools"
          title={<>My <span className="gradient-text">toolkit</span></>}
          subtitle="The technologies and tools I use to bring ideas to life."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass rounded-3xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${g.color}`} />
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.1 + i * 0.05 }}
                    whileHover={{ y: -3 }}
                    className="rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-sm text-white/80 hover:bg-white/10 hover:border-white/20 transition cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
