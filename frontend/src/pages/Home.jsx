import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <section
      id="home"
      className="h-fit lg:min-h-screen pt-28 flex flex-col md:flex-row items-center justify-center px-6 py-16 bg-black"
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <div className="w-72 h-72 rounded-full border-4 border-green-500 hover:border-purple-500 shadow-lg overflow-hidden relative hover:scale-150 transition-transform duration-300">
          <Spline
            scene="/HomeRobo.splinecode"
            className="absolute inset-0 scale-105" // You can adjust the scale to fit better
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl font-bold text-teal-400">Hi, I'm Rajender</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          I'm a passionate{" "}
          <span className="text-purple-500 font-semibold">
            Frontend Developer
          </span>{" "}
          and a fresh graduate in Computer Science. I love building beautiful
          and functional web applications using modern technologies like{" "}
          <span className="text-green-400">React</span>,{" "}
          <span className="text-green-400">Next.js</span>, and{" "}
          <span className="text-green-400">Tailwind CSS</span>.
        </p>
        <p className="text-gray-400">
          Eager to contribute to impactful projects and grow as an SDE.
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-purple-500 transition-all duration-300"
        >
          View My Projects
        </a>
      </div>
    </section>
  );
};

export default Home;
