import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useLenis } from "@/hooks/useLenis";
import Hero from "./components/Hero";
import About from "./components/About";

// Registra o hook do GSAP para React
gsap.registerPlugin(useGSAP);

export default function App() {
  // Inicializa smooth scroll em toda a app
  useLenis();

  return (
    <main className="bg-neutral-950">
      <Hero />
      <About />
      {/* <Projects /> */}
      {/* <Contact />  */}
    </main>
  );
}