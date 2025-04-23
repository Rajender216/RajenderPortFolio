const Card = ({ title, description, image, techStack,gitlink, link }) => {
  return (
    <div className="bg-black border border-gray-800 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.1)] p-5 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,255,0.2)]">
      <img
        src={image}
        alt={title}
        className="rounded-xl mb-4 w-full h-48 object-cover border border-gray-700"
      />
      <h3 className="text-cyan-400 text-xl font-semibold">{title}</h3>
      <p className="text-gray-300 mt-2 text-sm">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-cyan-400/10 border border-cyan-400 text-cyan-300 text-xs px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={gitlink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-sm font-semibold text-cyan-400 hover:text-cyan-300 underline mr-4"
      >
        Github
      </a>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-sm font-semibold text-cyan-400 hover:text-cyan-300 underline"
      >
        Live
      </a>
    </div>
  );
};

export default Card;
