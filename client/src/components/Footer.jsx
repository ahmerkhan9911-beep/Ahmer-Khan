import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const socialLinks = [
  { Icon: FaInstagram, href: "https://www.instagram.com/ahmer_011/" },
  { Icon: FaFacebookF, href: "https://www.facebook.com/ahmer.khan.1088/" },
  { Icon: FaTwitter, href: "https://x.com" },
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/ahmer-khan-0b4446318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
];

const Footer = () => {
  return (
    <footer className="relative mt-10">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-sm text-white/60">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-cyan-400 to-purple-500 text-[#050816] font-bold text-xs">
            A
          </span>
          <span className="mt-2 sm:mt-0">© {new Date().getFullYear()} Ahmer Khan. All rights reserved.</span>
        </div>
        <nav className="flex gap-6 text-sm text-white/60">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#works" className="hover:text-white transition">Works</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <div className="flex gap-3">
          {socialLinks.map(({ Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10 transition">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
