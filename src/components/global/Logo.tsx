import Image from "next/image";
import Link from "next/link";

/**
 * Logo oficial Ju Ferreira (assinatura "Ju" + FERREIRA), vindo do site anterior.
 * Arquivo atual é PNG ampliado a partir de 200×150 px — substituir pelo SVG vetorial quando existir.
 */
export function Logo({ tone = "ink" }: { tone?: "ink" | "light" }) {
  return (
    <Link href="/" aria-label="Ju Ferreira — início" className="group flex items-center">
      <Image
        src={tone === "light" ? "/brand/logo-ju-ferreira-light.png" : "/brand/logo-ju-ferreira-ink.png"}
        alt="Ju Ferreira"
        width={784}
        height={504}
        priority
        className="h-11 w-auto transition-opacity duration-300 group-hover:opacity-75 sm:h-12"
      />
    </Link>
  );
}
