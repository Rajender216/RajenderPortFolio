import React from "react";
import Card from "../components/Card";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black px-4 py-16 md:px-8 lg:px-16"
    >
      <h2 className="text-3xl md:text-4xl text-white font-bold mb-10 text-center">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          title="CloudVids"
          description="A secure and efficient file management and sharing platform built using Appwrite and Next.js."
          image="/cloudvids.png"
          techStack={["Next.js", "Appwrite", "Taiwindcss", "TypeScript"]}
          gitlink="https://github.com/Rajender216/CloudVids"
          link="https://cloud-vids.vercel.app/"
        />
        <Card
          title="E-Commerce"
          description="A full-featured E-commerce website built with the MERN stack for seamless product browsing, cart management, and secure checkout."
          image="/ecom.png"
          techStack={["MongoDb", "ReactVite", "Express", "Tailwind"]}
          gitlink="https://github.com/Rajender216/E-commerce-"
          link="https://store-virid-phi.vercel.app/"
        />
        <Card
          title="Blogify"
          description="A modern blog web application with features to create, auto-save, edit, and publish posts with image support."
          image="/Blog.png"
          techStack={["Mongodb", "Express", "React-Vite", "Node.js"]}
          gitlink="https://github.com/Rajender216/Blog-app"
          link="https://blog-app-ff.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
