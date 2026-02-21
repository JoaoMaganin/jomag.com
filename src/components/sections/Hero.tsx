import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";
import { useLang } from "../../context/LanguageContext";
import { translations } from "../../lib/translations";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const { lang } = useLang();
  const t = translations[lang].hero;

  useGSAP(
    () => {
      const finalSize = window.innerWidth >= 768 ? "6rem" : "3.75rem";
      const introSize = `${Math.min(window.innerWidth * 0.15, 220)}px`;

      gsap.set(nameRef.current, { fontSize: introSize });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl
        // 1. Nome gigante aparece
        .fromTo(
          nameRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.8 }
        )
        // 2. Pausa
        .to({}, { duration: 1 })
        // 3. Encolhe para o tamanho final
        .to(nameRef.current, {
          fontSize: finalSize,
          duration: 0.9,
          ease: "power3.inOut",
        })
        // 4. Overlay some revelando o resto
        .to(overlayRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          pointerEvents: "none",
        }, "<0.5")
        // 5. Subtítulo entra
        .fromTo(
          subRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.1"
        )
        // 6. Indicator entra
        .fromTo(
          indicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.3"
        );
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
          backgroundImage:
            "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Brilho */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{ backgroundColor: "var(--accent-glow)" }}
      />

      {/* ── Overlay — fica atrás do nome ── */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "var(--bg-primary)" }}
      />

      {/* ── Conteúdo — sempre acima do overlay ── */}
      <div className="relative z-20 flex flex-col items-center gap-6 px-6 text-center">
        <h1
          ref={nameRef}
          className="font-bold leading-tight tracking-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "var(--text-primary)",
            opacity: 0,
          }}
        >
          Seu<span style={{ color: "var(--accent)" }}>Nome</span>
        </h1>

        <p
          ref={subRef}
          className="max-w-xl text-lg font-light leading-relaxed"
          style={{ color: "var(--text-muted)", opacity: 0 }}
        >
          {t.subtitle}
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        ref={indicatorRef}
        className="absolute bottom-10 z-20 flex flex-col items-center gap-2"
        style={{ color: "var(--text-subtle)", opacity: 0 }}
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