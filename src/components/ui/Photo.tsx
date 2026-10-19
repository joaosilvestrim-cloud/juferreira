import Image from "next/image";

/**
 * Foto editorial. As imagens em /images/ph/ são PLACEHOLDERS recortados dos mockups (geradas por IA)
 * e devem ser trocadas por fotografias reais aprovadas antes do go-live.
 */
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
  // Fotos reais aparecem em colunas altas com object-cover (a imagem é renderizada bem maior que a coluna):
  // pedir a versão de largura total evita servir uma variante pequena ampliada (borrada).
  const real = src.startsWith("/images/ju/");
  if (real) sizes = "(min-width: 1024px) 100vw, 200vw";
  const quality = real ? 90 : 75;
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
      />
    );
  }
  return (
    <div
      className={`${/\babsolute\b/.test(className) ? "" : "relative"} overflow-hidden ${className}`}
      data-placeholder={placeholder ? "foto" : undefined}
    >
      <Image src={src} alt={alt} fill sizes={sizes} quality={quality} priority={priority} className={`object-cover ${imgClassName}`} />
    </div>
  );
}
