import React from "react";
import "animate.css";
import Work from "../components/Work";
import { work } from "../data";
import { education } from "../data";
import Resume from "../assets/me/Federico_Palessi_CV.pdf";

const About = () => {
  return (
    <>
      <main className="container mx-auto max-width py-2 pt-8 animate__animated animate__fadeIn">
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
          <h1 className="text-xl md:text-4xl xl:text-3xl xl:leading-tight font-bold mt-10">
            <a href={Resume} download>
              Download Curriculum Vitae{" "}
            </a>{" "}
            ||
            <a href="https://github.com/fpalessi" target="_blank">
              {" "}
              visit GitHub
            </a>
          </h1>
        </section>
      </main>
    </>
  );
};

export default About;
