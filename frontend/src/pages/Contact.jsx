import React from "react";
import Spline from "@splinetool/react-spline";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-16 bg-black border-b border-gray-700"
    >
      {/* Spline Visual */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <div className="w-110 h-80 md:w-96 md:h-96 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.2)] border border-cyan-400">
          <Spline scene="/Contact2.splinecode" />
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full md:w-1/2 max-w-lg text-white space-y-6">
        <h2 className="text-4xl font-bold text-teal-400 mb-2">Let's Connect</h2>
        <p className="text-gray-400 mb-4">
          Have a project in mind or just want to say hello? Feel free to reach out!
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button
            type="submit"
            className="w-full px-4 py-3 bg-cyan-400 hover:bg-purple-500 text-black font-semibold rounded-md transition-all duration-300 hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
