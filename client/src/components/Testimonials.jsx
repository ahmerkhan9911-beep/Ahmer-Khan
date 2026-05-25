import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Ahmer delivered the project exactly how we wanted. Super efficient, communicative, and reliable from start to finish.",
    name: "Sana Malik",
    role: "Marketing Lead",
  },
  {
    quote:
      "Great eye for detail and a strong sense of UX. The final product felt thoughtful and well-crafted.",
    name: "Kalvin Piterson",
    role: "Business Owner",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-28">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>Kind words from <span className="gradient-text">clients</span></>}
        />

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-3xl p-8 relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-6 h-16 w-16 text-white/[0.04]" />
              <p className="text-lg leading-relaxed text-white/85">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 font-display font-bold text-[#050816]">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-white/50">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
