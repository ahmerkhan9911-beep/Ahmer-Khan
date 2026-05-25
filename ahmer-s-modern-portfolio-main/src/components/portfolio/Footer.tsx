import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-10">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="container mx-auto px-6 max-w-6xl py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-white/60">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-cyan-400 to-purple-500 text-[#050816] font-bold text-xs">
            A
          </span>
          © {new Date().getFullYear()} Ahmer Khan. All rights reserved.
        </div>
        <nav className="flex gap-6 text-sm text-white/60">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#works" className="hover:text-white">Works</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="flex gap-3">
          {[
            { Icon: Github, href: "https://github.com/" },
            { Icon: Linkedin, href: "https://linkedin.com/" },
            { Icon: Mail, href: "mailto:hello@ahmer.me" },
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10 transition">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
