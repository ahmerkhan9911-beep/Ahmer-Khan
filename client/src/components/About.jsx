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
    <section id="about" className="relative py-28">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader
          eyebrow="About me"
          title={<>The person <span className="gradient-text">behind the pixels</span></>}
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="font-display text-2xl font-semibold mb-4">
              I'm a Web Developer who loves building clean, responsive & unique websites.
            </h3>
            <p className="text-white/70 leading-relaxed">
              Passionate about creating user-friendly, responsive interfaces with HTML, CSS,
              JavaScript, and React. Currently learning full-stack development using Node.js and
              MongoDB, with a focus on writing clean and efficient code.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              I believe in continuous learning, solving real problems, and turning ideas into
              impactful digital solutions through creative thinking and code.
            </p>

            <a
              href="/ahmerCV.pdf"
              download
              className="mt-6 group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3 text-sm font-semibold text-[#050816] hover:opacity-95 transition"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 hover:bg-white/[0.07] transition group"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 mb-4 group-hover:scale-110 transition">
                  <s.icon className="h-5 w-5 text-cyan-300" />
                </div>
                <div className="font-display text-3xl font-bold gradient-text">{s.value}</div>
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
