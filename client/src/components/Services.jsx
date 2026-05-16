import React from "react";
import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  Code,
  ShoppingCart,
} from "lucide-react";

const services = [
  {
    icon: <MonitorSmartphone size={48} />,
    title: "Web & Mobile Design",
    desc: "Designing responsive, modern UIs for both web and mobile apps.",
    backText: "Figma, Tailwind, Responsive Layouts, UX Research",
  },
  {
    icon: <Code size={48} />,
    title: "Web Development",
    desc: "Building fast, scalable websites using modern stacks like React.",
    backText: "React, Vite, Framer Motion, Firebase, MongoDB",
  },
  {
    icon: <ShoppingCart size={48} />,
    title: "E-commerce",
    desc: "Creating custom e-commerce solutions with payment & cart systems.",
    backText: "Stripe, Shopify, Custom Cart Flow, Admin Panels",
  },
];

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-[#3b2930] text-white py-20 px-6 md:px-20"
    >
      <div className="max-w-[1440px] mx-auto">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-12 text-center"
        >
          My Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flip-card"
            >
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front border border-[#c2926b] p-8 text-center rounded bg-transparent">
                  <div className="text-[#c2926b] mb-6">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-[#c2926b] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Back Side */}
                <div className="flip-card-back border border-[#c2926b] p-8 text-center rounded bg-[#c2926b] text-black">
                  <h4 className="text-lg font-semibold mb-3">{service.title}</h4>
                  <p className="text-sm">{service.backText}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
