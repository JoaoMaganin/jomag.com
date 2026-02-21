import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import { useLang } from "../context/LanguageContext";
import { translations } from "../lib/translations";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

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
  const [theme, setTheme] = useState<Theme>("dark");
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang].nav;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

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

  const isDark = theme === "dark";

  return (
    <nav
      ref={navRef}
      className={[
        "fixed inset-x-0 top-0 z-50 flex h-[72px] items-center justify-between px-6 md:px-14 transition-all duration-300",
        scrolled ? "border-b border-white/[0.08] bg-neutral-950/80 backdrop-blur-xl" : "",
      ].join(" ")}
    >
      <a
        href="#hero"
        className="text-xl font-semibold tracking-tight text-white transition-colors hover:text-amber-400"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Seu<span className="text-amber-400">Nome</span>
      </a>

      <ul className="hidden list-none items-center gap-8 md:flex">
        {NAV_KEYS.map((key) => (
          <li key={key}>
            <a
              href={NAV_HREFS[key]}
              className="relative text-[0.72rem] font-medium uppercase tracking-widest text-neutral-400 transition-colors hover:text-white after:absolute after:-bottom-0.5 after:left-1/2 after:right-1/2 after:h-px after:bg-amber-400 after:transition-all after:duration-300 hover:after:left-0 hover:after:right-0"
            >
              {t[key]}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5 rounded-full border border-white/10 bg-white/5 p-1">
          {(["pt", "en"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={[
                "rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest transition-all duration-200",
                lang === l ? "bg-amber-500 text-white" : "text-neutral-400 hover:text-white",
              ].join(" ")}
            >
              {l}
            </button>
          ))}
        </div>

        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label="Alternar tema"
          className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 transition-all duration-200 hover:border-amber-400/50 hover:text-amber-400"
        >
          <Sun size={15} className={["absolute transition-all duration-300", isDark ? "scale-0 opacity-0 -rotate-90" : "scale-100 opacity-100 rotate-0"].join(" ")} />
          <Moon size={15} className={["absolute transition-all duration-300", isDark ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 rotate-90"].join(" ")} />
        </button>
      </div>
    </nav>
  );
}