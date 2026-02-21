import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import { useLang } from "../../context/LanguageContext";
import { translations, ExperienceItem } from "../../lib/translations";
import ExperienceModal from "../modals/ExperienceModal";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<ExperienceItem | null>(null);

  const { lang } = useLang();
  const t = translations[lang].experience;

  useGSAP(
    () => {
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
    <>
      <section
        id="experience"
        ref={sectionRef}
        className="section-free relative min-h-screen pt-32 pb-48 flex flex-col transition-colors duration-300"
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
              style={{ color: "var(--text-primary)" }}
            >
              {t.title}
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
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

                  {/* Card clicável */}
                  <button
                    onClick={() => setSelected(item)}
                    className={`exp-content group w-full rounded-xl border p-6 text-left transition-all duration-200 md:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                    }`}
                    style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)", cursor: "pointer" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-hover)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
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
                    {/* Tags */}
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
                    {/* Hint */}
                    <span
                      className="mt-4 block text-xs font-medium uppercase tracking-widest opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      style={{ color: "var(--accent)" }}
                    >
                      Ver detalhes →
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Âncora de snap ao subir — posicionada no fim do padding */}
        
      </section>

      {/* Modal */}
      {selected && (
        <ExperienceModal item={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}