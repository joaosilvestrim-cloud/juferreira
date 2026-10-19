import Image from "next/image";
import { photoPosition } from "@/lib/photo-position";

/** Fotografia editorial, com origem explícita para as cenas do ensaio ilustrativo. */
export function Photo({
  src,
  alt,
  className = "",
  imgClassName = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  fill = true,
  width,
  height,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
}) {
  const placeholder = src.includes("/images/ph/");
  const generated = src.startsWith("/images/ensaio/");
  const scene = generated && /palco|palestras|reuniao|conversa|equipe|lideranca|quadro|maternidade/.test(src);
  const quality = placeholder ? 75 : 90;
  if (!fill && width && height) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        quality={quality}
        priority={priority}
        className={`h-auto w-full object-cover ${imgClassName} ${className}`}
        data-placeholder={placeholder ? "foto" : undefined}
        data-photo-origin={generated ? "generated-ai" : undefined}
      />
    );
  }
  return (
    <div
      className={`${/\babsolute\b/.test(className) ? "" : "relative"} overflow-hidden ${className}`}
      data-photo=""
      data-placeholder={placeholder ? "foto" : undefined}
      data-photo-origin={generated ? "generated-ai" : undefined}
    >
      <Image src={src} alt={alt} fill sizes={sizes} quality={quality} priority={priority} className={`object-cover ${imgClassName}`} style={{ objectPosition: photoPosition(src) }} />
      {scene && (
        <span className="absolute bottom-3 right-3 z-10 rounded-sm bg-ink-900/75 px-2 py-1 text-[10px] leading-tight tracking-wide text-cream-50">
          Cena ilustrativa
        </span>
      )}
    </div>
  );
}
