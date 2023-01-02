import profile from "./assets/me/personalPhoto.jpg";
import react from "./assets/stack/react.png";
import redux from "./assets/stack/redux.png";
import html from "./assets/stack/html.png";
import css from "./assets/stack/css.png";
import js from "./assets/stack/js.png";
import nodejs from "./assets/stack/nodejs.png";
import npm from "./assets/stack/npm.png";
import reactquery from "./assets/stack/react-query.png";
import tailwind from "./assets/stack/tailwind.png";
import vscode from "./assets/stack/vscode.png";
import bootstrap from "./assets/stack/bootstrap.png";
import php from "./assets/stack/php.png";
import nextjs from "./assets/stack/next-js.png";
import typescript from "./assets/stack/typescript.png";
import github from "./assets/stack/github.png";
import styledcomponents from "./assets/stack/styled-components.png";
import weatherApp from "./assets/projects/weather-app.jpg";
import promgmt from "./assets/projects/pro-mgmt-preview.png";
import querycrud from "./assets/projects/react-query-preview.png";
import reduxcrud from "./assets/projects/redux-crud-preview.png";
import cocktails from "./assets/projects/cocktails-preview.jpg";
import fruitcart from "./assets/projects/fruitcart.jpg";

export const life = {
  name: "Federico Palessi",
  img: profile,
};
export const education = [
  {
    Position: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    Location: "Academind, Maximilian Schwarzmüller",
    Duration: "August 2022 - September 2022",
  },
  {
    Position: "React - La Guía Completa: Hooks Context Redux",
    Location: "Udemy, Juan Pablo de la Torre ",
    Duration: "August 2022 - September 2022",
  },
  {
    Position: "Grado Superior en Desarrollo de Aplicaciones Web",
    Location: "Lleida, Ministerio de Educación y Formación Profesional",
    Duration: "Sept 2020 - July 2022",
  },
];
export const work = [
  {
    Position: "Web Developer (JS, PHP, HTML, CSS)",
    Company: "Bankoi Software Factory (Vigo)",
    Duration: "Jan 2022 - Jun 2022",
  },
];

export const technologies = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  reactquery: reactquery,
  npm: npm,
  github: github,
  nodejs: nodejs,
  styledcomponents: styledcomponents,
  php: php,
  typescript: typescript,
  nextjs: nextjs,
};
export const projects = [
  {
    title: "React Weather",
    image: weatherApp,
    shortDescription:
      "Small React app that uses Axios in order to fetch the weather forecast from an API.",
    longDescription:
      "It includes autocomplete searchbar for cities with 1M > population and dark mode. In this case data flows from parent to children through props. Styled with Styled-Components.",
    technologies: "HTML, CSS, React, Styled-Components",
    live: "https://sweet-youtiao-18f918.netlify.app",
    github: "https://github.com/fpalessi/react-weather",
  },
  {
    title: "Best cocktails",
    image: cocktails,
    shortDescription:
      "Small React app that uses Axios to fetch data from a cocktails API.",
    longDescription:
      "It was quickly and easily designed thanks to Bootstrap library. In order to manage application state it was used Context API which provides a way to pass data through the component tree without having to pass props down manually at every level.",
    technologies: "HTML, CSS, React, Bootstrap",
    live: "https://celebrated-quokka-36eaba.netlify.app/",
    github: "https://github.com/fpalessi/best-cocktails",
  },
  {
    title: "React Query CRUD - Films",
    image: querycrud,
    shortDescription:
      "CRUD app that uses React-Query for fetching, caching, synchronizing and updating server state.",
    longDescription:
      "It simulates a list of films which a group of friends uses in order to share (add, edit, delete) the last seen films rating them on a scale of one to ten. ",
    technologies: "HTML, CSS, Bootstrap, React, React-Query",
    live: "https://superb-valkyrie-8dd983.netlify.app/",
    github: "https://github.com/fpalessi/FRONTEND_films",
  },
  {
    title: "Redux CRUD - Used books",
    image: reduxcrud,
    shortDescription:
      "Simple CRUD React app that uses Redux to manage the app state and Axios to make HTTP requests.",
    longDescription:
      "It simulates a store of used books where people add (edit or delete) its old books (title, price and last owner) to a list in order to sell them. Main objective was to practice Redux and some hooks provided from it such as useSelector or useDispatch. It was easily and fast designed with Bootstrap",
    technologies: "HTML, CSS, Bootstrap, React, Redux",
    live: "https://steady-dodol-885d13.netlify.app/",
    github: "https://github.com/fpalessi/FRONTEND_used-books",
  },
  {
    title: "Fruit Cart",
    image: fruitcart,
    shortDescription: "React & TypeScript shopping fruit cart.",
    longDescription:
      "This project was taken as a first contact with TypeScript. A project full of the best typescript practices where you can add and remove fruits to a shopping cart. It also includes custom hooks and Context API.  ",
    technologies: "HTML, CSS, Bootstrap, React, TypeScript",
    live: "in process",
    github: "in process",
  },

  {
    title: "pro-mgmt",
    image: promgmt,
    shortDescription:
      "Full Stack Application (MongoDB, Express, React, Node) that allows you manage your projects and tasks. It includes user authentication and authorization. ",
    longDescription:
      "Once you sign up and confirm your account (email), you can log in and start managing your projects and tasks. It has many functionalities such as adding (editing and deleting) projects, adding new tasks to each of these projects, etc. You can also add collaborators who can mark these tasks as completed. State was globally managed with Context API.",
    technologies: "HTML, CSS, TailwindCSS, React, Express, MongoDB",
    live: "https://resplendent-entremet-a875e4.netlify.app/",
    github: "https://github.com/fpalessi/FRONTEND_pro-mgmt",
  },
];
