import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";

export default function CustomCursor() {
  const glowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const glow = glowRef.current!;

    // Posiciona o glow fora da tela inicialmente
    gsap.set(glow, { x: -300, y: -300 });

    const onMove = (e: MouseEvent) => {
      // O Glow segue com o "delay" suave que você configurou
      gsap.to(glow, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    // Efeito de expansão ao passar em links/botões
    const onEnterClickable = () => {
      gsap.to(glow, { 
        scale: 1.5, 
        opacity: 0.4, 
        duration: 0.3, 
        ease: "power2.out" 
      });
    };

    const onLeaveClickable = () => {
      gsap.to(glow, { 
        scale: 1, 
        opacity: 1, 
        duration: 0.3, 
        ease: "power2.out" 
      });
    };

    const addListeners = () => {
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.addEventListener("mouseenter", onEnterClickable);
        el.addEventListener("mouseleave", onLeaveClickable);
      });
    };

    window.addEventListener("mousemove", onMove);
    addListeners();

    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
    };
  });

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
      style={{
        width: 280,
        height: 280,
        // O translate -50% garante que o centro do gradiente fique no bico do mouse
        transform: "translate(-50%, -50%)",
        background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}