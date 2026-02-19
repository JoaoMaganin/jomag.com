import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

const skills = ["React", "TypeScript", "GSAP", "Node.js", "Tailwind", "Figma"];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Linha decorativa cresce ao entrar na viewport
      gsap.from(".about-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Texto entra em stagger
      gsap.from(".about-text", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Skills aparecem em cascata
      gsap.from(".skill-tag", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.4)",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="mx-auto max-w-5xl px-6 py-40 md:px-14"
    >
      {/* Header */}
      <div className="mb-16">
        <div className="about-line mb-4 h-px w-16 bg-amber-400" />
        <h2
          className="about-text text-5xl font-bold text-white md:text-6xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Sobre mim
        </h2>
      </div>

      {/* Conteúdo em grid */}
      <div className="grid gap-16 md:grid-cols-2">
        <div className="flex flex-col gap-5">
          <p className="about-text text-lg leading-relaxed text-neutral-400">
            Sou um desenvolvedor frontend com foco em criar interfaces que combinam
            performance e beleza. Acredito que boas animações não são enfeite —
            são comunicação.
          </p>
          <p className="about-text text-lg leading-relaxed text-neutral-400">
            Tenho experiência construindo produtos digitais do zero, da
            arquitetura de componentes à entrega final com atenção obsessiva
            aos detalhes.
          </p>
        </div>

        {/* Skills */}
        <div>
          <p className="about-text mb-6 text-sm uppercase tracking-widest text-neutral-500">
            Tecnologias
          </p>
          <div className="skills-grid flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="skill-tag rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-neutral-300 transition-colors hover:border-amber-400/50 hover:text-amber-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}