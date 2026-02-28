
import { analytics } from "../lib/Analytics";
import { useEffect, RefObject } from "react";

/**
 * Dispara um evento no GA4 quando a seção entra na viewport.
 * Só dispara uma vez por sessão para não inflar os dados.
 */
export function useSectionTracking(ref: RefObject<HTMLElement | null>, sectionName: string) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let tracked = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked) {
          tracked = true;
          analytics.viewSection(sectionName);
        }
      },
      { threshold: 0.5 } // 50% visível para garantir que realmente visitou
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, sectionName]);
}