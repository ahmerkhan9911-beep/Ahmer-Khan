import React, { useEffect } from "react";
import { motion } from "framer-motion";
import bg from "../assets/banner.png";
import ahmerImg from "../assets/heroImage.png";

const Hero = () => {
  useEffect(() => {
    // Force a layout recalculation
    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-[95vh] pt-16 md:pt-16 bg-cover bg-center bg-no-repeat px-6 md:px-20 flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 text-white px-2 md:px-0 h-full">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-[600px] w-full mb-6 md:mb-0 text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-light leading-tight whitespace-normal"
          >
            Hi There, I Am <span className="font-semibold">Ahmer Khan</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#c2926b] font-light leading-tight mt-2 mb-6"
          >
            Web Developer
          </motion.h2>

          <motion.a
            href="#works"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="inline-block border border-[#c2926b] text-[#c2926b] hover:bg-[#c2926b] hover:text-black px-6 py-3 text-base md:text-lg rounded transition-all duration-300"
          >
            View Works
          </motion.a>
        </motion.div>

        {/* Right Image */}
        <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, delay: 0.5 }}
  className="hidden md:flex justify-end items-end w-full hide-after-1506"
>
  <img
    src={ahmerImg}
    alt="Ahmer Khan"
    loading="eager"
    className="h-[80vh] lg:h-[90vh] w-auto object-bottom object-contain"
  />
</motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
