import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";
import { useLang } from "../../context/LanguageContext";
import { translations } from "../../lib/translations";

const TECH_STACK = ["React", "TypeScript", "GSAP", "Tailwind CSS"];
const YEAR = new Date().getFullYear();

const Icons = {
  github: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  email: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  cv: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="12" y1="18" x2="12" y2="12" />
      <line x1="9" y1="15" x2="15" y2="15" />
    </svg>
  ),
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { lang } = useLang();
  const t = translations[lang].contact;

  // Quebra a tagline em palavras para animar uma a uma
  const words = t.tagline.split(" ");

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(".contact-line", { scaleX: 0 }, { scaleX: 1, transformOrigin: "left", duration: 0.7 })
        .fromTo(".contact-title", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.3")
        .fromTo(".contact-subtitle", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        // Palavras da tagline uma a uma
        .fromTo(
          ".contact-word",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.35, stagger: 0.06 },
          "-=0.2"
        )
        .fromTo(".contact-link", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.12 }, "-=0.1")
        .fromTo(".contact-footer", { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.1");
    },
    { scope: sectionRef }
  );

  const handleLinkEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    gsap.to(el, {
      x: 6,
      boxShadow: "0 0 24px 4px var(--accent-glow)",
      borderColor: "var(--border-hover)",
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleLinkLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    gsap.to(el, {
      x: 0,
      boxShadow: "0 0 0px 0px transparent",
      borderColor: "var(--border)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section relative flex flex-col items-center justify-center overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Fundo único: grade diagonal de linhas finas */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              var(--border) 40px,
              var(--border) 41px
            )
          `,
          opacity: 0.15,
        }}
      />

      {/* Gradiente radial cobrindo o centro para não competir com o conteúdo */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 70% at 50% 50%, var(--bg-primary) 40%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-2xl px-6 md:px-14">
        {/* Header */}
        <div className="mb-12">
          <div className="contact-line mb-4 h-px w-16" style={{ backgroundColor: "var(--accent)" }} />
          <h2
            className="contact-title text-5xl font-bold md:text-6xl"
            style={{ color: "var(--text-primary)" }}
          >
            {t.title}
          </h2>
        </div>

        {/* Subtítulo */}
        <h3
          className="contact-subtitle mb-4 text-2xl font-semibold md:text-3xl"
          style={{ color: "var(--text-primary)" }}
        >
          {t.subtitle}
        </h3>

        {/* Tagline — palavra por palavra */}
        <p className="mb-14 max-w-md text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {words.map((word, i) => (
            <span
              key={i}
              className="contact-word inline-block"
              style={{ opacity: 0, marginRight: "0.3em" }}
            >
              {word}
            </span>
          ))}
        </p>

        {/* Links */}
        <div className="flex flex-col gap-4">
          {t.links.map((link) => (
            <a
              key={link.type}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link group flex items-center gap-4 rounded-xl border p-4"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}
              onMouseEnter={handleLinkEnter}
              onMouseLeave={handleLinkLeave}
            >
              {/* Ícone */}
              <div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: "var(--accent-glow)", color: "var(--accent)" }}
              >
                {Icons[link.type]}
              </div>

              {/* Label */}
              <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                {link.label}
              </span>

              {/* Seta */}
              {link.type === "cv" ? (
                <svg
                  className="ml-auto transition-transform duration-200 group-hover:translate-y-0.5"
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  style={{ color: "var(--accent)" }}
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              ) : (
                <svg
                  className="ml-auto transition-transform duration-200 group-hover:translate-x-1"
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  style={{ color: "var(--text-subtle)" }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Footer integrado */}
      <div
        className="contact-footer absolute bottom-0 left-0 right-0 flex flex-col items-center gap-2 border-t px-6 py-5"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            {lang === "pt" ? "Feito por" : "Made by"}{" "}
            <span className="font-semibold" style={{ color: "var(--text-primary)" }}>João Maganin</span>
          </span>
          <span style={{ color: "var(--border)" }}>·</span>
          {TECH_STACK.map((tech, i) => (
            <span key={tech} className="flex items-center gap-3">
              <span className="text-xs" style={{ color: "var(--text-subtle)" }}>{tech}</span>
              {i < TECH_STACK.length - 1 && <span style={{ color: "var(--border)" }}>·</span>}
            </span>
          ))}
          <span style={{ color: "var(--border)" }}>·</span>
          <span className="text-xs" style={{ color: "var(--text-subtle)" }}>© {YEAR}</span>
        </div>
      </div>
    </section>
  );
}