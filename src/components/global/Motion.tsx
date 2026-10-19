"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Movimento que precisa de JS: contadores numéricos ([data-count]).
 * A revelação ao rolar é 100% CSS (globals.css) para não interferir na hidratação.
 * Os contadores só começam depois que a página hidratou e o número entra na tela.
 */
function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count);
  if (!Number.isFinite(target) || el.dataset.counted) return;
  el.dataset.counted = "1";
  const start = performance.now();
  const dur = 1800;
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - t, 4);
    el.textContent = Math.round(target * eased).toLocaleString("pt-BR");
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let io: IntersectionObserver | undefined;
    const timer = window.setTimeout(() => {
      io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            countUp(e.target as HTMLElement);
            io?.unobserve(e.target);
          }),
        { threshold: 0.6 },
      );
      document.querySelectorAll<HTMLElement>("main [data-count]").forEach((el) => io?.observe(el));
    }, 600);
    return () => {
      window.clearTimeout(timer);
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
