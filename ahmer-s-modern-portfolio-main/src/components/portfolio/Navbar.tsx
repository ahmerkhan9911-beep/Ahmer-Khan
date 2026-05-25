import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#works", label: "Works" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = links.map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 px-5 py-3 transition-all ${
          scrolled ? "glass shadow-lg shadow-black/30" : "bg-transparent"
        }`}
      >
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 text-[#050816]">
            A
          </span>
          <span className="hidden sm:inline">Ahmer<span className="gradient-text">.</span></span>
        </a>

        <ul className="hidden md:flex items-center gap-1 rounded-full bg-white/5 p-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative inline-block rounded-full px-4 py-1.5 text-sm transition-colors ${
                  active === l.href.slice(1)
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {active === l.href.slice(1) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border border-white/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-white text-[#050816] px-5 py-2 text-sm font-semibold hover:bg-white/90 transition"
        >
          Hire Me
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-9 w-9 place-items-center rounded-full bg-white/10"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-4 right-4 md:hidden glass rounded-2xl p-4"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm hover:bg-white/10"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-white text-[#050816] px-4 py-3 text-sm font-semibold"
              >
                Hire Me
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
