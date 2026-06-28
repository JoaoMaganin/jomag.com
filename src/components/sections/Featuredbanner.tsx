import { useRef } from "react";
import { useLang } from "../../context/LanguageContext";
import { FEATURED_PROJECT, SHOW_FEATURED_BANNER } from "../../lib/constants";
import { translations } from "../../lib/translations";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";

export default function FeaturedBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();
  const project = translations[lang].projects.items[FEATURED_PROJECT.index];

  useGSAP(
    () => {
      gsap.fromTo(
        bannerRef.current,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 1 }
      );
    },
    { scope: bannerRef }
  );

  const handleClick = () => {
    const section = document.getElementById("projects");
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("featured-project", { detail: { index: FEATURED_PROJECT.index } })
      );
    }, 600);
  };

  return (
    <div
      ref={bannerRef}
      className="fixed left-0 right-0 z-40 flex items-center justify-center gap-2 px-4 py-1.5 cursor-pointer"
      style={{
        top: 0,
        backgroundColor: "var(--bg-card)",
        borderBottom: "1px solid var(--border)",
        opacity: 0,
        height: "32px",
      }}
      onClick={handleClick}
    >
      <span className="text-sm">🔥</span>

      {/* Label — esconde no mobile */}
      <span
        className="hidden md:inline text-xs uppercase tracking-widest"
        style={{ color: "var(--text-subtle)" }}
      >
        {lang === "pt" ? "Projeto mais recente" : "Most recent project"}
      </span>

      {/* Label curto — só no mobile */}
      <span
        className="md:hidden text-xs uppercase tracking-widest"
        style={{ color: "var(--text-subtle)" }}
      >
        {lang === "pt" ? "Em desenvolvimento" : "Working on"}
      </span>

      <span className="text-xs md:text-sm font-semibold truncate max-w-[120px] md:max-w-none" style={{ color: "var(--accent)" }}>
        {project.title}
      </span>

      <span className="text-sm">🔥</span>

      <svg
        className="hidden md:block flex-shrink-0"
        width="14" height="14" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        style={{ color: "var(--text-subtle)" }}
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </div>
  );
}