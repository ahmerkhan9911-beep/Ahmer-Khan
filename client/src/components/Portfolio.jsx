import React, { useState } from "react";
import { motion } from "framer-motion";

// Project data with live Vercel links
const projects = [
  {
    id: 1,
    title: "Academia",
    category: "Website",
    image: "/portfolio1.png",
    link: "https://academia-seven-omega.vercel.app/",
  },
  {
    id: 2,
    title: "ACME",
    category: "Website",
    image: "/portfolio2.png",
    link: "https://acme0.vercel.app/",
  },
  {
    id: 3,
    title: "Code Upscale",
    category: "Website",
    image: "/portfolio3.png",
    link: "https://code-upscale.vercel.app/",
  },
  {
    id: 4,
    title: "Estore",
    category: "Website",
    image: "/portfolio4.png",
    link: "https://e-store0.vercel.app/",
  },
  {
    id: 5,
    title: "Genial",
    category: "Website",
    image: "/portfolio5.png",
    link: "https://genial-one.vercel.app/",
  },
  {
    id: 6,
    title: "Neve",
    category: "Website",
    image: "/portfolio6.png",
    link: "https://neve-zeta.vercel.app/",
  },
  {
    id: 7,
    title: "Portfolio",
    category: "Website",
    image: "/portfolio7.png",
    link: "https://jksdghjkasdjasdjk213892728913.vercel.app/",
  },
  {
    id: 8,
    title: "Code & Canvas",
    category: "Website",
    image: "/portfolio8.png",
    link: "https://code-and-canvas-seven.vercel.app/",
  },
  {
    id: 9,
    title: "Eventify",
    category: "Website",
    image: "/portfolio9.png",
    link: "https://eventify-one-beta.vercel.app/",
  },
  {
    id: 10,
    title: "LahoreLink Logistics",
    category: "Website",
    image: "/portfolio10.png",
    link: "https://lahorelinklogistics.com/",
  },
];

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <motion.section
      id="works"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-[#311e25] py-20 px-6 md:px-20 text-white"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-12 text-center"
        >
          My Works
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.2 }}
              className="space-y-3 text-center w-full rounded-lg overflow-hidden cursor-pointer shadow-md"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded object-cover h-60 w-full transition-transform duration-200"
                />
                <p className="text-sm text-[#c2926b] mt-2">{item.category}</p>
                <h3 className="text-md text-white font-medium">{item.title}</h3>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Toggle Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="border border-[#c2926b] text-[#c2926b] hover:bg-[#c2926b] hover:text-black px-6 py-2 text-sm md:text-base rounded transition-all duration-300"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
