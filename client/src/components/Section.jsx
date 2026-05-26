import { motion } from "framer-motion";

export function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-10 sm:mb-14"
    >
      <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-white/70 mb-4">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base text-white/60 px-2">{subtitle}</p>
      )}
    </motion.div>
  );
}
