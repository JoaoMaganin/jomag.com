import { analytics } from "../lib/analytics";
import { useEffect, RefObject } from "react";

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
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, sectionName]);
}