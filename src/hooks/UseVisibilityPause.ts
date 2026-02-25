import { useEffect, RefObject } from "react";
import { gsap } from "../lib/gsap";

/**
 * Pausa todos os tweens GSAP dentro de um elemento quando ele sai da viewport
 * e retoma quando volta a ficar visível.
 */
export function useVisibilityPause(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const tweens = gsap.getTweensOf(el.querySelectorAll("*"));
        if (entry.isIntersecting) {
          tweens.forEach((t) => t.resume());
          // Retoma também tweens diretos no elemento
          gsap.getTweensOf(el).forEach((t) => t.resume());
        } else {
          tweens.forEach((t) => t.pause());
          gsap.getTweensOf(el).forEach((t) => t.pause());
        }
      },
      { threshold: 0.05 } // 5% visível já retoma
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}