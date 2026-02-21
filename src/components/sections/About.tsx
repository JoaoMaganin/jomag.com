import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";

const skills = ["React", "TypeScript", "GSAP", "Node.js", "Tailwind", "Figma"];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
        .fromTo(".about-line", { scaleX: 0 }, { scaleX: 1, transformOrigin: "left", duration: 0.8 })
        .fromTo(".about-text", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.12 }, "-=0.4")
        .fromTo(".skill-tag", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.07 }, "-=0.3");
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section relative flex flex-col items-center justify-center bg-neutral-900"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-amber-600/5 blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 md:px-14">
        <div className="mb-16">
          <div className="about-line mb-4 h-px w-16 bg-amber-400" />
          <h2
            className="about-text text-5xl font-bold text-white md:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Sobre mim
          </h2>
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <p className="about-text text-lg leading-relaxed text-neutral-400">
              Sou um desenvolvedor frontend com foco em criar interfaces que combinam performance e beleza.
              Acredito que boas animações não são enfeite — são comunicação.
            </p>
            <p className="about-text text-lg leading-relaxed text-neutral-400">
              Tenho experiência construindo produtos digitais do zero, da arquitetura de componentes
              à entrega final com atenção obsessiva aos detalhes.
            </p>
          </div>

          <div>
            <p className="about-text mb-6 text-sm uppercase tracking-widest text-neutral-500">Tecnologias</p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-tag rounded-full border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm text-neutral-300 transition-colors hover:border-amber-400/50 hover:text-amber-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}