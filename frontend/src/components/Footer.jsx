import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400 py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left Side */}
        <div className="text-sm">
          <span className="text-teal-400 font-semibold">© 2025 Rajender.</span>{" "}
          All rights reserved.
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 text-lg">
          <a
            href="https://github.com/Rajender216"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rajenderchhimpa/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=216rajender@gmail.com"
            target="_blank"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
