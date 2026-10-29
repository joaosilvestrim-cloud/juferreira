import { mediaCaption, mediaEmbed, type MediaItem } from "@/lib/content";
import { ArrowIcon } from "@/components/ui/Button";
import { VideoFacade } from "@/components/ui/VideoFacade";

/**
 * Vídeo ou áudio cadastrado no painel (Vídeos e áudios). Player quando o link é reconhecido;
 * senão, cartão com link para abrir no site de origem. Nunca toca sozinho.
 */
export function MediaPlayer({ m, tone = "light", showDescription = true }: { m: MediaItem; tone?: "light" | "dark"; showDescription?: boolean }) {
  const e = mediaEmbed(m.url);
  // capa: a escolhida no painel; sem ela, a do próprio YouTube (Vimeo sem capa usa o player direto)
  const yt = e?.type === "iframe" ? e.src.match(/youtube-nocookie\.com\/embed\/([\w-]{11})/)?.[1] : undefined;
  const cover = m.thumb ?? (yt ? `https://i.ytimg.com/vi/${yt}/hqdefault.jpg` : null);
  const muted = tone === "dark" ? "text-cream-50/70" : "text-ink-500";
  const host = (() => {
    try {
      return new URL(m.url).hostname.replace(/^www\./, "");
    } catch {
      return "site de origem";
    }
  })();
  return (
    <figure>
      {e?.type === "iframe" && e.kind === "video" && cover && <VideoFacade src={e.src} cover={cover} title={m.title} />}
      {e?.type === "iframe" && e.kind === "video" && !cover && (
        <div className="relative aspect-video overflow-hidden rounded-[var(--jf-radius-sm)] bg-ink-900">
          <iframe
            src={e.src}
            title={m.title}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      )}
      {e?.type === "iframe" && e.kind === "audio" && (
        <iframe
          src={e.src}
          title={m.title}
          loading="lazy"
          height={e.height ?? 152}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          className="w-full rounded-[12px] border-0"
        />
      )}
      {e?.type === "video" && (
        <video src={e.src} poster={m.thumb ?? undefined} controls preload="none" className="w-full rounded-[var(--jf-radius-sm)] bg-ink-900" title={m.title} />
      )}
      {e?.type === "audio" && <audio src={e.src} controls preload="none" className="w-full" title={m.title} />}
      {!e && (
        <a
          href={m.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center gap-5 rounded-[var(--jf-radius-sm)] border p-5 transition-colors ${
            tone === "dark" ? "border-cream-50/20 hover:border-red-bright" : "border-ink-900/15 bg-cream-50 hover:border-red-brand"
          }`}
        >
          {m.thumb && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={m.thumb} alt="" className="h-20 w-32 shrink-0 rounded-md object-cover" />
          )}
          <span className="flex-1">
            <span className="block font-medium">{m.format === "podcast" ? "Ouvir" : "Assistir"} em {host}</span>
            <span className={`mt-1 block text-[13px] ${muted}`}>Abre em nova aba</span>
          </span>
          <ArrowIcon />
        </a>
      )}
      <figcaption className="mt-4">
        <span className={`block text-[12px] uppercase tracking-[0.14em] ${tone === "dark" ? "text-red-bright" : "text-red-brand"}`}>{mediaCaption(m)}</span>
        <span className="mt-1 block font-serif text-[22px] leading-snug">{m.title}</span>
        {showDescription && m.description && <span className={`mt-2 block text-[15px] leading-relaxed ${muted}`}>{m.description}</span>}
      </figcaption>
    </figure>
  );
}
