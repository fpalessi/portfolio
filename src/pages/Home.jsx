import "animate.css";
import { life } from "../data";
import reactLogo from "../assets/me/react.svg";

const Home = () => {
  const { name, shortText, img } = life;
  return (
    <main className="container flex flex-col mx-auto max-width section justify-between items-center md:flex md:flex-row ">
      <div className="animate__animated animate__backInLeft ">
        <h1 className="text-3xl text-dark-heading md:text-4xl xl:text-6xl xl:leading-tight font-bold">
          Hi there!
          <span className="wave ml-5" role="img" aria-labelledby="wave">
            👋
          </span>
        </h1>
        <h2 className="text-3xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold mt-2">
          I'm {name}
        </h2>
        <div className="flex mt-2">
          <h2 className="text-2xl text-dark-heading md:text-4xl xl:text-3xl xl:leading-tight font-bold mt-2">
            {shortText}
          </h2>
          <span>
            <img
              src={reactLogo}
              className="mt-3 ml-3"
              alt="React logo"
              height={7}
            />
          </span>
        </div>
      </div>
      <div className="animate__animated animate__backInRight mt-10 md:mt-0">
        <img
          src={img}
          alt="Federico Palessi"
          className="object-scale-down rounded-2xl h-60 w-90"
        />
      </div>
    </main>
  );
};

export default Home;
