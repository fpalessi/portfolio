import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";

function App() {
  const [preload, setPreload] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setPreload(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <BrowserRouter>
        {preload ? (
          <Preloader preload={preload} />
        ) : (
          <div id={preload ? "no-scroll" : "scroll"}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
