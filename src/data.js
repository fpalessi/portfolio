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
import github from "./assets/stack/github.png";
import styledcomponents from "./assets/stack/styled-components.png";
import weatherApp from "./assets/projects/weather-preview.jpg";
import promgmt from "./assets/projects/pro-mgmt-preview.png";
import querycrud from "./assets/projects/react-query-preview.png";
import reduxcrud from "./assets/projects/redux-crud-preview.png";
import cocktails from "./assets/projects/cocktails-preview.jpg";
import icygbimg from "./assets/projects/icygbimg.jpg";
import icygbvideo from "./assets/projects/icygb.mp4";

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
    Position: "Frontend Developer",
    Company: "Bankoi Software Factory (Vigo)",
    Duration: "Jan 2022 - Jun 2022",
    Tasks:
      "Actualización y mantenimiento de webs de la propia empresa. <br> Implementación de medidas legales RGPD/LSSI.",
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
};
export const projects = [
  {
    title: "Weather App",
    image: weatherApp,
    description:
      "Simple small React app that uses Axios library in order to fetch data from a weather API. It uses React Context API to manage the app state globally.",
    technologies: "HTML, CSS, React",
    live: "https://timely-travesseiro-334ce5.netlify.app/",
    github: "https://github.com/fpalessi/weather-app",
  },
  {
    title: "Best cocktails",
    image: cocktails,
    description:
      "Simple small React app that uses Axios to fetch data from a cocktails API and React Bootstrap in order to style and display a selected drink. Context API was used in order to manage the app state.",
    technologies: "HTML, CSS, Bootstrap, React",
    live: "https://celebrated-quokka-36eaba.netlify.app/",
    github: "https://github.com/fpalessi/best-cocktails",
  },
  {
    title: "React Query CRUD - Films",
    image: querycrud,
    description:
      "Simple CRUD React app that simulates a list of films that a group of friends rate from 1 to 10. It uses React-Query for fetching, caching, synchronizing and updating server state.",
    technologies: "HTML, CSS, Bootstrap, React, React-Query",
    live: "https://superb-valkyrie-8dd983.netlify.app/",
    github: "https://github.com/fpalessi/FRONTEND_films",
  },
  {
    title: "Redux CRUD - Used books",
    image: reduxcrud,
    description:
      "Simple CRUD React app that simulates a store of used books. It uses Redux to manage the app state. It uses Axios to make HTTP requests to a REST API and some hooks that Redux provides such as useSelector or useDispatch.",
    technologies: "HTML, CSS, Bootstrap, React, Redux",
    live: "https://steady-dodol-885d13.netlify.app/",
    github: "https://github.com/fpalessi/FRONTEND_used-books",
  },
  {
    title: "ICYGB",
    image: icygbimg,
    description:
      "Shop app built with Express, MongoDB and React. It has user authentication as well as many other features such as being able to add products to the cart, delete them, sort them by color, size, price,... Finally, he will be able to check out thanks to the Stripe payment processing platform. The website was styled from scratch with Styled-Components and the state was handled with Redux Toolkit. ",
    technologies: "HTML, CSS, Bootstrap, React, Express, Redux Toolkit",
    live: icygbvideo,
    github: "https://github.com/fpalessi/FRONTEND_ICYGB",
  },

  {
    title: "pro-mgmt",
    image: promgmt,
    description:
      "Fully functional app built with Express, MongoDB and React. Once you sign up and confirm your account via email, you can log in and start managing your projects and tasks. It has many functionalities such as adding (editing and deleting) projects, adding new tasks to each of these projects, etc. You can also add collaborators who can mark these tasks as completed. App state was globally managed with Context API.",
    technologies: "HTML, CSS, TailwindCSS, React, Express",
    live: "https://resplendent-entremet-a875e4.netlify.app/",
    github: "https://github.com/fpalessi/FRONTEND_pro-mgmt",
  },
];
