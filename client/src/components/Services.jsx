import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { Server, Globe, Layout, Code2, ShoppingBag, LayoutDashboard } from "lucide-react";

const services = [
  { icon: Code2, title: "Full Stack Web Development", desc: "Complete frontend and backend web applications using modern JavaScript technologies." },
  { icon: Layout, title: "Frontend Development", desc: "Responsive, fast, and modern user interfaces built with React, Vite, and Tailwind CSS." },
  { icon: Server, title: "Backend Development", desc: "Secure APIs, authentication, database integration, and server-side logic using Node.js and Express." },
  { icon: Globe, title: "MERN Stack Applications", desc: "Scalable web apps using MongoDB, Express, React, and Node.js." },
  { icon: ShoppingBag, title: "Ecommerce Development", desc: "Product listings, cart systems, user authentication, admin panels, and order management." },
  { icon: LayoutDashboard, title: "Dashboard / Admin Panels", desc: "Clean and functional dashboards for managing users, data, orders, and business workflows." },
];

const Services = () => {
  return (
    <section id="services" className="relative py-16 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <SectionHeader
          eyebrow="Services"
          title={<>What I <span className="gradient-text">do best</span></>}
          subtitle="End-to-end development — from concept to deployed, production-ready application."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-3xl p-5 sm:p-7 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/30 group-hover:to-purple-500/20 blur-2xl transition-all duration-500" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 mb-5 group-hover:scale-110 transition">
                  <s.icon className="h-5 w-5 text-cyan-300" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
