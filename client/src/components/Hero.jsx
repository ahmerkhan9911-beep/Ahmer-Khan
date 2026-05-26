import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { useEffect, useRef } from "react";
import { MagneticButton } from "./MagneticButton";
import ahmerImg from "../assets/heroImage.png";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const socialLinks = [
  { Icon: FaInstagram, href: "https://www.instagram.com/ahmer_011/", label: "Instagram" },
  { Icon: FaFacebookF, href: "https://www.facebook.com/ahmer.khan.1088/", label: "Facebook" },
  { Icon: FaTwitter, href: "https://x.com", label: "Twitter" },
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/ahmer-khan-0b4446318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
];

const Hero = () => {
  const reduced = useReducedMotion();
  const spotlightRef = useRef(null);
  const cardRef = useRef(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 18,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 18,
  });

  useEffect(() => {
    if (reduced) return;
    const onMove = (e) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(34,211,238,0.10), transparent 45%)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced]);

  const handleCardMove = (e) => {
    if (reduced || !cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleCardLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden"
    >
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 -z-10 hidden md:block transition-[background] duration-300"
      />

      {/* Background blobs — hidden on small mobile to prevent overflow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
        <motion.div
          animate={reduced ? undefined : { y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-0 sm:right-10 h-32 w-32 sm:h-40 sm:w-40 rounded-3xl bg-gradient-to-br from-cyan-400/30 to-blue-600/30 blur-2xl"
        />
        <motion.div
          animate={reduced ? undefined : { y: [0, 30, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-0 sm:left-10 h-40 w-40 sm:h-52 sm:w-52 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/20 blur-2xl"
        />
        <motion.div
          animate={reduced ? undefined : { scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[300px] w-[300px] sm:h-[520px] sm:w-[520px] rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-purple-600/25 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center">
          <motion.div variants={container} initial="hidden" animate="show">
            {/* Available badge */}
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-white/80 mb-5 sm:mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for freelance work
            </motion.div>

            {/* Headline — responsive sizing */}
            <h1 className="font-display text-[clamp(2.2rem,10vw,3rem)] sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight">
              <motion.span variants={item} className="block">
                Hi, I'm <span className="gradient-text">Ahmer Khan</span>
              </motion.span>
              <motion.span variants={item} className="block text-white/90">
                crafting digital
              </motion.span>
              <motion.span variants={item} className="block text-white/90">
                experiences.
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              variants={item}
              className="mt-5 sm:mt-6 max-w-xl text-sm sm:text-base lg:text-lg text-white/60 leading-relaxed"
            >
              Web Developer &amp; Designer passionate about building clean, responsive,
              and unique websites. I turn ideas into fast, functional, and beautiful digital
              experiences.
            </motion.p>

            {/* CTA buttons — stack on mobile */}
            <motion.div variants={item} className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <MagneticButton
                href="#works"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3 text-sm font-semibold text-[#050816] hover:opacity-95 transition glow-cyan w-full sm:w-auto"
              >
                View Portfolio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton
                href="/ahmerCV.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold hover:bg-white/10 transition w-full sm:w-auto"
              >
                <Download className="h-4 w-4" /> Download CV
              </MagneticButton>
            </motion.div>

            {/* Social links — wrap-safe on mobile */}
            <motion.div variants={item} className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="text-xs uppercase tracking-widest text-white/40 hidden sm:inline">Follow</span>
              <div className="h-px w-8 sm:w-12 bg-white/20 hidden sm:block" />
              {socialLinks.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-white/10 hover:border-cyan-400/40 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile visual — hidden on mobile and tablet, shown on lg */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto perspective-1200 hidden lg:block"
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleCardMove}
              onMouseLeave={handleCardLeave}
              style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
              className="relative"
            >
              <motion.div
                animate={reduced ? undefined : { rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{ transform: "translateZ(-40px)" }}
                className="absolute -inset-6 rounded-full border border-dashed border-white/20 pointer-events-none"
              />
              <motion.div
                animate={reduced ? undefined : { rotate: -360 }}
                transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                style={{ transform: "translateZ(-60px)" }}
                className="absolute -inset-14 rounded-full border border-dashed border-white/10 pointer-events-none"
              />

              {/* Backdrop circle */}
              <div
                className="relative h-80 w-80 sm:h-[22rem] sm:w-[22rem] rounded-full glow-purple"
                style={{ transform: "translateZ(20px)" }}
              >
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/25 via-transparent to-purple-600/30" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_115%,rgba(34,211,238,0.4),transparent_60%)]" />
                </div>
                <div className="absolute inset-0 rounded-full border border-white/10" />

                {/* Image — NOT clipped so head/arms aren't cut */}
                <img
                  src={ahmerImg}
                  alt="Ahmer Khan"
                  loading="eager"
                  className="absolute bottom-0 left-1/2 h-[110%] w-auto max-w-none object-contain object-bottom select-none pointer-events-none drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)]"
                  style={{ transform: "translate(-50%, 0) translateZ(60px)" }}
                />
              </div>

              <motion.div
                animate={reduced ? undefined : { y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: "translateZ(80px)" }}
                className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="text-2xl font-bold gradient-text">3+</div>
                <div className="text-[10px] uppercase tracking-wider text-white/60">Years</div>
              </motion.div>

              <motion.div
                animate={reduced ? undefined : { y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: "translateZ(80px)" }}
                className="absolute -bottom-2 -left-6 glass rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="text-2xl font-bold gradient-text">20+</div>
                <div className="text-[10px] uppercase tracking-wider text-white/60">Projects</div>
              </motion.div>

              <motion.div
                animate={reduced ? undefined : { y: [0, -8, 0], x: [0, 4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: "translateZ(70px)" }}
                className="absolute top-1/2 -left-10 flex items-center gap-2 glass rounded-full px-3 py-1.5 shadow-xl"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] uppercase tracking-wider text-white/70">
                  Open to work
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
