import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import BootLoader from "./components/BootLoader";
import MatrixRain from "./components/MatrixRain";
import CommandPalette from "./components/CommandPalette";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Architecture from "./components/Architecture";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [booting, setBooting] = useState(true);
  const [palette, setPalette] = useState(false);
  const done = useCallback(() => setBooting(false), []);

  return (
    <div className="crt">
      <AnimatePresence>{booting && <BootLoader key="boot" onDone={done} />}</AnimatePresence>

      <MatrixRain />
      <CommandPalette open={palette} setOpen={setPalette} />

      {!booting && (
        <div className="relative z-10">
          <Navbar onOpenPalette={() => setPalette(true)} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Architecture />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}
