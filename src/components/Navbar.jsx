import { useState } from "react";
import { Link } from "react-router-dom";
import logoLetter from "../assets/me/Letter.png";
import "animate.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="container mx-auto md:flex justify-between py-2 max-width animate__animated animate__fadeInDown">
      <div className="flex justify-between items-center px-10 py-10 md:py-10 md:px-5">
        <div>
          <Link to="/" onClick={handleToggle}>
            <img className="w-16" src={logoLetter} alt="logo" />
          </Link>
        </div>
        <div onClick={handleToggle} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 md:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
      </div>
      <nav
        className={`${
          !isOpen ? "hidden" : null
        } text-center md:flex justify-between`}
      >
        <ul className="font-medium md:flex items-center md:space-x-5 md:mr-10">
          <li className="pb-2 md:pb-0 active:text-blue-800">
            <Link to="/" onClick={handleToggle}>
              Home
            </Link>
          </li>
          <li className="pb-2 md:pb-0">
            <Link to="/about" onClick={handleToggle}>
              About
            </Link>
          </li>
          <li className="pb-2 md:pb-0">
            <Link to="/projects" onClick={handleToggle}>
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
