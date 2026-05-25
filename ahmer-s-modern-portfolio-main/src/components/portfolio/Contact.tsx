import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-28">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2rem] overflow-hidden p-[1px] bg-gradient-to-br from-cyan-400/60 via-purple-500/40 to-pink-500/60"
        >
          <div className="relative rounded-[calc(2rem-1px)] bg-[#070A12] p-10 sm:p-14 noise">
            <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-white/70 mb-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  Get in touch
                </div>
                <h2 className="font-display text-4xl sm:text-5xl font-bold leading-[1.05]">
                  Let's build something <span className="gradient-text">exceptional</span>.
                </h2>
                <p className="mt-4 text-white/60 max-w-md">
                  Have a project in mind, or just want to say hi? My inbox is always open —
                  I'll get back to you as soon as I can.
                </p>

                <div className="mt-8 space-y-3">
                  <a
                    href="mailto:hello@ahmer.me"
                    className="flex items-center gap-3 text-white/80 hover:text-white"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl glass">
                      <Mail className="h-4 w-4" />
                    </span>
                    hello@ahmer.me
                  </a>
                  <div className="flex items-center gap-3 pt-2">
                    {[
                      { Icon: Github, href: "https://github.com/" },
                      { Icon: Linkedin, href: "https://linkedin.com/" },
                    ].map(({ Icon, href }, i) => (
                      <a
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="grid h-10 w-10 place-items-center rounded-xl glass hover:bg-white/10 transition"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  setTimeout(() => setSent(false), 3500);
                }}
                className="glass rounded-2xl p-6 space-y-4"
              >
                <div>
                  <label className="text-xs uppercase tracking-widest text-white/50">Name</label>
                  <input
                    required
                    className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-cyan-400/60 transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-white/50">Email</label>
                  <input
                    required
                    type="email"
                    className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-cyan-400/60 transition"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-white/50">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-cyan-400/60 transition resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-5 py-3 text-sm font-semibold text-[#050816] hover:opacity-90 transition"
                >
                  {sent ? "Thanks — I'll be in touch!" : (<>Send message <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></>)}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
