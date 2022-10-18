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
import weatherApp from "./assets/projects/weather-preview.jpg";
import promgmt from "./assets/projects/pro-mgmt-preview.png";
import querycrud from "./assets/projects/react-query-preview.png";
import reduxcrud from "./assets/projects/redux-crud-preview.png";
import cocktails from "./assets/projects/cocktails-preview.jpg";
import icygbimg from "./assets/projects/icygbimg.jpg";

export const life = {
  name: "Federico Palessi",
  shortText: "React Developer",
  img: profile,
};
export const education = [
  {
    Position: "React Hooks: The Complete Guide",
    Location: "Udemy",
    Duration: "August 2022 - September 2022",
  },
  {
    Position: "Técnico Superior en Desarrollo de Aplicaciones Web",
    Location: "Lleida",
    Duration: "Sept 2020 - July 2022",
  },
];
export const work = [
  {
    Position: "Frontend Developer",
    Company: `Bankoi Software Factory (Vigo)`,
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
      "Simple small React app styled with react-bootstrap. It uses Axios to fetch data from a cocktails API and React Context API to manage the state. Once the search is over and the user chooses a cocktail, a modal will be displayed with the instructions and ingredients.",
    technologies: "HTML, CSS, Bootstrap, React",
    live: "https://celebrated-quokka-36eaba.netlify.app/",
    github: "https://github.com/fpalessi/best-cocktails",
  },
  {
    title: "Redux CRUD - Used books",
    image: reduxcrud,
    description:
      "Simple CRUD React app that simulates a store of used books. I used Redux to manage the app state in order to practice with one of the most frequently used state management tool. It uses Axios to make HTTP requests to a fake REST API and some React Hooks that Redux provides such as useSelector or useDispatch. It also has a search bar to filter the books.",
    technologies: "HTML, CSS, Bootstrap, React, Redux",
    live: "https://steady-dodol-885d13.netlify.app/",
    github: "https://github.com/fpalessi/FRONTEND_used-books",
  },
  {
    title: "React Query CRUD - Films",
    image: querycrud,
    description:
      "Simple CRUD React application where a group of friends rate from 1 to 10 the movies they watch. The purpose of this app is none other than to understand and put into practice the React-Query library. It uses Axios to make HTTP requests to a fake REST API (json-server) and some React Hooks that react-query provides such as useQuery or useMutation.",
    technologies: "HTML, CSS, Bootstrap, React, React-Query",
    live: "https://superb-valkyrie-8dd983.netlify.app/",
    github: "https://github.com/fpalessi/FRONTEND_films",
  },
  {
    title: "ICYGB",
    image: icygbimg,
    description:
      "Complex shop project built with Express, MongoDB and React. It has user authentication as well as many other features such as being able to add products to the cart, delete them, etc. These products can also be sorted by color, size, price... Once the user decides on his favorite sneakers, he will be able to make the payment thanks to the Stripe payment processing platform. The website was styled with Styled-Components and the state was handled by Redux Toolkit. ",
    technologies: "HTML, CSS, Bootstrap, React, Express, Redux Toolkit",
    github: "https://github.com/fpalessi/FRONTEND_ICYGB",
  },
  {
    title: "pro-mgmt",
    image: promgmt,
    description:
      "Fully functional app built with Express, MongoDB and React. Once you sign up and confirm your account via email, you can log in and start managing your projects and tasks. It has many functionalities such as adding (editing and deleting) projects, adding new tasks to each of these projects, etc. You can also add collaborators who can mark these tasks as completed.",
    technologies: "HTML, CSS, TailwindCSS, React, Express",
    live: "https://resplendent-entremet-a875e4.netlify.app/",
    github: "https://github.com/fpalessi/FRONTEND_pro-mgmt",
    // github: "https://github.com/fpalessi/BACKEND_pro-mgmt",
  },
];
