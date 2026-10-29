"use client";

import { useState } from "react";

/**
 * Capa escolhida no painel + botão de play; ao clicar, troca pelo player do YouTube/Vimeo já tocando.
 * Também deixa a página mais leve (o player só carrega quando a pessoa quer assistir).
 */
export function VideoFacade({ src, cover, title }: { src: string; cover: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const auto = `${src}${src.includes("?") ? "&" : "?"}autoplay=1`;
  return (
    <div className="relative aspect-video overflow-hidden rounded-[var(--jf-radius-sm)] bg-ink-900">
      {playing ? (
        <iframe
          src={auto}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} className="group absolute inset-0 h-full w-full" aria-label={`Assistir: ${title}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={cover} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
          <span className="absolute inset-0 bg-gradient-to-t from-ink-900/50 via-transparent to-transparent" aria-hidden />
          <span
            className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-brand text-cream-50 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-110"
            aria-hidden
          >
            <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8" fill="currentColor">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
