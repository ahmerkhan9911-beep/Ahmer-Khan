import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";
import mobileLogo from "../assets/mobile-logo.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#works", label: "Works" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
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

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* ─── Dark Overlay when mobile menu is open ─── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[998] bg-[#050816]/60 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <header className="fixed top-0 left-0 right-0 z-[1000] px-4 pt-4 pointer-events-none">
        {/* ─── Desktop + Mobile nav bar ─── */}
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`glass-navbar relative mx-auto flex w-full max-w-6xl items-center justify-between rounded-full px-4 sm:px-5 py-3 pointer-events-auto transition-shadow ${
            scrolled ? "shadow-lg shadow-black/30" : ""
          }`}
        >
          <div className="relative z-10 flex w-full items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center">
              {/* Desktop logo */}
              <img
                src={logo}
                alt="Ahmer logo"
                className="hidden md:block h-8 sm:h-9 w-auto object-contain"
              />
              {/* Mobile logo */}
              <img
                src={mobileLogo}
                alt="Ahmer mobile logo"
                className="md:hidden h-10 w-auto object-contain"
              />
            </a>

            {/* Desktop links */}
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

            {/* Desktop Hire Me */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center rounded-full bg-white text-[#050816] px-5 py-2 text-sm font-semibold hover:bg-white/90 transition"
            >
              Hire Me
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden grid h-10 w-10 place-items-center rounded-full bg-white/10"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.nav>

        {/* ─── Mobile dropdown menu ─── */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden mobile-menu-panel relative z-[999] mx-auto mt-3 w-full max-w-6xl rounded-3xl p-5 pointer-events-auto"
            >
              <div className="relative z-10">
                {/* Mobile menu header: logo + close */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <img
                    src={mobileLogo}
                    alt="Ahmer mobile logo"
                    className="h-11 w-auto object-contain"
                  />
                  <button
                    onClick={() => setOpen(false)}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/10"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className={`flex h-11 w-full items-center rounded-2xl px-4 text-base transition-all duration-300 ${
                          active === l.href.slice(1)
                            ? "bg-white/12 text-white font-semibold shadow-inner"
                            : "font-medium text-white/90 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center justify-center rounded-2xl bg-white text-[#050816] h-12 text-sm font-semibold hover:bg-white/90 transition"
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
