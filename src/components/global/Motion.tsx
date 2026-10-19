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

/**
 * Prepara todos os traços desenhados do site (SVGs decorativos com contorno, sem preenchimento) para
 * "se desenharem" ao entrar na tela. Só adiciona atributos depois da hidratação; a animação é CSS (view timeline).
 */
function prepareDrawings() {
  const svgs = document.querySelectorAll<SVGSVGElement>('main svg[aria-hidden="true"]:not([data-drawn])');
  svgs.forEach((svg) => {
    if (svg.closest("a, button, [data-no-draw]")) return; // ícones de botão/link ficam quietos
    const paths = Array.from(svg.querySelectorAll<SVGGeometryElement>("path, circle, ellipse, line, polyline"));
    const drawable = paths.filter((p) => {
      const cs = getComputedStyle(p);
      const noFill = cs.fill === "none" || cs.fillOpacity === "0";
      return noFill && cs.stroke !== "none" && p.getAttribute("vector-effect") !== "non-scaling-stroke";
    });
    if (!drawable.length) return;
    svg.setAttribute("data-drawn", "");
    drawable.forEach((p, i) => {
      p.setAttribute("pathLength", "1");
      p.style.setProperty("--i", String(i));
    });
  });
}

export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    // o painel /admin não tem animações de site
    const admin = pathname.startsWith("/admin");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.classList.toggle("jf-motion", !admin && !reduced);
    if (admin || reduced) return;
    let io: IntersectionObserver | undefined;
    const timer = window.setTimeout(() => {
      prepareDrawings();
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
