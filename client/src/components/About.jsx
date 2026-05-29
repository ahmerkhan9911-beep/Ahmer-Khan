import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { Briefcase, Code2, Sparkles, Users, Download } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Projects", value: "20+" },
  { icon: Users, label: "Happy Clients", value: "15+" },
  { icon: Code2, label: "Years coding", value: "3+" },
  { icon: Sparkles, label: "Cups of coffee", value: "∞" },
];

const About = () => {
  return (
    <section id="about" className="relative py-16 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <SectionHeader
          eyebrow="About me"
          title={<>The developer <span className="gradient-text">behind the code</span></>}
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-5 sm:p-8"
          >
            <h3 className="font-display text-xl sm:text-2xl font-semibold mb-4">
              I'm a Full Stack Web Developer who builds clean, responsive, and functional web applications.
            </h3>
            <p className="text-white/70 leading-relaxed">
              I work with modern frontend and backend technologies including React, Vite,
              Tailwind CSS, Node.js, Express, MongoDB, and MySQL. I enjoy turning ideas into
              real, usable products with clean code, smooth user experiences, and scalable architecture.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              I believe in continuous learning, solving real problems, and building applications
              that make a real impact — from concept to deployment.
            </p>

            <a
              href="/ahmerCV.pdf"
              download
              className="mt-6 group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3 text-sm font-semibold text-[#050816] hover:opacity-95 transition"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-4 sm:p-6 hover:bg-white/[0.07] transition group"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 mb-4 group-hover:scale-110 transition">
                  <s.icon className="h-5 w-5 text-cyan-300" />
                </div>
                <div className="font-display text-2xl sm:text-3xl font-bold gradient-text">{s.value}</div>
                <div className="mt-1 text-sm text-white/60">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
