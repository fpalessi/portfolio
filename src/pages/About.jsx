import React from "react";
import "animate.css";
import Work from "../components/Work";
import { technologies, work } from "../data";
import { education } from "../data";
import Resume from "../assets/me/Federico-Palessi-CV.pdf";

const About = () => {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    reactquery,
    npm,
    nodejs,
  } = technologies;
  return (
    <>
      <main className="container mx-auto max-width py-5 animate__animated animate__backInDown">
        <section>
          <h1 className="text-2xl md:text-4xl xl:text-3xl xl:leading-tight font-bold">
            Education
          </h1>
          {React.Children.toArray(
            education.map(({ Position, Company, Location, Duration }) => (
              <Work
                position={Position}
                company={Company}
                location={Location}
                duration={Duration}
              />
            ))
          )}
        </section>
        <section>
          <h1 className="text-2xl md:text-4xl xl:text-3xl xl:leading-tight font-bold mt-10">
            Work Experience
          </h1>
          {React.Children.toArray(
            work.map(({ Position, Company, Location, Duration }) => (
              <Work
                position={Position}
                company={Company}
                location={Location}
                duration={Duration}
              />
            ))
          )}
        </section>
        <section>
          <h1 className="text-2xl md:text-4xl xl:text-3xl xl:leading-tight font-bold mt-10">
            Stack I've been working on lately
          </h1>
          <section className="mt-5 grid grid-cols-12 md:grid-cols-5 lg:grid-cols-10 items-center gap-2 pl-3 pt-3">
            <img src={html} title="html" alt="" className="w-12 mb-2" />
            <img src={css} title="CSS" alt="" className="w-12 mb-2" />
            <img src={js} title="JavaScript" alt="" className="w-12 mb-2" />
            <img src={npm} title="NPM" alt="" className="w-12 mb-2" />
            <img src={react} title="React" alt="" className="w-12 mb-2" />
            <img
              src={reactquery}
              title="React-Query"
              alt=""
              className="w-12 mb-2"
            />
            <img src={redux} title="Redux" alt="" className="w-12 mb-2" />
            <img src={tailwind} title="Tailwind" alt="" className="w-12 mb-2" />
            <img
              src={bootstrap}
              title="Bootstrap"
              alt=""
              className="w-12 mb-2"
            />
            <img src={nodejs} title="NodeJS" alt="" className="w-12 mb-2" />
          </section>
        </section>
        <section>
          <h1 className="text-2xl md:text-4xl xl:text-3xl xl:leading-tight font-bold mt-10 underline">
            <a href={Resume} download>
              {" "}
              Download Curriculum Vitae
            </a>
          </h1>
        </section>
      </main>
    </>
  );
};

export default About;
