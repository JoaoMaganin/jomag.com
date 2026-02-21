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
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  const { lang } = useLang();
  const t = translations[lang].hero;

  useGSAP(
    () => {
      // ── Intro ──────────────────────────────────────────────────────────────
      const finalSize = window.innerWidth >= 768 ? "6rem" : "3.75rem";
      const introSize = `${Math.min(window.innerWidth * 0.15, 220)}px`;

      gsap.set(nameRef.current, { fontSize: introSize });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(nameRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8 })
        .to({}, { duration: 1 })
        .to(nameRef.current, { fontSize: finalSize, duration: 0.9, ease: "power3.inOut" })
        .to(overlayRef.current, { opacity: 0, duration: 0.5, ease: "power2.inOut", pointerEvents: "none" }, "<0.5")
        .fromTo(subRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.1")
        .fromTo(indicatorRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.3");

      // ── Animação do fundo do Hero
      gsap.to(orb1Ref.current, {
        scale: 1.3,
        opacity: 0.7,
        duration: 3.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(orb2Ref.current, {
        x: -80,
        y: -60,
        scale: 1.2,
        duration: 5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(orb3Ref.current, {
        x: 60,
        y: 80,
        scale: 0.8,
        opacity: 0.5,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.5,
      });
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

      {/* ── Orbs pulsantes ── */}
      <div
        ref={orb1Ref}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
        style={{ backgroundColor: "var(--accent-glow)", opacity: 0.6 }}
      />
      <div
        ref={orb2Ref}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]"
        style={{ backgroundColor: "var(--accent-glow)", opacity: 0.4 }}
      />
      <div
        ref={orb3Ref}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[60px]"
        style={{ backgroundColor: "var(--accent-glow)", opacity: 0.3 }}
      />

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "var(--bg-primary)" }}
      />

      {/* Conteúdo */}
      <div className="relative z-20 flex flex-col items-center gap-6 px-6 text-center">
        <h1
          ref={nameRef}
          className="font-bold leading-tight tracking-tight"
          style={{
            color: "var(--accent)",
            opacity: 0,
          }}
        >
          João Maganin
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