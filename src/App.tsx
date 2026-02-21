import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import CustomCursor from "./components/Customcursor";

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </>
  );
}