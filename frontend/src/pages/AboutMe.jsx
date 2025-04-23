import React from "react";

const clients = [
  "temp1",
  "fexzns",
  "Globe-News",
  "Monfsesx",
  "Amazon",
  "CreativeCore",
  "DevStream",
  "LogicLabs",
];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="h-fit lg:min-h-screen px-6 py-16 bg-black  text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-400 mb-4">About Me</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12">
          I'm Rajender, a Frontend Developer with a passion for building elegant, functional, and responsive web apps. I specialize in React, Next.js, Tailwind, and modern web technologies. I'm eager to collaborate on impactful projects and help businesses grow through clean UI/UX.
        </p>

        <h3 className="text-2xl font-semibold text-purple-400 mb-6">
          Trusted By
        </h3>

        {/* Rotating Client List */}
        <div className="overflow-hidden whitespace-nowrap">
          <div className="animate-marquee inline-block">
            {clients.map((client, idx) => (
              <span
                key={idx}
                className="mx-8 text-cyan-400 hover:text-green-400 text-lg font-medium tracking-wide transition duration-300"
              >
                {client}
              </span>
            ))}
            {/* Repeat for continuous scroll */}
            {clients.map((client, idx) => (
              <span
                key={`repeat-${idx}`}
                className="mx-8 text-cyan-400 hover:text-green-400 text-lg font-medium tracking-wide transition duration-300"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
