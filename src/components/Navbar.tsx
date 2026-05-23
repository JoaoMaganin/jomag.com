import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import { useLang } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations, NavKey } from "../lib/translations";
import { Sun, Moon } from "lucide-react";
import { SHOW_FEATURED_BANNER } from "../lib/constants";

const NAV_KEYS: NavKey[] = ["home", "about", "experience", "projects", "contact"];
const NAV_HREFS: Record<NavKey, string> = {
  home: "#hero",
  about: "#about",
  experience: "#experience",
  projects: "#projects",
  contact: "#contact",
};

function LogoFlip() {
  const frontRef = useRef<HTMLSpanElement>(null);
  const backRef = useRef<HTMLSpanElement>(null);
  const isFlipped = useRef(false);

  useEffect(() => {
    // Só roda no desktop
    if (window.innerWidth < 768) return;

    const flip = () => {
      isFlipped.current = !isFlipped.current;
      const outEl = isFlipped.current ? frontRef.current : backRef.current;
      const inEl = isFlipped.current ? backRef.current : frontRef.current;

      gsap.to(outEl, { rotateX: 90, opacity: 0, duration: 0.3, ease: "power2.in" });
      gsap.fromTo(inEl,
        { rotateX: -90, opacity: 0 },
        { rotateX: 0, opacity: 1, duration: 0.35, ease: "power3.out", delay: 0.25 }
      );
    };

    const interval = setInterval(flip, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href="#hero"
      className="relative hidden md:block text-xl font-semibold tracking-tight"
      style={{ height: "1.5rem", perspective: "400px" }}
    >
      <span
        ref={frontRef}
        className="absolute inset-0 inline-block"
        style={{ color: "var(--accent)", backfaceVisibility: "hidden" }}
      >
        JOÃO
      </span>
      <span
        ref={backRef}
        className="absolute inset-0 inline-block"
        style={{ color: "var(--accent)", backfaceVisibility: "hidden", opacity: 0, transform: "rotateX(-90deg)" }}
      >
        MAGANIN
      </span>
    </a>
  );
}



export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const { lang, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang].nav;
  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    console.log('navbar');
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
        top: SHOW_FEATURED_BANNER ? "32px" : "0px",
        borderColor: scrolled ? "var(--border)" : "transparent",
        backgroundColor: scrolled ? "var(--bg-nav)" : "transparent",
      }}
    >
      <LogoFlip />

      <a
        href="#hero"
        className="md:hidden text-xl font-semibold tracking-tight"
        style={{ color: "var(--text-primary)" }}
      >
        <span style={{ color: "var(--accent)" }}>Maganin</span>
      </a>

      <ul className="hidden list-none items-center gap-6 md:flex absolute left-1/2 -translate-x-1/2">
        {NAV_KEYS.map((key) => (
          <li key={key}>
            <a
              href={NAV_HREFS[key]}
              className="relative text-[0.72rem] font-medium uppercase tracking-widest transition-colors after:absolute after:-bottom-0.5 after:left-1/2 after:right-1/2 after:h-px after:transition-all after:duration-300 hover:after:left-0 hover:after:right-0"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {t[key]}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2">
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

        <button
          onClick={toggleTheme}
          aria-label="Alternar tema"
          className="relative flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-200"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)", color: "var(--text-muted)" }}
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