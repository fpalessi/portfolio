import React from "react";
import Project from "../components/Project";
import { projects, technologies } from "../data";

const Projects = () => {
  const {
    styledcomponents,
    bootstrap,
    tailwind,
    react,
    nextjs,
    redux,
    reactquery,
    nodejs,
    php,
    typescript,
  } = technologies;
  return (
    <main className="container mx-auto max-width mb-20 animate__animated animate__fadeIn">
      <section>
        <h1 className="text-xl md:text-4xl xl:text-3xl xl:leading-tight font-bold mt-10">
          Stack I've been working on lately
        </h1>
        <section className="mt-5 grid grid-cols-12 md:grid-cols-5 lg:grid-cols-10 items-center gap-2 pl-3 pt-3">
          <img
            src={styledcomponents}
            title="Styled-Components"
            alt=""
            className="w-12 mb-2"
          />
          <img src={bootstrap} title="Bootstrap" alt="" className="w-12 mb-2" />
          <img
            src={tailwind}
            title="TailwindCSS"
            alt=""
            className="w-12 mb-2"
          />
          <img src={react} title="React" alt="" className="w-12 mb-2" />
          <img
            src={reactquery}
            title="React-Query"
            alt=""
            className="w-12 mb-2"
          />{" "}
          <img src={redux} title="Redux" alt="" className="w-12 mb-2" />
          <img src={nodejs} title="NodeJS" alt="" className="w-12 mb-2" />
          <img src={php} title="PHP" alt="" className="w-12 mb-2" />
          <img
            src={typescript}
            title="TypeScript"
            alt=""
            className="w-12 mb-2"
          />
          <img src={nextjs} title="NextJS" alt="" className="w-12 mb-2" />
        </section>
      </section>
      <section>
        <h1 className="text-2xl md:text-4xl xl:text-3xl xl:leading-tight font-bold pt-10">
          Projects{" "}
          <span className="text-2xl md:text-xl xl:text-xl xl:leading-tight font-bold pt-10">
            (hover for more information)
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {React.Children.toArray(
            projects.map(
              ({
                title,
                image,
                shortDescription,
                longDescription,
                technologies,
                live,
                github,
              }) => (
                <Project
                  title={title}
                  image={image}
                  shortDescription={shortDescription}
                  longDescription={longDescription}
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
