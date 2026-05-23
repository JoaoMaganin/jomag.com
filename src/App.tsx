import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import CustomCursor from "./components/Customcursor";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import FeaturedBanner from "./components/sections/Featuredbanner";
import { SHOW_FEATURED_BANNER } from "./lib/constants";

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      {SHOW_FEATURED_BANNER && <FeaturedBanner />}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}