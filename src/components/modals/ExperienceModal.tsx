import { useRef, useEffect } from "react";
import { gsap } from "../../lib/gsap";
import { X } from "lucide-react";
import { ExperienceItem } from "@/lib/translations";

interface Props {
  item: ExperienceItem;
  onClose: () => void;
}

export default function ExperienceModal({ item, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Abre com animação
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "none" })
      .fromTo(
        modalRef.current,
        { opacity: 0, y: 40, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power3.out" },
        "-=0.1"
      );
  }, []);

  // Fecha com animação
  const handleClose = () => {
    const tl = gsap.timeline({ onComplete: onClose });
    tl.to(modalRef.current, { opacity: 0, y: 20, scale: 0.97, duration: 0.25, ease: "power3.in" })
      .to(overlayRef.current, { opacity: 0, duration: 0.2, ease: "none" }, "-=0.1");
  };

  // Fecha ao clicar fora
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) handleClose();
  };

  // Fecha com Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border p-8"
        style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
      >
        {/* Fechar */}
        <button
          onClick={handleClose}
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border transition-colors"
          style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
        >
          <X size={14} />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <span
            className="mb-2 block text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            {item.period}
          </span>
          <h3
            className="text-2xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            {item.role}
          </h3>
          <span className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
            {item.company}
          </span>
        </div>

        {/* Divisor */}
        <div className="mb-6 h-px w-full" style={{ backgroundColor: "var(--border)" }} />

        {/* Descrição longa */}
        <p className="mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {item.longDescription}
        </p>

        {/* Responsabilidades */}
        <div className="mb-8">
          <h4
            className="mb-4 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--text-subtle)" }}
          >
            Responsabilidades
          </h4>
          <ul className="flex flex-col gap-3">
            {item.responsibilities.map((r, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-[0.4rem] h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                <span className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {r}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tecnologias */}
        <div>
          <h4
            className="mb-4 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--text-subtle)" }}
          >
            Tecnologias
          </h4>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-3 py-1 text-xs font-medium"
                style={{
                  borderColor: "var(--border-hover)",
                  color: "var(--accent)",
                  backgroundColor: "var(--accent-glow)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}