import { useRef, useEffect } from "react";
import { gsap } from "../../lib/gsap";
import { ProjectItem } from "../../lib/translations";
import { X, ExternalLink } from "lucide-react";

interface Props {
  item: ProjectItem;
  onClose: () => void;
}

export default function ProjectModal({ item, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.timeline()
      .fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "none" })
      .fromTo(modalRef.current, { opacity: 0, y: 40, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power3.out" }, "-=0.1");
  }, []);

  const handleClose = () => {
    gsap.timeline({ onComplete: onClose })
      .to(modalRef.current, { opacity: 0, y: 20, scale: 0.97, duration: 0.25, ease: "power3.in" })
      .to(overlayRef.current, { opacity: 0, duration: 0.2 }, "-=0.1");
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && handleClose()}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border"
        style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
      >
        {/* Imagem de capa */}
        <div
          className="h-52 w-full rounded-t-2xl"
          style={{ background: item.image.startsWith("/") ? `url(${item.image}) center/cover no-repeat` : item.image }}
        />

        <div className="p-8">
          {/* Fechar */}
          <button
            onClick={handleClose}
            className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border transition-colors"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)", backgroundColor: "var(--bg-card)", cursor: "pointer" }}
          >
            <X size={14} />
          </button>

          {/* Header */}
          <div className="mb-4 flex items-start justify-between gap-4 pr-8">
            <div>
              <h3
                className="text-2xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                {item.title}
              </h3>
              <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
                {item.description}
              </p>
            </div>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-shrink-0 items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-medium transition-colors"
                style={{ borderColor: "var(--border-hover)", color: "var(--accent)" }}
              >
                <ExternalLink size={12} />
                Ver projeto
              </a>
            )}
          </div>

          <div className="mb-6 h-px" style={{ backgroundColor: "var(--border)" }} />

          {/* Descrição longa */}
          <p className="mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {item.longDescription}
          </p>

          {/* Tecnologias */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-subtle)" }}>
              Tecnologias
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border px-3 py-1 text-xs font-medium"
                  style={{ borderColor: "var(--border-hover)", color: "var(--accent)", backgroundColor: "var(--accent-glow)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}