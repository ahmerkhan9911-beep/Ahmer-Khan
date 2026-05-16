import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-[#241b1e] text-white py-20 px-6 md:px-20"
      style={{
        backgroundImage: `url('./src/assets/banner.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1440px] mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-4">
          Do you have any Project?{" "}
          <span className="text-[#c2926b]">Let’s Talk</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Feel free to reach out — I’d love to discuss how we can build
          something awesome together.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href="https://www.instagram.com/ahmer_011/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-[#c2926b] px-6 py-3 rounded hover:bg-[#c2926b] hover:text-black transition"
          >
            <FaInstagram size={20} /> Instagram
          </a>
          <a
            href="https://www.facebook.com/ahmer.khan.1088/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-[#c2926b] px-6 py-3 rounded hover:bg-[#c2926b] hover:text-black transition"
          >
            <FaFacebookF size={20} /> Facebook
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-[#c2926b] px-6 py-3 rounded hover:bg-[#c2926b] hover:text-black transition"
          >
            <FaTwitter size={20} /> Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/ahmer-khan-0b4446318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-[#c2926b] px-6 py-3 rounded hover:bg-[#c2926b] hover:text-black transition"
          >
            <FaLinkedinIn size={20} /> LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Ahmer Khan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
