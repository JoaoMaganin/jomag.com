import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import { useLang } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../lib/translations";
import { Sun, Moon } from "lucide-react";

const NAV_KEYS = ["home", "about", "projects", "contact"] as const;
const NAV_HREFS: Record<string, string> = {
  home: "#hero",
  about: "#about",
  projects: "#projects",
  contact: "#contact",
};

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const { lang, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang].nav;
  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(
    () => {
      gsap.fromTo(
        navRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.4 }
      );
    },
    { scope: navRef }
  );

  return (
    <nav
      ref={navRef}
      className={[
        "fixed inset-x-0 top-0 z-50 flex h-[72px] items-center justify-between px-6 md:px-14 transition-all duration-300",
        scrolled ? "border-b backdrop-blur-xl" : "",
      ].join(" ")}
      style={{
        borderColor: scrolled ? "var(--border)" : "transparent",
        backgroundColor: scrolled ? "var(--bg-nav)" : "transparent",
      }}
    >
      <a
        href="#hero"
        className="text-xl font-semibold tracking-tight transition-colors"
        style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}
      >
        Seu<span style={{ color: "var(--accent)" }}>Nome</span>
      </a>

      <ul className="hidden list-none items-center gap-8 md:flex">
        {NAV_KEYS.map((key) => (
          <li key={key}>
            <a
              href={NAV_HREFS[key]}
              className="relative text-[0.72rem] font-medium uppercase tracking-widest transition-colors after:absolute after:-bottom-0.5 after:left-1/2 after:right-1/2 after:h-px after:transition-all after:duration-300 hover:after:left-0 hover:after:right-0"
              style={{
                color: "var(--text-muted)",
                // @ts-ignore
                "--tw-after-bg": "var(--accent)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {t[key]}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2">
        {/* Language toggle */}
        <div
          className="flex items-center gap-0.5 rounded-full border p-1"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}
        >
          {(["pt", "en"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className="rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest transition-all duration-200"
              style={{
                backgroundColor: lang === l ? "var(--accent)" : "transparent",
                color: lang === l ? "#fff" : "var(--text-muted)",
              }}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Alternar tema"
          className="relative flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-200"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--bg-card)",
            color: "var(--text-muted)",
          }}
        >
          <Sun
            size={15}
            className="absolute transition-all duration-300"
            style={{ opacity: isDark ? 0 : 1, transform: isDark ? "scale(0) rotate(-90deg)" : "scale(1) rotate(0deg)" }}
          />
          <Moon
            size={15}
            className="absolute transition-all duration-300"
            style={{ opacity: isDark ? 1 : 0, transform: isDark ? "scale(1) rotate(0deg)" : "scale(0) rotate(90deg)" }}
          />
        </button>
      </div>
    </nav>
  );
}