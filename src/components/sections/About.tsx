import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";
import { useLang } from "../../context/LanguageContext";
import { translations } from "../../lib/translations";

const skills = ["React", "TypeScript", "GSAP", "Node.js", "Tailwind", "Figma"];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { lang } = useLang();
  const t = translations[lang].about;

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
      className="section relative flex flex-col items-center justify-center transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      {/* Brilho no canto */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full blur-[100px]"
        style={{ backgroundColor: "var(--accent-glow)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 md:px-14">
        {/* Header */}
        <div className="mb-16">
          <div
            className="about-line mb-4 h-px w-16"
            style={{ backgroundColor: "var(--accent)" }}
          />
          <h2
            className="about-text text-5xl font-bold md:text-6xl"
            style={{ color: "var(--text-primary)" }}
          >
            {t.title}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-16 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <p className="about-text text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {t.bio1}
            </p>
            <p className="about-text text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {t.bio2}
            </p>
          </div>

          <div>
            <p
              className="about-text mb-6 text-sm uppercase tracking-widest"
              style={{ color: "var(--text-subtle)" }}
            >
              {t.skills}
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-tag rounded-full border px-4 py-2 text-sm transition-colors duration-200"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--bg-card)",
                    color: "var(--text-muted)",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-hover)";
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text-muted)";
                  }}
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