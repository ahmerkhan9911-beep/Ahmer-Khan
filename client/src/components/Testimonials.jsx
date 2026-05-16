import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Kalvin Piterson",
    title: "Business Owner",
    image: "/client.png",
    feedback:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour or randomised words which don’t look even slightly believable.",
  },
  {
    name: "Sana Malik",
    title: "Marketing Lead",
    image: "/client.png",
    feedback:
      "Ahmer delivered the project exactly how we wanted. Super efficient and reliable.",
  },
];

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-[#3b2930] py-24 px-6 md:px-20 text-white relative"
    >
      <div className="max-w-[1440px] mx-auto relative">
        {/* Arrows top-right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute top-0 right-0 flex gap-4 z-10"
        >
          <button
            ref={prevRef}
            className="w-10 h-10 rounded-full border border-[#c2926b] text-[#c2926b] hover:bg-[#c2926b] hover:text-black transition"
          >
            ‹
          </button>
          <button
            ref={nextRef}
            className="w-10 h-10 rounded-full border border-[#c2926b] text-[#c2926b] hover:bg-[#c2926b] hover:text-black transition"
          >
            ›
          </button>
        </motion.div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          loop={true}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="max-w-[900px]"
              >
                <h2 className="text-3xl font-semibold mb-6">What Clients say</h2>
                <p className="text-lg leading-relaxed mb-6 max-w-[700px] font-light">
                  “{item.feedback}”
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-[#c2926b] font-semibold text-lg">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-400">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Testimonials;
