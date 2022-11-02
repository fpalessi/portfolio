import React from "react";
import Project from "../components/Project";
import { projects, technologies } from "../data";

const Projects = () => {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    reactquery,
    nodejs,
    styledcomponents,
  } = technologies;
  return (
    <main className="container mx-auto max-width mb-20 animate__animated animate__fadeIn">
      <section>
        <h1 className="text-2xl md:text-4xl xl:text-3xl xl:leading-tight font-bold mt-10">
          Stack I've been working on lately
        </h1>
        <section className="mt-5 grid grid-cols-12 md:grid-cols-5 lg:grid-cols-10 items-center gap-2 pl-3 pt-3">
          <img src={html} title="html" alt="" className="w-12 mb-2" />
          <img src={css} title="CSS" alt="" className="w-12 mb-2" />
          <img src={js} title="JavaScript" alt="" className="w-12 mb-2" />
          <img src={react} title="React" alt="" className="w-12 mb-2" />
          <img
            src={reactquery}
            title="React-Query"
            alt=""
            className="w-12 mb-2"
          />

          <img src={redux} title="Redux" alt="" className="w-12 mb-2" />
          <img src={nodejs} title="NodeJS" alt="" className="w-12 mb-2" />
          <img
            src={styledcomponents}
            title="NodeJS"
            alt=""
            className="w-12 mb-2"
          />
          <img src={tailwind} title="Tailwind" alt="" className="w-12 mb-2" />
          <img src={bootstrap} title="Bootstrap" alt="" className="w-12 mb-2" />
        </section>
      </section>
      <section>
        <h1 className="text-2xl md:text-4xl xl:text-3xl xl:leading-tight font-bold pt-10">
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
