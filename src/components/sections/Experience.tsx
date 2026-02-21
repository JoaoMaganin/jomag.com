import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import { useLang } from "../../context/LanguageContext";
import { translations } from "../../lib/translations";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const { lang } = useLang();
  const t = translations[lang].experience;

  useGSAP(
    () => {
      // Linha cresce conforme a seção entra na viewport
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1,
          },
        }
      );

      // Cada item aparece ao entrar na viewport
      gsap.utils.toArray<HTMLElement>(".exp-item").forEach((item, i) => {
        const dot = item.querySelector(".exp-dot");
        const content = item.querySelector(".exp-content");

        gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
          .fromTo(dot, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" })
          .fromTo(
            content,
            { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
            { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
            "-=0.2"
          );
      });

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-free relative min-h-screen py-32 transition-colors duration-300 flex flex-col"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full blur-[100px]"
        style={{ backgroundColor: "var(--accent-glow)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-6 md:px-14">
        {/* Header */}
        <div className="mb-20">
          <div className="mb-4 h-px w-16" style={{ backgroundColor: "var(--accent)" }} />
          <h2
            className="text-5xl font-bold md:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}
          >
            {t.title}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha vertical */}
          <div
            className="absolute left-0 top-0 h-full w-px md:left-1/2"
            style={{ backgroundColor: "var(--border)" }}
          >
            <div
              ref={lineRef}
              className="absolute inset-0 w-full"
              style={{ backgroundColor: "var(--accent)" }}
            />
          </div>

          {/* Itens */}
          <div className="flex flex-col gap-16 pl-8 md:pl-0">
            {t.items.map((item, i) => (
              <div
                key={i}
                className={`exp-item relative flex flex-col md:gap-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div
                  className="exp-dot absolute -left-[2.15rem] top-1 h-4 w-4 rounded-full border-2 md:left-[calc(50%-0.5rem)]"
                  style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--accent)" }}
                />

                {/* Card */}
                <div
                  className={`exp-content w-full rounded-xl border p-6 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}
                >
                  <span
                    className="mb-2 block text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "var(--accent)" }}
                  >
                    {item.period}
                  </span>
                  <h3 className="mb-1 text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                    {item.role}
                  </h3>
                  <span className="mb-3 block text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                    {item.company}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {item.description}
                  </p>
                  {item.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border px-3 py-0.5 text-xs"
                          style={{ borderColor: "var(--border)", color: "var(--text-subtle)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Âncora invisível no fim — o scroll para aqui ao subir */}
      <div className="section-snap-bottom" />
    </section>
  );
}