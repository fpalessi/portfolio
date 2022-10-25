import React from "react";
import Project from "../components/Project";
import { projects } from "../data";

const Projects = () => {
  return (
    <main className="container mx-auto max-width pt-10 mb-20 animate__animated animate__fadeIn">
      <section>
        <h1 className="text-2xl md:text-4xl xl:text-3xl xl:leading-tight font-bold">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {React.Children.toArray(
            projects.map(
              ({ title, image, description, technologies, live, github }) => (
                <Project
                  title={title}
                  image={image}
                  description={description}
                  technologies={technologies}
                  live={live}
                  github={github}
                />
              )
            )
          )}
        </div>
      </section>
    </main>
  );
};

export default Projects;
