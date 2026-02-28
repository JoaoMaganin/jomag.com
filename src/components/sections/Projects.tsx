import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";
import { useLang } from "../../context/LanguageContext";
import { translations, ProjectItem } from "../../lib/translations";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectModal from "../modals/ProjectModal";
import { useVisibilityPause } from "../../hooks/useVisibilityPause";
import { useSectionTracking } from "@/hooks/Usesectiontracking";
import { analytics } from "@/lib/Analytics";


// Botão animado — monta com fade+slide ao trocar de projeto
function ProjectLinkButton({ href }: { href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
    );
  });

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-medium transition-all duration-200 hover:scale-105"
      style={{
        borderColor: "var(--border-hover)",
        color: "var(--accent)",
        backgroundColor: "var(--accent-glow)",
        opacity: 0,
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
      Ver projeto
    </a>
  );
}

// Título animado do projeto ativo
function ProjectTitle({ title }: { title: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 12, filter: "blur(6px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5, ease: "power3.out" }
    );
  });

  return (
    <h3
      ref={ref}
      className="text-xl font-bold tracking-tight"
      style={{
        color: "var(--text-primary)",
        opacity: 0,
      }}
    >
      {title}
    </h3>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState<ProjectItem | null>(null);
  const isAnimating = useRef(false);

  useVisibilityPause(sectionRef);
  useSectionTracking(sectionRef, "projects");


  const { lang } = useLang();
  const t = translations[lang].projects;
  const total = t.items.length;

  useGSAP(
    () => {
      gsap.fromTo(
        ".projects-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none reverse" },
        }
      );
    },
    { scope: sectionRef }
  );

  const getCardProps = (index: number, currentActive: number) => {
    let diff = index - currentActive;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    if (diff === 0) return { x: 0, y: 0, scale: 1, rotateZ: 0, opacity: 1, zIndex: 10 };
    if (diff === 1 || diff === -(total - 1)) return { x: 310, y: 55, scale: 0.85, rotateZ: 22, opacity: 0.55, zIndex: 5 };
    if (diff === -1 || diff === (total - 1)) return { x: -310, y: 55, scale: 0.85, rotateZ: -22, opacity: 0.55, zIndex: 5 };
    return { x: diff > 0 ? 680 : -680, y: 100, scale: 0.65, rotateZ: diff > 0 ? 45 : -45, opacity: 0, zIndex: 1 };
  };

  // Anima spotlight para apagar e acender no centro
  const animateSpotlight = (dir: 1 | -1) => {
    const tl = gsap.timeline();
    // Apaga
    tl.to(spotlightRef.current, {
      opacity: 0,
      scale: 0.6,
      duration: 0.25,
      ease: "power2.in",
    })
      // Reacende no centro
      .to(spotlightRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      });
  };

  const applyCardProps = (cards: NodeListOf<HTMLElement>, targetActive: number, animate: boolean) => {
    cards.forEach((card, i) => {
      const p = getCardProps(i, targetActive);
      if (animate) {
        gsap.to(card, {
          x: p.x, y: p.y, scale: p.scale, rotateZ: p.rotateZ, opacity: p.opacity, zIndex: p.zIndex,
          duration: 0.65, ease: "power3.inOut",
          onComplete: () => { isAnimating.current = false; },
        });
      } else {
        gsap.set(card, { x: p.x, y: p.y, scale: p.scale, rotateZ: p.rotateZ, opacity: p.opacity, zIndex: p.zIndex });
      }
    });
  };

  const navigate = (dir: 1 | -1) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    const next = (active + dir + total) % total;
    const cards = carouselRef.current?.querySelectorAll<HTMLElement>(".proj-card");
    if (!cards) return;
    applyCardProps(cards, next, true);
    animateSpotlight(dir);
    setActive(next);
    analytics.viewProject(t.items[next].title);
  };

  useGSAP(
    () => {
      const cards = carouselRef.current?.querySelectorAll<HTMLElement>(".proj-card");
      if (!cards) return;
      applyCardProps(cards, active, false);
    },
    { scope: sectionRef, dependencies: [] }
  );

  // Setas do teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const isVisible = rect.top >= -rect.height / 2 && rect.top <= rect.height / 2;
      if (!isVisible) return;
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);


  // Swipe touch — mobile
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    let startX = 0;

    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const onTouchEnd = (e: TouchEvent) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) < 50) return; // ignora swipes muito curtos
      navigate(diff > 0 ? 1 : -1);
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [active]);


  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className="section relative flex flex-col items-center justify-center overflow-hidden transition-colors duration-300"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        {/* ── Spotlight: holofote de frente — glow radial centralizado ── */}
        <div
          ref={spotlightRef}
          className="pointer-events-none absolute z-0"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
            filter: "blur(20px)",
            opacity: 1,
          }}
        />

        <div className="relative z-10 flex w-full flex-col items-center gap-8 px-6">
          {/* Header */}
          <div className="projects-header w-full max-w-5xl">
            <div className="mb-4 h-px w-16" style={{ backgroundColor: "var(--accent)" }} />
            <h2
              className="text-5xl font-bold md:text-6xl"
              style={{ color: "var(--text-primary)" }}
            >
              {t.title}
            </h2>
          </div>

          {/* Carrossel */}
          <div className="relative flex w-full max-w-5xl items-start justify-center">
            <button
              onClick={() => navigate(-1)}
              className="absolute left-0 top-1/3 z-20 flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 hover:scale-110"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)", color: "var(--text-muted)" }}
            >
              <ChevronLeft size={18} />
            </button>

            <div ref={carouselRef} className="relative h-96 w-full">
              {t.items.map((item, i) => (
                <div
                  key={i}
                  className="proj-card absolute left-1/2 top-0 h-72 w-56 -translate-x-1/2 overflow-hidden rounded-2xl border"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--bg-card)",
                    cursor: active === i ? "pointer" : "default",
                    transformOrigin: "bottom center",
                  }}
                  onClick={() => { if (active === i) { setSelected(item); analytics.openProjectModal(item.title); } }}
                >
                  <div className="h-36 w-full" style={{ background: item.image.startsWith("/") ? `url(${item.image}) center/cover no-repeat` : item.image }} />
                  <div className="p-4">
                    <h3 className="mb-1 text-base font-semibold" style={{ color: "var(--text-primary)" }}>
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "var(--text-muted)" }}>
                      {item.description}
                    </p>
                  </div>

                  {active === i && (
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 hover:opacity-100 rounded-2xl"
                      style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
                    >
                      <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                        Ver detalhes
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="absolute right-0 top-1/3 z-20 flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 hover:scale-110"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)", color: "var(--text-muted)" }}
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Nome do projeto ativo em destaque */}
          <div className="flex flex-col items-center" style={{ marginTop: "-2.5rem" }}>
            <ProjectTitle key={active} title={t.items[active].title} />
          </div>

          {/* Botão link */}
          <div className="flex items-center justify-center" style={{ minHeight: "2.75rem", marginTop: "-0.5rem" }}>
            {t.items[active].link && (
              <ProjectLinkButton key={active} href={t.items[active].link!} />
            )}
          </div>

          {/* Indicadores */}
          <div className="flex gap-2">
            {t.items.map((_, i) => (
              <button
                key={i}
                onClick={() => { if (i !== active) navigate(i > active ? 1 : -1); }}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === active ? "2rem" : "0.5rem",
                  backgroundColor: i === active ? "var(--accent)" : "var(--border)",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {selected && <ProjectModal item={selected} onClose={() => setSelected(null)} />}
    </>
  );
}