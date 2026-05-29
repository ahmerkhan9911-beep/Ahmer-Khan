import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Toast = ({ message, onClose }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-4 left-4 right-4 sm:bottom-8 sm:left-auto sm:right-8 bg-gradient-to-r from-cyan-400 to-purple-500 text-[#050816] px-5 py-4 rounded-2xl shadow-lg z-50"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-medium">{message}</span>
        <button
          onClick={onClose}
          className="ml-4 text-[#050816] hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>
    </motion.div>
  </AnimatePresence>
);

const socialLinks = [
  { Icon: FaInstagram, href: "https://www.instagram.com/ahmer_011/" },
  { Icon: FaFacebookF, href: "https://www.facebook.com/ahmer.khan.1088/" },
  { Icon: FaTwitter, href: "https://x.com" },
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/ahmer-khan-0b4446318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
];

const Contact = () => {
  const [toastMessage, setToastMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!name || !email || !subject || !message) {
      setToastMessage("❌ Please fill all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setToastMessage("❌ Please enter a valid email.");
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setToastMessage("❌ Email service is not configured. Please check environment variables.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          subject,
          message,
          from_name: "Ahmer Portfolio",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setToastMessage("🚀 Message sent successfully. I'll get back to you soon.");
        e.target.reset();
      } else {
        setToastMessage(`❌ ${result.message || "Failed to send message. Please try again."}`);
      }
    } catch (error) {
      console.error(error);
      setToastMessage("❌ Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2rem] overflow-hidden p-[1px] bg-gradient-to-br from-cyan-400/60 via-purple-500/40 to-pink-500/60"
        >
          <div className="relative rounded-[calc(2rem-1px)] bg-[#070A12] p-5 sm:p-10 lg:p-14 noise">
            <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-white/70 mb-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  Get in touch
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08]">
                  Let's build something <span className="gradient-text">exceptional</span>.
                </h2>
                <p className="mt-4 text-white/60 max-w-md">
                  Have a project in mind? I can help you build a modern website or full stack
                  web application. My inbox is always open — I'll get back to you as soon as I can.
                </p>

                <div className="mt-8 space-y-3">
                  <a
                    href="mailto:ahmerkhan9911@gmail.com"
                    className="flex items-center gap-3 text-white/80 hover:text-white break-all sm:break-normal"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl glass">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span className="text-sm sm:text-base break-all">ahmerkhan9911@gmail.com</span>
                  </a>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {socialLinks.map(({ Icon, href }, i) => (
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
                onSubmit={sendEmail}
                className="glass rounded-2xl p-6 space-y-4"
              >
                <div>
                  <label className="text-xs uppercase tracking-widest text-white/50">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-cyan-400/60 transition text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-white/50">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-cyan-400/60 transition text-white"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-white/50">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-cyan-400/60 transition text-white"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-white/50">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-cyan-400/60 transition resize-none text-white"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-5 py-3 text-sm font-semibold text-[#050816] hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                  {!isSubmitting && <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom Toast */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage("")}
        />
      )}
    </section>
  );
};

export default Contact;
