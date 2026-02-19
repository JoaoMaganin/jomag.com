import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current!;

      // ── Entrada inicial ──────────────────────────────────────────────────
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headlineRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      })
        .from(
          subRef.current,
          { y: 30, opacity: 0, duration: 0.8 },
          "-=0.5"
        )
        .from(
          scrollIndicatorRef.current,
          { opacity: 0, duration: 0.6 },
          "-=0.2"
        );

      // ── Scroll storytelling: headline sai ao rolar ───────────────────────
      gsap.to(headlineRef.current, {
        y: -80,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "30% top",
          scrub: true,
        },
      });

      gsap.to(subRef.current, {
        y: -40,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "20% top",
          scrub: true,
        },
      });

      // ── Scroll indicator some ao começar a rolar ─────────────────────────
      gsap.to(scrollIndicatorRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "10% top",
          scrub: true,
        },
      });

      // ── Fundo escurece com o scroll (parallax de cor) ────────────────────
      gsap.to(section, {
        backgroundColor: "#0a0a0a",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-neutral-950"
    >
      {/* Grid decorativo de fundo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Brilho central */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-600/10 blur-[120px]" />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <h1
          ref={headlineRef}
          className="text-6xl font-bold leading-tight tracking-tight text-white md:text-8xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Seu<span className="text-amber-400">Nome</span>
        </h1>

        <p
          ref={subRef}
          className="max-w-xl text-lg font-light leading-relaxed text-neutral-400"
        >
          Desenvolvedor frontend apaixonado por experiências que ficam na memória.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-neutral-500"
      >
        <span className="text-xs uppercase tracking-widest">scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-neutral-500 to-transparent" />
      </div>
    </section>
  );
}