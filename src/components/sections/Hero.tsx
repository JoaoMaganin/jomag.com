import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";
import { useLang } from "../../context/LanguageContext";
import { translations } from "../../lib/translations";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const { lang } = useLang();
  const t = translations[lang].hero;

  useGSAP(
    () => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(headlineRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.3 })
        .fromTo(subRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
        .fromTo(indicatorRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.2");
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="section relative flex flex-col items-center justify-center overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Grid decorativo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Brilho central */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] transition-colors duration-300"
        style={{ backgroundColor: "var(--accent-glow)" }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <h1
          ref={headlineRef}
          className="text-6xl font-bold leading-tight tracking-tight md:text-8xl"
          style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}
        >
          Seu<span style={{ color: "var(--accent)" }}>Nome</span>
        </h1>
        <p
          ref={subRef}
          className="max-w-xl text-lg font-light leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {t.subtitle}
        </p>
      </div>

      <div
        ref={indicatorRef}
        className="absolute bottom-10 flex flex-col items-center gap-2"
        style={{ color: "var(--text-subtle)" }}
      >
        <span className="text-xs uppercase tracking-widest">{t.scroll}</span>
        <div
          className="h-10 w-px"
          style={{ background: "linear-gradient(to bottom, var(--text-subtle), transparent)" }}
        />
      </div>
    </section>
  );
}